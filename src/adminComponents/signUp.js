import React from 'react';
import Button from '../basicComponents/button';
import Input from '../basicComponents/input';
import { FONTS } from '../theme/theme';
import { COLORS } from '../theme/theme';
import { useState } from 'react';
import Select from '../basicComponents/select';
import axios from 'axios';
import logoWhite from '../assets/logo/b8et_colloc_logo_white.png';

function SingUp(props) {

    const [signUp, setSignUp] = useState({});
    const GenderOptions = ["Male", "Female"];
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
        console.log("test signup")
        e.preventDefault();
        if (signUp?.password === signUp?.confirmPassword) {
            console.log(JSON.stringify(signUp))
            axios.post('http://localhost:8080/api/signup', signUp).then(res => {
                if (res.data === "ok")
                    window.location.href = "/login"
                alert(res.data)
            })
        }
        else alert('passwords does not matched')
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
                width: 800,
                height: 500
            }}>


                <div style={{
                    width: "100%",
                    paddingLeft: "100px",
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
                    Sign Up
                </span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div style={{
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        padding: 10,
                    }}>
                        <Input label="Full name" name="full_name" data={signUp} setData={setSignUp} width="300px" />
                        <Input label="Username" name="user_name" data={signUp} setData={setSignUp} width="300px" />
                    </div>

                    <div style={{
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',

                        padding: 10,
                    }}>
                        <Input label="Phone" width="300px" name="phone" data={signUp} setData={setSignUp} />
                        <Input label="Password" width="300px" name="password" data={signUp} setData={setSignUp} type={type} icon={icon} onClickIcon={() => handleIconClick()} />
                    </div>

                    <div style={{
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',

                        padding: 10,
                    }}>

                        <Select label="Gender" options={GenderOptions} width="300px" name="gender" data={signUp} setData={setSignUp} />
                        <Input label="Confirm password" width="300px" name="confirmPassword" data={signUp} setData={setSignUp} type={type} />
                    </div>

                    <div style={{
                        marginTop: 20,
                        width: "650px",
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Button bgColor={COLORS.lightGreen} width="100px" text="Sign Up" type="submit" />
                    </div>
                </form>

            </div>

        </div>
    );
}

export default SingUp;