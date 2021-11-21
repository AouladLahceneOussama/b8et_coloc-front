import React from "react";
import { FONTS, COLORS } from "../theme/theme";

const CheckBox = ({ name, text, data, setData, index = 0 }) => {

    const updateValue = (e) => {

        if (index >= 1) {
            if (e.target.checked) {
                setData({
                    ...data, [index]: {
                        ...data[index],
                        [name]: data[index][name].indexOf(e.target.value) === -1 ?
                            [...data[index][name], e.target.value]
                            :
                            [...data[index][name]]
                    }
                })
            }

            else {
                setData({
                    ...data, [index]: {
                        ...data[index],
                        [name]: data[index][name].filter(eq => eq !== e.target.value)
                    }
                })
            }
        }

        else {
            if (e.target.checked) {
                setData({
                    ...data, [name]: data[name].indexOf(e.target.value) === -1 ?
                        [...data[name], e.target.value]
                        :
                        [...data[name]]
                })
            }

            else {
                setData({
                    ...data, [name]: data[name].filter(eq => eq !== e.target.value)
                })
            }
        }

    }

    return (
        <div
            style={{
                marginBottom: 10,
            }}
        >
            <label className="checkBox-container">
                <input
                    type="checkbox"
                    name={name}
                    value={text}
                    onChange={updateValue}
                    checked={index >= 1 ? data[index][name].indexOf(text) === -1 ? "" : "checked" : data[name].indexOf(text) === -1 ? "" : "checked"}
                />
                <span className="checkmark"></span>
                <span style={{ ...FONTS.smallTitle,color:"white"}}>{text}</span>
            </label>
        </div>
    )
}


export default CheckBox;