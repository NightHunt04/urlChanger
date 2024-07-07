import { useState } from "react"
import signupUser from "../../utils/signup"
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [err, setErr] = useState(false)
    const [usernameTaken, setUsernameTaken] = useState(false)
    const [loader, setLoader] = useState(false)

    const [showPass, setShowPass] = useState(false)
    const [showRePass, setShowRePass] = useState(false) 

    const handleShowPass = () => {
        setShowPass(prev => !prev)
    }

    const handleShowRePass = () => {
        setShowRePass(prev => !prev)
    }

    const handleSignup = async () => {
        if(password !== confirmPassword)
            setErr(true)
        else {
            setLoader(true)
            setErr(false)
            const response = await signupUser({ username: username, password: password })

            if(response.code === 2) {
                setUsernameTaken(true)
                setLoader(false)
            }
            else if(response.code === 1) {
                setUsernameTaken(false)
                setLoader(false)
                navigate('/login')
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-start mt-[45%] 2xl:mt-[15%] border-[1px] m-auto w-[70%] 2xl:w-[500px] border-[#3e3e3e] py-3 rounded-lg">
            <p className="font-semibold text-[15px] 2xl:text-[18px] pb-2 border-b-[1px] border-[#3e3e3e] w-full text-center">Signup</p>

            <div className="relative flex flex-col items-center justify-start w-full gap-10">
                <div className="relative flex flex-col items-center justify-center w-[80%] mt-10">
                    <input 
                        placeholder="Username" 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        onKeyDown={e => {
                            if(e.key === 'Enter')
                                document.getElementById('pass').focus()
                        }}
                        className="border-[1px] border-[#3e3e3e] px-2 py-1 2xl:px-3 2xl:py-2 w-full rounded-lg bg-transparent outline-none focus:border-[#ff661f77] placeholder-transparent transition-all peer" />
                    <label htmlFor="username" className="absolute w-full left-3 bottom-7 2xl:bottom-11 text-[12px] 2xl:text-sm peer-placeholder-shown:text-[13px] 2xl:peer-placeholder-shown:text-base peer-placeholder-shown:bottom-1 2xl:peer-placeholder-shown:bottom-2 peer-placeholder-shown:text-gray-400 peer-focus:text-gray-300 transition-all">Username</label>
                </div>

                <div className="relative flex flex-col items-center justify-center w-[80%]">
                    <input 
                        placeholder="Password" 
                        type={`${showPass ? 'text' : 'password'}`} 
                        id="pass" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onKeyDown={e => {
                            if(e.key === 'Enter')
                                document.getElementById('re-pass').focus()
                        }}
                        className="border-[1px] border-[#3e3e3e] px-2 py-1 2xl:px-3 2xl:py-2 w-full rounded-lg bg-transparent outline-none focus:border-[#ff661f77] placeholder-transparent transition-all peer" />
                    <label htmlFor="pass" className="absolute w-full left-3 bottom-7 2xl:bottom-11 text-[12px] 2xl:text-sm peer-placeholder-shown:text-[13px] 2xl:peer-placeholder-shown:text-base peer-placeholder-shown:bottom-1 2xl:peer-placeholder-shown:bottom-2 peer-placeholder-shown:text-gray-400 peer-focus:text-gray-300 transition-all">Password</label>
                    <button className="absolute z-20 text-gray-300 right-3 text-sm hover:text-white" onClick={handleShowPass}><i className={`fa-regular ${showPass ? 'fa-eye-slash' : 'fa-eye'} text-[10px] 2xl:text-[14px]`}></i></button>
                </div>

                <div className="relative flex flex-col items-center justify-center w-[80%]">
                    <input 
                        placeholder="Confirm password" 
                        type={`${showRePass ? 'text' : 'password'}`} 
                        id="re-pass" 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        onKeyDown={e => {
                            if(e.key === 'Enter')
                                handleSignup()
                        }}
                        className="border-[1px] border-[#3e3e3e] px-2 py-1 2xl:px-3 2xl:py-2 w-full rounded-lg bg-transparent outline-none focus:border-[#ff661f77] placeholder-transparent transition-all peer" />
                    <label htmlFor="re-pass" className="absolute w-full left-3 bottom-7 2xl:bottom-11 text-[12px] 2xl:text-sm peer-placeholder-shown:text-[13px] 2xl:peer-placeholder-shown:text-base peer-placeholder-shown:bottom-1 2xl:peer-placeholder-shown:bottom-2 peer-placeholder-shown:text-gray-400 peer-focus:text-gray-300 transition-all">Confirm password</label>
                    <button className="absolute z-20 text-gray-300 right-3 text-sm hover:text-white" onClick={handleShowRePass}><i className={`fa-regular ${showRePass ? 'fa-eye-slash' : 'fa-eye'} text-[10px] 2xl:text-[14px]`}></i></button>
                </div>
            </div>

            <div className="mt-[45px] 2xl:mt-[70px] flex flex-col items-center justify-center gap-3 mb-3">
                <button onClick={handleSignup} className="px-5 py-1 outline-none border-none hover:opacity-80 bg-[#ff661fd9] rounded-lg">Submit</button>
            </div>

            { loader && <img src="https://media1.tenor.com/m/hBV2DeZaNiUAAAAC/loading-icon.gif" className="w-[19px] 2xl:w-[23px] my-[25px] 2xl:my-[50px]"></img> }
            { err && <p className="mt-2 px-2 pb-2 text-center">Password does <span className="text-red-500">not match</span> the confirmed password!</p>}
            { usernameTaken && <p className="mt-2 px-2 pb-2 text-center">Username already <span className="text-red-500">taken</span>, try using another username.</p>}

        </div>
    )
}

export default Signup