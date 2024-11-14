import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const [login, setlogin] = useState(true);
    const [localData, setLocalData] = useState('');

    useEffect(() => {
        console.log('localData::', localData);

    }, [localData])

    const handleChange = (e) => {
        let { name, value } = e.target;

        setLocalData(prev => ({
            ...prev,
            [name]: value
        }))

    }


    return (
        <div className="flex justify-center">
            <div className="w-96 border rounded-md p-8 space-y-4 shadow-lg">
                <b className="text-gray-700 text-2xl font-semibold">{login ? 'Login' : 'Create Account'}</b>
                <p className="text-gray-600  text-sm">Please {login ? 'log in' : 'sign up'} to book appointment</p>
                <div className="flex flex-col text-gray-500  space-y-3">
                    {!login &&
                        <>
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                className=" border rounded-md py-2"
                                type="text"
                                name='fullName'
                                value={localData.fullName}
                                onChange={handleChange}
                            />
                        </>

                    }
                    <label htmlFor="email">Email</label>
                    <input
                        className=" border rounded-md py-2"
                        type="text"
                        name='email'
                        value={localData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        className=" border rounded-md py-2"
                        type="text"
                        value={localData.password}
                        name='password'
                        onChange={handleChange}
                    />

                    <button
                        className="bg-primary rounded-md py-2 text-white"
                    >{login ? 'Login' : 'Create account'}</button>
                </div>
                <p className="text-gray-600  text-sm">{login ? 'Already have an account?' : 'Create an new account?'}
                    <span onClick={() => { setlogin(!login) }} className="text-primary underline cursor-pointer">{login ? 'Click here' : 'Login here'}</span>
                </p>
            </div>
        </div>
    )
}

export default Login;