import React from "react";
import { COLORS, FONTS } from "../theme/theme";
import "../styles/app.css";
const Select = ({ label, options, width, name, data, setData }) => {

    const updateValue = (e) => {
        console.log(data[name])
        setData({
            ...data,
            [name]: e.target.value
        });
    }
    return (
        <div
            style={{
                width: width,
                margin:'15px',
            }}
        >
            <p
                style={{
                    font: FONTS.smallTitle,
                    color:"white",
                    marginBottom: "5px"
                }}
            >
                {label}
            </p>
            <select
                style={{
                    width: "100%",
                    backgroundColor: COLORS.inputColor,
                    boxShadow: "3px 5px 8px rgba(0,0,0,0.2)",
                    outline: "none",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px",
                    font: FONTS.smallTitle,
                }}
                className="select-css"
                name={name}
                onChange={updateValue}
                defaultValue={data[name]}
            >
                <option value="">-- Choose --</option>
                {
                    options.map( (option,i) => (
                        <option key={i} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>

    )
}

export default Select