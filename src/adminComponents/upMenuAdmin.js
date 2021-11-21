import React, { useEffect,useState } from "react";
import upMenuAdmin from '../styles/upMenuAdmin.css';
import axios from 'axios';

const UpMenuAdmin = ({ openMenu, setOpenMenu }) => {

    const [user, setUser] = useState({});
    useEffect(() => {
        if (localStorage.getItem("userSession") != null)
            axios.get(`http://localhost:8080/api/users/${localStorage.getItem("userSession")}`).then(res => {
                console.log(res.data);
                setUser({
                    "username": res.data.full_name,
                });
            })
    }, [])

    const open = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="container-upmenu">

            <p>
                <i className="fas fa-align-left menu-icon" onClick={open}></i>
                Welcome back {user.username}
            </p>
            <i className="fas fa-bell bell"></i>
        </div>
    )
}

export default UpMenuAdmin;