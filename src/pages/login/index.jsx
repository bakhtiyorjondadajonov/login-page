import React, { useContext, useState } from 'react'
import Wrapper from './style'
import {ReactComponent as Cart} from "../../assets/cart.svg"
import { MainButton } from '../../components/button/style'
import { AuthContext } from '../../auth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigator=useNavigate()
    const {authData,setAuthed,authed}=useContext(AuthContext)
const [isPswWrong,setIsPswWrong]=useState(false)
const [userData,setUserData]=useState({
    userName:"",
    password:""
});
const handleOnChange=(e)=>{
const {name,value}=e.target
if(name==="userName"){
    setUserData((prev)=>{
        return {...prev,userName:value}
    })
}
if(name==="password"){
    const regex = /^(?=.*[a-z])(?=.*\d).+$/;
regex.test(value)? setIsPswWrong(false): setIsPswWrong(true)
setUserData((prev)=>{
    return {...prev,password:value}
})  
}

}
const handleOnSubmit=(e)=>{
    e.preventDefault()
    if(isPswWrong)return;
    console.log(userData)
if(userData.userName!==authData.userName) return alert("the user name is wrong!")
if(userData.password!==authData.password)return alert("the password is wrong!")
setAuthed(true)
navigator("/")

}
  return (
    <Wrapper>
    <Wrapper.Container onSubmit={handleOnSubmit}>
<Cart/>
<Wrapper.InputContainer>
   <Wrapper.InputWrapper>
   <Wrapper.Input required name="userName" onChange={(e)=>handleOnChange(e)}  value={userData.userName} type="email" placeholder="username"/>
   <Wrapper.UserIcon/>
   </Wrapper.InputWrapper>
   <Wrapper.InputWrapper>
   <Wrapper.Input required name="password" onChange={(e)=>handleOnChange(e)} value={userData.password} type="password" placeholder="password"/>
   <Wrapper.LockIcon/>
   </Wrapper.InputWrapper>
  {isPswWrong &&  <Wrapper.Error>Wrong Combination!</Wrapper.Error>}
</Wrapper.InputContainer>
   <Wrapper.ButtonContainer>
    <MainButton >Login</MainButton>
    <Wrapper.ForgotPsw>Forgot password?</Wrapper.ForgotPsw>
   </Wrapper.ButtonContainer>
    </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
