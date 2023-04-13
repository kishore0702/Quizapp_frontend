import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import {store} from '../App';
 import {useFormik} from 'formik'



const CreateQuestion= () => {
  const URL="http://localhost:8081";
  const data = useContext(store);
  console.log(data);
  const formik=useFormik({
    initialValues:{
      question:"",
      option1:"",
      option2:"",
      option3:"",
      answer:""
    },
    onSubmit : async(values)=>{
      try{
        await axios.post(`${URL}/createQuestion`,values).then((res)=>{
          alert("Question created successfully")
        })
        formik.values.question=""
        formik.values.option1=""
        formik.values.option2=""
        formik.values.option3=""
        formik.values.answer=""
      }catch(err){
        console.log(err);
      }
  }
  
  })

  return (
    <>
    <div className='head'> 
      <h1>You can create a question here</h1>
    </div>
    <form onSubmit={formik.handleSubmit}>
    <div className='container' style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.question} id='question' className='form-control' type="text" placeholder='Enter your question here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.option1} id='option1' className='form-control' type="text" placeholder='Enter your option1 here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.option2} id='option2' className='form-control' type="text" placeholder='Enter your option2 here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.option3} id='option3' className='form-control' type="text" placeholder='Enter your option3 here'/>
      <input style={{width:'500px',marginTop:'15px'}} onChange={formik.handleChange} value={formik.values.answer} id='answer' className='form-control' type="text" placeholder='Enter your answer here'/>
      <button  className='btn btn-success mt-4' type='submit'>Submit</button>
    </div>

    </form>
    
    </>
  )
}

export default CreateQuestion