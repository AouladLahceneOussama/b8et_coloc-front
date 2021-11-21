import React from "react";
import { COLORS, FONTS } from "../../theme/theme";
import styled from "styled-components";


const TextareaS = styled.input`
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px 0 rgba(7,185,43, 0.17);
      border-radius: 2rem;
      width: 100%;
      margin-top:18px;
      height: 8rem;
      resize: none;
      padding: 1rem;
      border: none;
      outline: none;
      color: #3c354e;
      font-size: 1rem;
      font-weight: bold;
      &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #07B92B;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
      }
      &::placeholder {
        color: #FFFFFF;
        font-weight: 100;
        font-size: 1rem;
      }
`;


const Textarea = ({disabled = false, placeholder = "", name, data, setData, index = 0 }) => {

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
            <TextareaS
             name={name}
             onChange={(updateValue)}
             disabled={disabled ? "disabled" : ""}
             placeholder={placeholder}
             min="1"
             value={index >=1 ?  data[index][name] : data[name] }
            />
        
    )
}

export default Textarea;