import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../userComponents/input/index";
import { Marginer } from "../../userComponents/marginer/index";
import axios from 'axios';
import Img from "../../assets/illustrations/contact.jpg";
import { Container } from "../offerElements";


const BackgroundFilter = styled.div`

  width: 100%;
  height: 100vh;
  background-color:rgba(7,185,43,0.1);
  display: flex;
  flex-direction: rows;
  align-items: center;
`;

const MainContainer = styled.div`
    @media only screen and (max-width: 320px) {
      width: 80vw;
      height: 90vh;
      hr {
        margin-bottom: 0.3rem;
      }
      h4 {
        font-size: small;
      }
    }
    @media only screen and (min-width: 360px) {
      width: 80vw;
      height: 90vh;
      h4 {
        font-size: small;
      }
    }

    @media only screen and (min-width: 411px) {
      width: 80vw;
      height: 90vh;
    }

    @media only screen and (min-width: 768px) {
      width: 80vw;
      height: 80vh;
    }
    @media only screen and (min-width: 1024px) {
      width:76vw;
      height: 80vh;
    }
  `;

const ContainerGlobal = styled.div`
    width:100%;
    height:100vh;
  `;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 30%;
  `;

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 70%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left:100px;
  justify-content: space-around;
  align-items: center;
  width:70%;
`;

const GenderInput = styled.div`
  color:white;
  background-color:rgb(7,185,43);
  border-radius:100%;

  @media only screen and (max-width: 320px) {
    width: 6vh;
    height:6vh;
    p {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 6vh;
    height: 6vh;
    p {
      font-size: small;
    }
  }

  @media only screen and (min-width: 411px) {
    width: 6vh;
    height: 6vh;
    p {
      font-size: small;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 6vh;
    height: 6vh;
    p {
      font-size: small;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 6vh;
    height: 6vh;
    p {
      font-size: small;
    }
  }
`;

const Gender = styled.div`
  margin-top:40px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024) {
    p {
      font-size: small;
    }
  }
`;

const Right = styled.div`
 padding:60px;
`;

const Left = styled.div`
  padding:60px;
`;

const Image = styled.input`
  height:13vh;
  width:13vh;
  display: flex;
  flex-direction: row;
  border-radius:100%;
  background-color:rgb(7,185,43);
  margin-top:50px;
  
`;
const ButtonContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  position:absolute;
  right:0;
`;
const AboutImg = styled.img`
height:13vh;
width:13vh;
display: flex;
flex-direction: row;
border-radius:100%;
background-color:rgb(7,185,43);
margin-top:50px;
`;
export default function Settings(props) {

  const [data, setData] = useState({

  });

  const [Users, setUsers] = useState({});
  const [userId, setUserId] = useState();



  //Demands From API
  useEffect(() => {
    if (localStorage.getItem('userSession') !== null) {
      setUserId(localStorage.getItem('userSession'));
      axios.get(`http://localhost:8080/api/users/${localStorage.getItem('userSession')}`)
        .then(res => {
          setUsers(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [])


  const [picture, setPicture] = useState(null);

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  /*
  updateUser = (event) => {
      event.preventDefault();
  
      const user = {
        user_id: 1,
        full_name: this.state.full_name,
        phone: this.state.phone,
        email: this.state.email,
        university: this.state.university,
        degree: this.state.degree,
      };
      this.props.updateUser(user);
      setTimeout(() => {
        if (this.props.userObject.user != null) {
          this.setState({ show: true, method: "put" });
          setTimeout(() => this.setState({ show: false }), 3000);
        } else {
          this.setState({ show: false });
        }
      }, 2000);
      this.setState(this.initialState);
    };
  
  
  
  
  function updateUser()
  {
    console.warn("item",Users)
    fetch(`http://localhost:8080/api/v1/users/1`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(Users)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })
  }
  */


  function UpdateUser(e) {
    e.preventDefault();
    console.log("++++++++++++++++" + JSON.stringify(Users, null, 2));
    axios.post(`http://localhost:8080/api/users/update/${userId}`, { ...Users }).then(res => {
      console.log(res);
    });
  }
  return (
    <Container>
      <form onSubmit={UpdateUser}>
        <ImageContainer style={{ flex: 1 }}>
          <div className="register_profile_image">
            <input id="profilePic" type="file" src={picture && picture} onChange={onChangePicture} setData={setUsers} data={Users} />
            <div className="previewProfilePic" >
              <img className="playerProfilePic_home_tile" src={picture && picture} style={{
                width: '100px',
                height: '100px',
                borderRadius: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }} ></img>
            </div>
          </div>

          <InputContainer>

            <Input label="Full Name" width="400px" name="full_name" setData={setUsers} data={Users} icon="edit" />
            <Gender><GenderInput><i
              style={{
                fontSize: 30,
                marginLeft: 11,
                marginTop: 9,
              }}
              class="fas fa-user"></i></GenderInput><p style={{ marginLeft: 20, color: '#848282' }}>{Users.gender}</p></Gender>
          </InputContainer>
        </ImageContainer>
        <InputsContainer style={{ flex: 1 }}>
          <Right style={{ flex: 1 }}>
            <Input label="Phone" name="phone" setData={setUsers} data={Users} icon="edit" />
            <Input label="Email" name="email" setData={setUsers} data={Users} icon="edit" />
            <Input label="University" name="university" setData={setUsers} data={Users} icon="edit" />
            <Input label="Degree" name="degre" setData={setUsers} data={Users} icon="edit" />
          </Right>
          <Left style={{ flex: 1 }}>
            <Input label="Username" name="user_name" setData={setUsers} data={Users} icon="edit" />
            <Input label="Password" type='password' name="password" setData={setUsers} data={Users} />
            <Input label="Confirm Password" type='password' name="Confirm" setData={setUsers} data={Users} />
            <Marginer direction="vertical" margin="5em" />
            <input type="submit" style={{
              backgroundColor: "#07B92B",
              color: "#fff",
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '50%',
              borderRadius: '20px',
              fontSize: '19px',
              marginLeft: '130px',
              border: 'none',
            }} value="Submit" />
          </Left>
        </InputsContainer>
      </form>
    </Container>

  );
}
