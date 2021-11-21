import React from "react";
import { COLORS, FONTS } from "../theme/theme";
import styled from "styled-components";

const ErrorMessage = styled.p`
    color:${COLORS.red.primary};
    ${{ ...FONTS.smallTitle }};
    margin-top:0px;
    margin-left:10px;
`;

const TextA = styled.textarea`
    width: 95%;
    box-shadow: 3px 5px 8px rgba(0,0,0,0.2);
    outline: none;
    border: none;
    border-radius: 15px;
    padding: 10px;
    resize: none;
    font-size:8;
    color:${COLORS.gray};
    font-weight:lighter;
    transition: .3s ease-in-out;

    &:focus{
        background-color: ${COLORS.inputColor};
    },
`;

const TextArea = ({ label, name, data, setData}) => {

    const updateValue = (e) => {
        setData({
            ...data,
            [name]: e.target.value
        });
    }

    return (
        <div>
            <p
                style={{
                    ...FONTS.label,
                    marginBottom: "5px"
                }}
            >
                {label}
            </p>
            <TextA
                rows="7"
                name={name}
                onChange={updateValue}
                value={data[name]}
            />
        </div>

    )
}

export default TextArea