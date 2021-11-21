import React from "react";
import Button from "../basicComponents/button";
import { FONTS, COLORS } from "../theme/theme";
import axios from "axios";
import {Link} from 'react-router-dom';

const OfferItem = ({ item ,offers, setOffers }) => {

    const URL = "http://localhost:8080";
    const link = `/gesture/offer/edit/${item.offer_id}`;

    const deleteOffer = () => {
        console.log("i am deleting")
        axios.post(`${URL}/api/offers/delete/${item.offer_id}`).then( res => {
            if(res.data.deleted)
                setOffers(offers.filter( o => o.offer_id !== item.offer_id ));
            console.log(res.data);
        });
    }

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                margin: "5px 0",
                borderBottom: `2px solid ${COLORS.bg}`
            }}

            key={item.offer_id}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        width: "150px",
                        marginRight: 10
                    }}
                >
                    <img src={item.image !== "" && require("../images/"+item.image).default} alt={item.intitule} style={{ width: "150px", borderRadius: "30px 0 30px 0", }} />

                </div>

                <div
                    style={{
                        width: "60%",
                    }}
                >
                    <span>{item.city}, {item.address}</span>
                    <span>{item.offer_id}</span>
                    <p
                        style={{
                            ...FONTS.desc,
                        }}
                    >
                        {item.description.slice(0, 200)} ...</p>
                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: 10
                }}
            >
                <Link to={link}>
                    <Button text="Edit" bgColor={COLORS.lightGreen} width="100px" icon="edit" />
                </Link>
                <Button text="Delete" bgColor={COLORS.red} width="100px" icon="trash-alt" onClick={deleteOffer}/>
            </div>
        </div>
    );
}

export default OfferItem