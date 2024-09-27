import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../axiosInstance";
function LoginPage({setUser}) {

    const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post("/auth/log", { name, password });
    if (response.status === 200) {
      console.log(response);
      setUser(response.data.user);
      navigation("/")
    }
  };

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label>
                Никнейм
                <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}>
                </input>
            </label>
            <label>
                Пароль
                <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
                </input>
            </label>
            <button type="submit">Ищи себя на Ельбрус Санкт Петербурга</button>
        </form>
    </div>
  )
}

export default LoginPage