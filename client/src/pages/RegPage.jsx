import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from "../axiosInstance";

function RegPage({setUser}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [rpassword, setRpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [showError, setShowError] = useState(false)

    const navigation = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(password !== rpassword){
            setErrorMessage("ТЫ ОШИПЬСЯ")
            setShowError(true)
        }else{
            setShowError(false)
            const response = await axiosInstance.post("/auth/reg", {name, password})
            response.status === 201 ? setUser(response.data.user):   setErrorMessage("Увынск")
            navigation("/")
        }
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
        <ul style={{ gap: "20px"}}>
            <label>
                Никнейм
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Пароль
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                ПОВТОРИ СВОИ КАРАКУЛИ
                <input type="password" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
            </label>
            <ul>
            <button type="submit">Кнопка самоуничтожения iq</button>    
            </ul>
    
            </ul>
            
        </form>
        {
            showError && <div style={{border: "1px solid red"}}>{errorMessage}</div>
        }
    </div>
  )
}

export default RegPage