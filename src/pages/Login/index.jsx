import { useContext, useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import './Login.module.css'
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { fetchLogin } from "../../api"
import axios from "axios"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../config/firebase'
import md5 from 'md5-hash'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [errorMsg, setErrorMsg] = useState({
        email: '',
        password: ''
    })
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleFormInput = (e) => {
        const { name, value } = e.target

        // handle state form change / cara mengubah state data secara immutable
        setForm({
            ...form, // nyalin
            [name]: value // mengubah
        })

        validateLogin(e)
    }

    // melakukan HTTP request ke /login
    const postLogin = () => {
        // sign in with Firebase 
        const password = md5(form.password)
        console.log(password);
        signInWithEmailAndPassword(auth, form.email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                sessionStorage.setItem(user)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

        // sign in with API
        /*
        fetchLogin(form)
            .then(res => {
                // handle success login
                if(res.status === 200){
                    console.log('login success', res.data)
                    // { token: 'ehjkasdjlkasdlkdjadkjasjkldaskldkl" }
                    const token = res.data.token
                    // store token in session storage
                     sessionStorage.setItem('token', token)   
                    // navigate to home

                }
            })
            // Error handling
            .catch(err => alert('Gagal melakukan login : ' + err.message))*/
    }

    const handleClickLogin = (e) => {
        e.preventDefault()
        // login()

        // TODO: memanggil fungsi yang melakukan HTTP request ke /login
        postLogin()
    }

    const validateLogin = (e) => {
        const { name, value } = e.target
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if(name === "email"){
            // validasi email tidak boleh kosong
            if(value === "") {
                setErrorMsg({
                    ...errorMsg,
                    email: 'Email tidak boleh kosong.'
                })
            } else if(!emailRegex.test(value)){
                setErrorMsg({
                    ...errorMsg,
                    email: 'Masukkan email yang valid.'
                })
            }
            else {
                setErrorMsg({
                    ...errorMsg,
                    email: ''
                })
            }
        } else if(name === "password") {
            // validasi password tidak boleh kosong
            if(value === "") {
                setErrorMsg({
                    ...errorMsg,
                    password: 'Password tidak boleh kosong.'
                })
            } else if(!passwordRegex.test(value)){
                setErrorMsg({
                    ...errorMsg,
                    password: 'Password harus memiliki setidaknya 8 character, 1 special character, angka, dan huruf.'
                })
            } else {
                setErrorMsg({
                    ...errorMsg,
                    password: ''
                })
            }
        } else {

        }
    }

    return(
        <form className="login-form">
            <Input 
                type="email"
                value={form.email}
                name='email'
                placeholder='Masukkan alamat email...'
                onChange={(e) => handleFormInput(e)}
            />
            <p className="error">{errorMsg.email}</p>
            <Input 
                type="password"
                value={form.password}
                name='password'
                placeholder='Masukkan password...'
                onChange={(e) => handleFormInput(e)}
            />
            <p className="error">{errorMsg.password}</p>
            <Button 
                text='Login'
                onClick={(e) => handleClickLogin(e)}
            />
        </form>
    )
}

export default Login