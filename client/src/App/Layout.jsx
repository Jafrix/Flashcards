import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout({user}) {
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
            <li>
              <Link to={"/theme1"}>Тема 1</Link>
            </li>
            <li>
              <Link to={"/theme2"}>Тема 2</Link>
            </li>
            
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