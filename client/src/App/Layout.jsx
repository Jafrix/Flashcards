import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { axiosInstance } from '../axiosInstance'
import ThemeItem from '../component/Theme/ThemeItem'

function Layout({user}) {

    const [themes, setThemes] = useState([])
    



    const loadThemes = async () => {
        try {
            const response = await axiosInstance.get("/theme")
            
            if (response.status === 200){
                setThemes(response.data.themes)   
            }
        } catch (error) {
            console.log(error.message);
        } 
    }



useEffect(() => {
    loadThemes();
}, []
);

  return (
    <>
    <nav>
        <div style={{fontSize: "40px", fontWeight: "700"}}> Привет Эльбрусовец ! 
            <ul style={{display: "flex", justifyContent: "space-between", gap: "20px", listStyle: "none", }}>
                
                    {
                        !user &&  (<><li><Link to={"/login"}>Авторизация ? </Link>
            </li>
            <li>
              <Link to={"/reg"}>Регистрация : ""</Link>
            </li></>)
                    }
             
            
            <li>
              {
                user ? "Привет, " + user.name : null
              }
            </li></ul>
        <ul style={{display: "flex", flexDirection: "column", gap: "20px", listStyle: "none"}}>
        <li>
              <Link to={"/"}></Link>
            </li>
            {
               themes.map((obj) => <ThemeItem key={obj.id} obj ={obj}/>) 
            }
            
          </ul>
        </div>
    </nav>
    <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout