import React, { createContext, useState } from "react";
export const AuthContext=createContext({
  authed:null,
  setAuthed:()=>null,
  authData:{
    userName:"test@luxpmsoft.com",
    password:"test1234!"
}
})
function AuthProvider({children}) {
  const authData={
    userName:"test@luxpmsoft.com",
    password:"test1234!"
}
const [authed,setAuthed]=useState(false)
  const value={
authed,
setAuthed,
authData
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
