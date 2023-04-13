import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar py-4'>
      <div className='container'>
      <Link to="/createQuestion"><button className='btn btn-warning'>Create Quiz</button></Link>
      <Link to="/" ><button className='btn btn-danger'>Take Quiz</button></Link>
      <Link to="/editQuestion"><button className='btn btn-primary '>Edit Quiz</button></Link>
      </div>
      
    </div>
  )
}

export default Navbar