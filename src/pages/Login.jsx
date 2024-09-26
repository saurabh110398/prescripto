import { useNavigate } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();


    return (
        <>
            Login
            <button onClick={()=>{
                navigate('/')
            }}>Login</button>
        </>
    )
}

export default Login;