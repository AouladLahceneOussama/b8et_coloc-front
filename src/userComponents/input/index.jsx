import React from "react";
import { COLORS, FONTS } from "../../theme/theme";
import styled from "styled-components";


const InputS = styled.input`
    width: 100%;
    box-shadow: 3px 5px 8px rgba(0,0,0,0.2);
    outline: none;
    border: none;
    border-radius: 25px;
    padding: 10px;
    transition: .3s ease-in-out;
    font-size:20;
    color:black;

    &:focus{
        background-color: ${COLORS.inputColor};
    },

    ::placeholder,
    ::-webkit-input-placeholder {
        font-size:8;
        color:${COLORS.gray};
        font-weight:lighter;
    }
    ::-ms-input-placeholder {
        font-size:8;
        color:${COLORS.gray};
        font-weight:lighter;
    }
`;


const Input = ({ label, type = "text", disabled = false, width, icon = "", placeholder = "", name, data, setData, index = 0 }) => {

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

    return (
        <div
            style={{
                width: width,
                position: "relative",
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

            <InputS
                name={name}
                type={type}
                onChange={(updateValue)}
                disabled={disabled ? "disabled" : ""}
                placeholder={placeholder}
                min="1"
                value={index >=1 ?  data[index][name] : data[name] }
            />

            {icon !== "" ?
                <i
                    style={{
                        position: "absolute",
                        right: 5,
                        top: 38,
                        color: COLORS.lightGreen,
                        cursor: "pointer"
                    }}

                    className={`fas fa-${icon}`}></i>
                : <> </>
            }
        </div>
    )
}

export default Input;