import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "."


function RequireAuth({children}){
const {authed}=useContext(AuthContext)

    if(!authed) return <Navigate to="/login"/>
    return children
}
export default RequireAuth