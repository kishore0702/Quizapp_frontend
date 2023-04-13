import React from 'react';
import {useState, useEffect}from 'react';
import axios from 'axios';


const QuizCard = ({formik}) => {
    const URL="http://localhost:8081";
    const [index,setIndex]=useState(0);
    const [choose,setChoose]=useState('');
    const [count,setCount]=useState(0);

    const [data,setData]=useState([
        {
            question:"",
            option1:"",
            option2:"",
            option3:"",
            answer: ""
        }
    ]);

    const getQuestions= async()=>{
       await axios.get(`${URL}/Questions`).then((res)=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        getQuestions();
    })
    const handleChoose = (option)=>{
      setChoose(option);
    }
    const handleNext = (ans)=>{
        if(choose === ans){
            setCount(count+1)
        }
        if(index<data.length){
            setIndex((i)=>i+1)

        }
    }
    const handleRetake = () => {
        window.location.reload();
      } 
    
  return (
    <div className='container'>
        {
        index == data.length ?
        <div className='bg-warning mt-4 text-dark  container py-4'>
        <h1>Congratulations....</h1>
        <h1 className='my-4'>Your test has been completed and you scored {count}/{data.length}</h1>
        <button className='btn btn-success' onClick={handleRetake}>Try again</button>
        </div>:
    
    
    
    <>
    <div className='main-head'>
        <h1>Welcome to the Quiz </h1>
    </div>
        
    <div className='container card'>
        <label className='question'>{index+1}.{data[index].question} </label>
        <div className='form-check mt-3 form-check-inline'>
            <p><input type='radio' className='form-check-input' name='option' id='option1' value="option1" onClick={()=>handleChoose(data[index].option1)}/>{data[index].option1}</p>
        </div>
        <div className='form-check mt-3 form-check-inline'>
            <p><input type='radio' className='form-check-input' name='option' id='option2' value="option2"  onClick={()=>handleChoose(data[index].option2)}/>{data[index].option2}</p>
        </div>
        <div className='form-check mt-3 form-check-inline'>
            <p><input type='radio'className='form-check-input'name='option' id='option3' value="option3"  onClick={()=>handleChoose(data[index].option3)}/>{data[index].option3}</p>
        </div>
        <div>
            <button type='submit' className='btn btn-success' onClick={()=>handleNext(data[index].answer)}>Next</button>
        </div>
        
    </div>
    
    </>
}
    </div>
  )
}

export default QuizCard