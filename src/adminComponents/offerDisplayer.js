import React, { useEffect, useState } from "react";
import Button from "../basicComponents/button";
import { COLORS, FONTS } from "../theme/theme";
import OfferItem from "./offerItem";
import { Container } from "./offerElements";
import axios from "axios";
import { Link } from "react-router-dom";

const OfferDisplayer = () => {

    const URL = "http://localhost:8080/api";

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("userSession") !== null) {
            axios.get(`${URL}/offers/user/${localStorage.getItem("userSession")}`).then(res => {
                setOffers(res.data);
            });
        }
    }, [])

    useEffect(() => {
        console.log(offers);
    }, [offers])

    return (
        <Container>
            <Link to="/gesture/offer/add">
                <Button text="Add" bgColor={COLORS.lightGreen} width="100px" />
            </Link>
            <div>
                {offers.map(item => (
                    <OfferItem key={item.offer_id} item={item} offers={offers} setOffers={setOffers}/>
                ))}
            </div>
        </Container>
    )
}


export default OfferDisplayer;