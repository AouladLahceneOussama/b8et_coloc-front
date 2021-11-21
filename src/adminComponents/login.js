import React from 'react';
import Button from '../basicComponents/button';
import Input from '../basicComponents/input';
import { FONTS } from '../theme/theme';
import { COLORS } from '../theme/theme';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoWhite from '../assets/logo/b8et_colloc_logo_white.png';

const StyledLink = styled(Link)`
    color: wite;
    text-decoration: none;
    position: relative;

    &:active{
        color:white;
    }
`;


function Login(props) {

    const [login, setLogin] = useState({});
    const [error, setError] = useState({});

    const [type, setType] = useState("password")
    const [icon, setIcon] = useState("eye")

    const handleIconClick = () => {
        if (type === "password") {
            setType('text');
            setIcon('eye-slash');
        }
        else {
            setType('password');
            setIcon('eye')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login)
        axios.post('http://localhost:8080/api/login', login).then(res => {
            if (res.data === 0)
                console.log(res.data);
            else {
                window.location.href = "/gesture/offer"
                localStorage.setItem('userSession', res.data);
            }
        })
    }

    return (
        //
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)) , url("https://bostonglobe-prod.cdn.arcpublishing.com/resizer/sSO6mgfJs3MwiNbZKV8JM-ahfFY=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ZTNK7NRE7UI6FOOVLISGFY3ECQ.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'ceter',
            width: '100vw',
            height: '100vh'

        }}>

            <div style={{
                display: 'flex',
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 50,
                paddingTop: 50,
                flexDirection: 'column',
                alignItems: 'center',
                width: 500,
                height: 500,

            }}>

                <div style={{
                    width: "400px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                    <img src={logoWhite} style={{ width: "100px" }} />
                </div>
                <span style={{
                    ...FONTS.bigTitle,
                    color: COLORS.lightGreen.primary,
                }}>
                    Login
                </span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Input label="Username" width="300px" name="user_name" data={login} setData={setLogin} error={error} setError={setError} />
                    <Input label="Password" width="300px" name="password" data={login} setData={setLogin} type={type} icon={icon} onClickIcon={() => handleIconClick()} />

                    <p style={{
                        width: "300px",
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textDecoration: 'underline',
                        ...FONTS.label
                    }}>Forget password?</p>

                    <div style={{
                        marginTop: 20,
                        width: "300px",
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Button bgColor={COLORS.lightGreen} width="100px" text="login" type="submit" />
                    </div>
                </form>
                <p
                    style={{
                        marginTop: 20,
                        width: "300px",
                        textDecoration: 'underline',
                        textAlign: 'center',
                        color: "white",
                        ...FONTS.label
                    }}> 
                    you don't have an account? 
                    <br />
                    <StyledLink to="/signup">
                        Register one
                    </StyledLink>
                </p>
            </div>
        </div>
    );
}

export default Login;