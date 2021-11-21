import React from "react";
import { COLORS, FONTS } from "../theme/theme";
import styled from "styled-components";

const ErrorMessage = styled.p`
    color:${COLORS.red.primary};
    ${{ ...FONTS.smallTitle }};
    margin-top:5px;
    margin-left:10px;
`;

const Select = ({ label, options, disabled, width, name, data, setData, index = 0 }) => {

    const updateValue = (e) => {
        if (index >= 1) {
            setData({
                ...data, [index]: {
                    ...data[index],
                    [name]: e.target.value,
                }
            })
        }
        else {
            setData({
                ...data,
                [name]: e.target.value
            });
        }
    }

    const selected = (option) => {

        if (index === 0 && data[name] === option)
            return "selected"

        else if (data[index]?.[name] === option)
            return "selected"

        return ""
    }

    return (
        <div
            style={{
                width: width,
            }}
        >
            <p
                style={{
                    ...FONTS.label,
                    marginBottom: "5px"
                }}
            >
                {label}
            </p>
            <select
                className="select-css"
                name={name}
                onChange={updateValue}
                // defaultValue={index >= 1 ? data[index][name] : data[name]}
                disabled={disabled ? "disabled" : ""}
                
            >
                <option>Choose</option>
                {
                    options.map((option, i) => (
                        <option key={i} value={option} selected={selected(option)}>{option}</option>
                    ))
                }
            </select>


        </div>

    )
}

export default Select
