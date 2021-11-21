import React, { useEffect, useState } from "react";
import { Input, Select, TextArea, Button, CheckBox, UploadFile, Slideshow } from "../basicComponents";
import { COLORS, FONTS } from "../theme/theme";
import { Container } from "./offerElements";
import axios from "axios";
import { useParams } from 'react-router-dom';

const EditOffer = () => {

    let params = useParams();
    //this is the states and variables that iam working with it 
    const [allData, setAllData] = useState({});

    const [houseData, setHouseData] = useState({});
    const [roomsData, setRoomsData] = useState({});
    const [room, setRoom] = useState({})
    const [activeContract, setActiveContract] = useState(true);
    const wifiOptions = ["Exist/notIncluded", "Dont Exist", "Exist/Included"];
    const waterElectricutyOptions = ["Exist/Included", "Exist/notIncluded"];
    const equipment = {
        room: ["bed", "Closet", "Desk"],
        kitchen: ["fridge", "water heater", "washing machine", "oven"],
    }
    const contractOptions = [3, 6, 9, 12];
    const floorOptions = [1, 2, 3, 4, 5, 6, 7];
    const personsNumberOptions = [1, 2, 3];

    const sendData = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8080/api/offers/" + houseData?.offer_id + "/update", houseData)


        for (let i in roomsData) {
            console.log("test" + i + " : " + JSON.stringify(roomsData[i]));
            const rd = { ...roomsData[i] }
            rd.equipment = roomsData[i].equipment.join()
            console.log("rd" + i + " : " + JSON.stringify(rd));


            axios.post("http://localhost:8080/api/rooms/" + roomsData[i].room_id + "/update", rd)
        }

    }

    const updateContract = (e) => {
        if (e.target.checked)
            setActiveContract(false)
        else {
            setHouseData({ ...houseData, contractDuration: "" });
            setActiveContract(true)
        }
    }


    const addRoom = (offer_id) => {


        // console.log("Rooom :: " , room)
        axios.post("http://localhost:8080/api/offers/" + offer_id + "/incrimentRoomsNumber")

        axios.post("http://localhost:8080/api/rooms/add",
            {
                "equipment": "bed",
                "image1": "",
                "image2": "",
                "intitule": `room ${parseInt(houseData?.room_number) + 1}`,
                "nbr_bed_dispo": "",
                "nbr_personne": "",
                "offer": roomsData[1]?.offer,
                "price": "",

            })

        const temp = { ...roomsData };
        temp[parseInt(houseData?.room_number) + 1] = {
            "equipment": "bed",
            "image1": "",
            "image2": "",
            "intitule": `room ${parseInt(houseData?.room_number) + 1}` ,
            "nbr_bed_dispo": "",
            "nbr_personne": "",
            "offer": roomsData[1]?.offer,
            "price": "",
        }

        setRoomsData(temp)
        setHouseData({ ...houseData, room_number: parseInt(houseData?.room_number) + 1 })

    }


    const deleteRoom = (room_id, offer_id) => {
        // delete a room from DB
        axios.get("http://localhost:8080/api/delete/" + room_id)
        //Update rooms number
        axios.post("http://localhost:8080/api/offers/" + offer_id + "/decrimentRoomsNumber")




        // const temp = {};
        // let i = 1;
        // for (const room in roomsData) {

        //     if (room != room_id) {
        //         roomsData[room].intitule !== "kitchen" ?
        //             temp[i] = { ...roomsData[room], intitule: `room ${i}` }
        //             :
        //             temp[i] = { ...roomsData[room] }
        //         i = i + 1
        //     }
        // }
        // setRoomsData(...roomsData)

        setHouseData({ ...houseData, room_number: parseInt(houseData?.room_number) - 1 })

    }
    const GlobalHouseInfo = ({ data, setData }) => {

        return (
            <div style={{
                marginTop: "30px",
                marginBottom: "30px",
                padding: '30px',
                borderRadius: '50px',
                border: `1px solid ${COLORS.lightGreen.hover}`



            }} >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center'

                    }}
                >

                    <i style={{
                        color: COLORS.lightGreen.primary,
                        ...FONTS.title,
                        paddingRight: "10px",
                    }} className="fas fa-home"></i>
                    <span style={{
                        alignSelf: 'center',
                        color: COLORS.lightGreen.primary,
                        ...FONTS.title,



                    }}>General Informations</span>
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <Input label="Address" width="400px" name="address" setData={setData} data={data} />
                        <div style={{
                            display: 'flex',
                        }}>
                            <Input label="Rooms Number" width="400px" icon="plus" disabled={true} onClickIcon={() => addRoom(data.offer_id)} type="number" name="room_number" setData={setData} data={data} disabled={activeContract} />

                        </div>
                        <Input label="City" width="400px" name="city" setData={setData} data={data} />
                        <TextArea label="Description" name="description" setData={setData} data={data} />

                    </div>

                    <div>
                        <Input label="Area" width="400px" type="number" name="area" setData={setData} data={data} />
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <label className="checkBox-container">
                                <input
                                    type="checkbox"
                                    name="contrat"
                                    onChange={updateContract}
                                    checked={activeContract === false ? "checked" : ""}
                                />
                                <span className="checkmark"></span>
                            </label>

                            <Select label="Contract" width="385px" name="duration" options={contractOptions} setData={setData} data={data} disabled={activeContract} />
                        </div>
                        <Select label="Floor" width="420px" name="floor" options={floorOptions} setData={setData} data={data} />
                        <Select label="Wifi" width="420px" name="wifi" options={wifiOptions} setData={setData} data={data} />
                        <Select label="Water & Electricity" width="420px" name="water_electricity" options={waterElectricutyOptions} setData={setData} data={data} />
                    </div>
                </div>
            </div>
        )
    }



    const Rooms = ({ data, setData }) => {

        return (
            <>

                {[...Array(Object.keys(data).length > 0 ? Object.keys(data).length : 1)].map((room, i) => (
                    <div key={i + 1} style={{
                        marginBottom: "30px",
                        padding: '30px',
                        borderRadius: '50px',
                        border: `1px solid ${COLORS.lightGreen.hover}`



                    }}>

                        {data[i + 1]?.intitule !== "kitchen" && (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <i style={{
                                    color: COLORS.red.primary,
                                    fontSize: "20px",
                                    paddingRight: "10px",
                                }}
                                    className="fas fa-trash"
                                    onClick={() => deleteRoom(data[i + 1].room_id, data[i + 1].offer.offer_id)}></i>
                            </div>
                        )}
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "20px",



                            }}
                        >
                            {data[i + 1]?.intitule !== "kitchen" ? (
                                <i style={{
                                    color: COLORS.lightGreen.primary,
                                    ...FONTS.title,
                                    paddingRight: "10px",
                                }} className="fas fa-door-closed"></i>) : (
                                <i style={{
                                    color: COLORS.lightGreen.primary,
                                    ...FONTS.title,
                                    paddingRight: "10px",
                                }} className="fas fa-utensils"></i>
                            )
                            }

                            <span style={{
                                alignSelf: 'center',
                                color: COLORS.lightGreen.primary,
                                ...FONTS.title,



                            }}>{data[i + 1]?.intitule}</span>

                        </div>



                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "flex-start",
                                flexWrap: "wrap",
                            }}
                        >

                            {/* <div>
                                <UploadFile name="images" data={data} setData={setData} multiple={true} index={i + 1} />

                                <div
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        bachgroundColor: "red",
                                        borderRadius: 25,
                                        overflow: "hidden",
                                        boxShadow: "3px 5px 8px rgba(0,0,0,0.2)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 20,
                                    }}
                                >
                                    {data[i + 1]?.images.length > 0 ?

                                        <Slideshow imageList={data[i + 1]?.images} />
                                        :
                                        <i className="fas fa-images" style={{ color: COLORS.lightGreen.primary, fontSize: 100 }}></i>
                                    }

                                </div>
                            </div> */}


                            <div>
                                {
                                    data[i + 1]?.intitule !== "kitchen" && (
                                        <>
                                            <Input label="Price" width="400px" type="number" name="price" data={data} setData={setData} index={i + 1} />
                                            <Select label="Persons" width="420px" name="nbr_personne" options={personsNumberOptions} setData={setData} data={data} index={i + 1} />
                                        </>
                                    )
                                }

                                <p
                                    style={{
                                        ...FONTS.label,
                                        marginBottom: "5px"
                                    }}
                                >
                                    Well equiped
                                </p>
                                {
                                    equipment[data[i + 1]?.intitule.split(" ")[0]]?.map((equip, j) => (
                                        <CheckBox key={j} name="equipment" text={equip} data={data} setData={setData} index={i + 1} />
                                    ))
                                }
                            </div>

                        </div>
                    </div>)
                )
                }
            </>
        );
    }

    useEffect(() => {
        // console.log(Object.keys(roomsData).length)
    }, [roomsData])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/offers/${params.id}`).then(res => {
            setHouseData({
                ...res.data
            });
            setActiveContract(!res.data.contrat)

        })


    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/offers/${params.id}/rooms`).then(

            resp => {
                console.log(resp.data)
                const temp = {};
                // console.log("houseData : " , houseData)
                if (parseInt(houseData?.room_number) > 0) {

                    for (let i = 1; i <= parseInt(houseData?.room_number) + 1; i++) {
                        temp[i] = {
                            ...resp.data[i - 1],
                            "equipment": resp.data[i - 1]?.equipment.split(',')
                        }
                    }
                    setRoomsData(temp);
                }



            })
    }, [houseData])


    return (
        <Container>
            <span style={{ color: COLORS.lightGreen.primary, ...FONTS.title }}>EDIT OFFER</span>
            <form onSubmit={sendData}>

                {GlobalHouseInfo({ data: houseData, setData: setHouseData })}
                {Rooms({ data: roomsData, setData: setRoomsData })}

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: 30,
                    }}
                >
                    <Button text="Save" bgColor={COLORS.lightGreen} width="100px" type="submit" />
                </div>
            </form>
        </Container>
    )
}

export default EditOffer;