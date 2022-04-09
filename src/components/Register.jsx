import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function Register() {
  const navigate = useNavigate()
     let {handleAuth,logOut,setToken} = useContext(AuthContext);
      let [RegisterData,setRegisterData] = useState(false);
      let [message,setMessage] = useState('')

    const [formvalue,setValue] = useState({
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: "" 
    });
    function handleChange(e){
        let {name,value} = e.target;
        setValue({
            ...formvalue,
            [name] : value,
        })
        // console.log(formvalue);
    };
    function submitForm(e) {
      e.preventDefault();
      // console.log(formvalue);
      fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
        method: "POST",
        body: JSON.stringify(formvalue),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setMessage(res.message);
          // setToken(res.token)
          // res.token?handleAuth():logOut()
        })
        .catch((err) => console.log(err));
    }
    console.log(message)

    if (message === "Registration Success"){
      navigate('/LogIn')
    }
  

    const {name,email,password,username,mobile,description} = formvalue;
  return (
      <div>

          <form onSubmit={submitForm}>
              <input type="text" placeholder="name" name="name" onChange={handleChange} value={name}/>
              <input type="text" placeholder="username" name="username" onChange={handleChange} value={username}/>
              <input type="text" placeholder="Email" name="email" onChange={handleChange} value={email}/>
              <input type="text" placeholder="Password" name="password" onChange={handleChange} value={password}/>
              <input type="text" placeholder="mobile" name="mobile" onChange={handleChange} value={mobile}/>
              <input type="text" placeholder="description" name="description" onChange={handleChange} value={description}/>
              <input type="submit" value="redirected to the login page" />
          </form>

      </div>
  )
}
export default Register

