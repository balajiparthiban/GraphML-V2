import { useRef } from "react";
import { useUserContext } from "../../context/userContext";
// import LoginImg from '../../images/login-img.png'

const SignUp = () => {

    const emailRef = useRef();
    const psdRef = useRef();
    const nameRef = useRef()

    const { registerUser } = useUserContext()

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        const name = nameRef.current.value;
        if (email && name && password) registerUser(email, name, password)
    };


    return (
        <div className="form">
            <h2>New User</h2>
            <form className='login-page-wrapper' onSubmit={onSubmit}>

                {/* <div className='login-left'>
                    <img src={LoginImg} alt={LoginImg} />
                </div> */}


                <div className='login-right'>
                    <div className='login-bg'>
                        <h3>SignUp now</h3>

                        <div className='name'>
                            <input
                                type="text"
                                placeholder='Name'
                                ref={nameRef}
                            />
                        </div>

                        <div className='email'>
                            <input
                                type="text"
                                placeholder='Email'
                                ref={emailRef}
                            />
                        </div>

                        <div className='password'>
                            <input
                                type="password"
                                placeholder='Password'
                                ref={psdRef}
                            />
                        </div>

                        <div className='sign-btn'>
                            <button type="submit">Register</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp