import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateQuestion from "./components/CreateQuestion";
import Navbar from "./components/Navbar";
import {useFormik} from 'formik';
import {useState} from 'react';
import {createContext} from 'react';
import EditQuestion from './components/EditQuestion';
import QuizCard from './components/QuizCard';

export const store =createContext();

const App=()=>{

  const formik=useFormik({
    initialValues:{
      question:"",
      option1:"",
      option2:"",
      option3:"",
      answer:""
    }
  })
const [data,setData]=useState(formik.values)
return(
  <storeProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/createQuestion" element={<CreateQuestion formik={formik}/>}  />
    <Route path="/editQuestion" element={<EditQuestion formik={formik}/>} />
    <Route path="/" element={<QuizCard formik={formik}/>}/>
    </Routes>
    </BrowserRouter>
  </storeProvider>
)
}

export default App;
