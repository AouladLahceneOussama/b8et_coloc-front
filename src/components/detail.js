import React, { useEffect, useState } from 'react';
import './detail.css';
import Input from './input ';
import Radio from './radio';
import { Slide } from 'react-slideshow-image';
import Button from './button';
import { COLORS, FONTS } from "../theme/theme";
import Slideshow from './slide';
import Offers from './offers';
import './image.css';
import Slide_nonDispo from './slide_nonDispo';
import Footer from './footer';
import Menu from '../topMenu/Menu';
import MenuNav from '../topMenu/MenuNav';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//import user from './user.jpeg'



function Detail() {
     //les info de room
     let params = useParams();

     const [rooms, setrooms] = useState([]);
     useEffect(() => {

          axios.get(`http://localhost:8080/api/offers/${params.id}/rooms`)
               .then(res => {
                    setrooms(res.data)


               })
               .catch(err => {
                    console.log(err);
               })
     }, [params])


     //rom1
     const displayroom = rooms.map((rom) => {
          return (
               rom.nbr_bed_dispo ?
                    <div className="container">
                         <Slideshow image={rom.image1 !== "" && require("../images/" + rom.image1).default} image2={rom.image2 !== "" && require("../images/" + rom.image2).default} nbr={rom.nbr_personne} price={rom.price} nbr_bed={rom.nbr_bed_dispo} titule={rom.intitule} equipement={rom.equipment} />
                    </div> : <Slide_nonDispo image={rom.image1 !== "" && require("../images/" + rom.image1).default} />
          );
     })

     //romDemande
     const [demande, setdemande] = useState({
          "offer": { "offer_id": params.id },
          "room": { "room_id": "" },
          "fullName": "",
          "phoneNumber": "",
          "university": "",
          "degre": "",
          "comment": "",
          "statut": "0="
     });



     const display = rooms.map((rad) => {

          if (rad.nbr_bed_dispo != "") {
               return (
                    <Radio id_room={rad.room_id} image={rad.image1 !== "" && require("../images/" + rad.image1).default} setdata={setdemande} data={demande} />
               );
          }

     })



     const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setdemande(values => ({ ...values, [name]: value }))
     }

     //get offers et users by id
     const [offres, setOffres] = useState({});
     const [utilisateurs, setUtilisateurs] = useState({});

     useEffect(() => {
          axios.get(`http://localhost:8080/api/offers/${params.id}`)
               .then(res => {
                    setOffres(res.data)
                    setUtilisateurs(res.data.user)

               })
               .catch(err => {
                    console.log(err);
               })
     }, [params])
     //condition



     const con = offres.contrat ?

          <p style={{ fontSize: 14, fontWeight: "500", color: "white" }}> <i class="fas fa-file-signature"></i> avec contrat</p> :
          <p style={{ fontSize: 14, fontWeight: "500", color: "white" }}> <i class="fas fa-file-signature"></i>
               sans contrat</p>

     const city = offres.city
     const idOffer = offres.offer_id
     const water = offres.water_electricity
     const wifi = offres.wifi
     const adress = offres.address



     //offersLike
     const [offerLike, setOffreLike] = useState([]);

     useEffect(() => {
          axios.get('http://localhost:8080/api/offers')
               .then(res => {
                    setOffreLike(res.data)
               })
               .catch(err => {
                    console.log(err);
               })
     }, [])

     const displayoffer = offerLike.slice(0, 3).map((off) => {
          if (off.city == city && off.offer_id != idOffer || off.water_electricity == water || off.wifi == wifi || off.address == adress) {
               return (
                    // <h4> {off.user.full_name}</h4>
                    <Offers key={off.offer_id} id={off.offer_id} img={off.image !== "" && require("../images/" + off.image).default} image={off.user.profil_image} Nom={off.user.full_name} />

               );
          }

     })

     //add demand

     function saveDemand() {
          axios.post('http://localhost:8080/api/demands/add',
               { ...demande }).then(res => {
                    console.log(res);
                    window.location.reload();
               });

     }

     function href() {
          window.location.href = "#de";
     }


     return (

          <div >
               <Menu />
               <div
                    style={{
                         display: "flex",
                         justifyContent: "flex-start",
                         alignItems: "flex-start",
                         flexWrap: "wrap",
                         height: "100vh",
                         width: "100%",
                    }}>

                    <div className="profil">

                         <div className="profil-detail">
                              <h4> offer owner</h4>
                              <img src={utilisateurs.profil_image} className="logo" />
                              <h3> {utilisateurs.full_name}  </h3>
                              <hr className="ligne" />
                         </div>

                         <div style={{
                              justifyContent: "flex-start"
                         }}>
                              <div className="tele">
                                   <i className="fas fa-phone-alt"></i>
                                   <p style={{ ...FONTS.smallTitle, }}>
                                        {utilisateurs.phone}</p>

                              </div>

                              <div className="tele">
                                   <i class="fas fa-envelope"></i>
                                   <p style={{
                                        ...FONTS.smallTitle,
                                   }}>{utilisateurs.email} </p>
                              </div>

                              <div className="tele">
                                   <i class="fas fa-graduation-cap"></i>
                                   <p style={{
                                        ...FONTS.smallTitle,
                                   }}>{utilisateurs.degre} </p>
                              </div>

                              <div className="tele">
                                   <i class="fas fa-school"></i>
                                   <p style={{
                                        ...FONTS.smallTitle,
                                   }}>{utilisateurs.university} </p>
                              </div>
                         </div>
                         <div className="button">
                              <Button text="send Demand" width="150px" bgColor={COLORS.lightGreen} onClick={href} />
                         </div>
                    </div>





                    <div className="detail">
                         <h4>House Detail</h4>
                         <div className="description">
                              <div className="localisation">
                                   <i class="fas fa-map-marker-alt"></i>
                                   <p style={{
                                        fontSize: 14, fontWeight: "500", color: "white"
                                   }}>{offres.city},{offres.address}</p>
                              </div>

                              <div
                                   style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        textalign: "center"
                                   }} >

                                   <div className="localisation_info">

                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"
                                        }}> <i class="fas fa-male"></i> {utilisateurs.gender}</p>
                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"
                                        }}><i class="fas fa-bed"></i> {offres.room_number} room</p>
                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"
                                        }}> <i class="fas fa-lightbulb"></i> {offres.water_electricity}</p>
                                   </div>
                                   <div className="localisation_info">
                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"
                                        }}> <i class="fas fa-wifi"></i> {offres.wifi}</p>


                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"
                                        }}> <i class="fas fa-warehouse"></i>
                                             {offres.area} m2</p>
                                        {con}
                                   </div>
                                   <div className="localisation_info">
                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"
                                        }}> <i class="far fa-calendar-alt"></i> {offres.duration} mois</p>
                                        <p style={{
                                             fontSize: 14, fontWeight: "500", color: "white"

                                        }}> <i class="fas fa-layer-group"></i> étage {offres.floor}</p>
                                   </div>
                              </div>

                         </div>
                         <h4>description</h4>
                         <p style={{ ...FONTS.label, }} >{offres.description}</p>
                         <h4>Rooms</h4>
                         <div
                              style={{
                                   display: "flex",
                                   justifyContent: "flex-start",
                                   alignItems: "flex-start",
                                   flexWrap: "wrap",
                                   width: "100%",
                              }}
                         >

                              {displayroom}

                         </div>

                    </div>




                    <div id="de" className="demande" >
                         <h5>Send Demand</h5>
                         <hr className="hr" />
                         <form>
                              <div style={{
                                   display: "flex",
                                   justifyContent: "center",
                                   marginLeft: "80px",
                                   flexWrap: "wrap",
                              }}>

                                   <div className="form" >

                                        <Input label="Full name" width="250px" setData={setdemande} data={demande} name="fullName" />
                                        <Input label="Phone number" width="250px" setData={setdemande} data={demande} name="phoneNumber" />
                                        <Input label="University" width="250px" setData={setdemande} data={demande} name="university" />
                                        <Input label="Degree" width="250px" setData={setdemande} data={demande} name="degre" />

                                   </div>
                                   <div className="form" >
                                        <div style={{
                                             justifyContent: "row",
                                             display: "flex",
                                             justifyContent: "flex-start",
                                             alignItems: "flex-start",
                                             flexWrap: "wrap",
                                             width: "100%",

                                        }}>

                                             {display}

                                        </div  >

                                        <p
                                             style={{
                                                  ...FONTS.label,
                                                  marginBottom: "5px"
                                             }}
                                        >
                                             comment
                                        </p>
                                        <textarea style={{
                                             width: "290px",
                                             backgroundColor: COLORS.inputColor,
                                             boxShadow: "3px 5px 8px rgba(0,0,0,0.2)",
                                             outline: "none",
                                             border: "none",
                                             borderRadius: "25px",
                                             padding: "10px",

                                        }} rows={7}
                                             name="comment"
                                             value={demande.DESCRIPTION}
                                             onChange={handleChange}
                                        />
                                   </div>
                              </div>
                              <div style={{
                                   marginLeft: "67%",
                                   paddingTop: "2%",


                              }}>
                                   <Button text="send" width="100px" bgColor={COLORS.lightGreen} onClick={saveDemand} /> </div>

                         </form>
                    </div>




                    <div className="offer">
                         <h5>Offers you may like</h5>
                         <hr className="hr" />

                         <div
                              style={{
                                   display: "flex",
                                   justifyContent: "flex-start",
                                   alignItems: "flex-start",
                                   flexWrap: "wrap",
                                   width: "100%",
                              }}
                         >

                              {displayoffer}

                         </div>
                    </div>

                    <Footer />
               </div>
          </div>
     );
}

export default Detail;