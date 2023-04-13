import React, { useState,useEffect } from 'react';
import {useFormik} from 'formik'
import axios from 'axios'
import {store} from '../App';
import {useContext} from 'react';
import {Link} from 'react-router-dom'


const EditQuestion = ({formik}) => {
    const URL="http://localhost:8081";

    
  const [timer,setTimer]=useState(0)
  const [Question,setQuestion] =useState([])
  const getQuestions=()=>{
    axios.get(`${URL}/Questions`).then((res)=>{
      setQuestion(res.data)
    })
  }

  useEffect(()=>{
    getQuestions();
  },[timer]);
const handleEdit=(id)=>{
axios.get(`${URL}/question/${id}`).then((res)=>{
  formik.setValues(res.data);
})
}

const data = useContext(store);
  console.log(data);
const updateFunction=()=>{
  try{
    axios.put(`${URL}/updateQuestion/${formik.values._id}`,formik.values).then((res)=>{
      alert("Question updated successfully")
    })
  }catch(err){
    console.log(err);
  }
 
}


const handleUpdate=()=>{
updateFunction();
formik.values.question=""
formik.values.option1=""
formik.values.option2=""
formik.values.option3=""
formik.values.answer=""
}
const handleDelete=(id)=>{
    try{
      axios.delete(`${URL}/deleteQuestion/${id}`).then((res)=>{
        alert("question deleted successfully")
        setTimer(timer+1)
      })
    }catch(err){
      console.log(err);
    }
    

}

  return (
    <>
    <div className='edit' >
        <h1>Please select the question if you want to edit or delete</h1>
    </div>
    <div className='container' style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
    <div >
    {
      Question.map((item)=>{
        return(
          <>
          <input style={{width:'500px'}} className='form-control' value={item.question } />
          <button className='btn btn-success' onClick={()=>handleEdit(item._id)}>Edit</button>
          <button className='btn btn-danger'onClick={()=>handleDelete(item._id)} >Delete</button>
          </>
        )
      })
    }
      
    </div>
    <div >
    <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.question} id='question' className='form-control' type="text" placeholder='Enter your question here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.option1} id='option1' className='form-control' type="text" placeholder='Enter your option1 here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.option2} id='option2' className='form-control' type="text" placeholder='Enter your option2 here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.option3} id='option3' className='form-control' type="text" placeholder='Enter your option3 here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.answer} id='answer' className='form-control' type="text" placeholder='Enter your answer here'/>
      <button onClick={handleUpdate} className='btn btn-success update' type='submit'>Update</button>
    </div>
    </div>
    
    </>
    
        
  )
}

export default EditQuestion