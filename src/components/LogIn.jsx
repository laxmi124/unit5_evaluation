import React,{useState,useContext} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
// import {useDispatch,useSelector} from 'react-redux';






function LogIn() {
    const dispatch = useDispatch()
     let {logIn,logOut,setToken} = useContext(AuthContext);
     const navigate = useNavigate();

    const [formvalue,setValue] = useState({
        username:"",
        password:"",
    });
    function handleChange(e){
        let {name,value} = e.target;
        setValue({
            ...formvalue,
            [name] : value,
        })
        console.log(formvalue);
    };
    function submitForm(e){
        e.preventDefault()

        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setToken(res.token)
            res.token?logIn():logOut()
            res.token?navigate('/'):navigate('/LogIn')
        })
        .catch((err)=>console.log(err));
    };;


   
    const {username,password} = formvalue;
  return (
      <div>

          <form onSubmit={submitForm}>
              <input type="text" placeholder="userName" name="username" onChange={handleChange} value={username}/>
              <input type="text" placeholder="Password" name="password" onChange={handleChange} value={password}/>
              <input type="submit" value="submit" />
          </form>
      </div>
  )
}
export default LogIn

