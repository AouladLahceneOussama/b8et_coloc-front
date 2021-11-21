import React,{useState, useEffect} from 'react';
import theme from '../theme/theme';
import menuAdmin from '../styles/menuAdmin.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const StyledLink = styled(Link)`
    color: wite;
    text-decoration: none;
    position: relative;

    &:active{
        color:white;
    }

`;

function MenuAdmin({ openMenu, setOpenMenu }) {

    const [user ,setUser] = useState({})

    useEffect( () => {
        if(localStorage.getItem("userSession") != null )
        axios.get(`http://localhost:8080/api/users/${localStorage.getItem("userSession")}`).then( res=> {
            console.log(res.data);
            setUser({
                "username":res.data.full_name,
                "imgProfile":res.data.profil_image,
            });
        })
    }, [])

    const close = () => {
        setOpenMenu(!openMenu)
    }

    const logout = () => {
        if(localStorage.getItem("userSession") !== null){
            localStorage.setItem("userSession",null);
            window.location.href="/login";
        }
    }

    return (
        <div>
            <div className="menu-container">
                <div className="profile">
                    <span>
                        <img src={ user.imgProfile !== null ? user.imgProfile : "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" } alt="profile-image" />
                        <p>{user.username}</p>
                    </span>

                </div>

                <div className="menu-nav">
                    <StyledLink to="/gesture/dashboard">
                        <div className="menu-item">
                            <i className="fas fa-tachometer-alt"></i>
                            <p>Daskboard</p>
                        </div>
                    </StyledLink>

                    <StyledLink to="/gesture/offer">
                        <div className="menu-item">
                            <i className="fas fa-male"></i>
                            <p>Offers</p>
                        </div>
                    </StyledLink>

                    <StyledLink to="/gesture/demands">
                        <div className="menu-item">
                            <i className="fas fa-clipboard-list"></i>
                            <p>Demands</p>
                        </div>
                    </StyledLink>

                    <StyledLink to="/gesture/settings">
                        <div className="menu-item">
                            <i className="fas fa-cogs"></i>
                            <p>Settings</p>
                        </div>
                    </StyledLink>
                </div>

                <div className="menu-logout" onClick={logout}>
                    <p>Logout</p>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>

            <div className="menu-mobile" style={{ transform: openMenu ? `translateX(0%)` : `translateX(-120%)` }}>

                <div className="profile">
                    <div className="close-menu">
                        <i className="fas fa-times-circle close" onClick={close}></i>
                    </div>
                    <span>
                    <img src={ user.imgProfile !== null ? user.imgProfile : "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" } alt="profile-image" />
                        <p>{user.username}</p>
                    </span>

                </div>

                <div className="menu-nav">
                    <StyledLink to="/gesture/dashboard">
                        <div className="menu-item">
                            <i className="fas fa-tachometer-alt"></i>
                            <p>Daskboard</p>
                        </div>
                    </StyledLink>

                    <StyledLink to="/gesture/offer">
                        <div className="menu-item">
                            <i className="fas fa-male"></i>
                            <p>Offers</p>
                        </div>
                    </StyledLink>

                    <StyledLink to="/gesture/demands">
                        <div className="menu-item">
                            <i className="fas fa-clipboard-list"></i>
                            <p>Demands</p>
                        </div>
                    </StyledLink>

                    <StyledLink to="/gesture/settings">
                        <div className="menu-item">
                            <i className="fas fa-cogs"></i>
                            <p>Settings</p>
                        </div>
                    </StyledLink>
                </div>

                <div className="menu-logout">
                    <p>Logout</p>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </div>

    );
}

export default MenuAdmin;
