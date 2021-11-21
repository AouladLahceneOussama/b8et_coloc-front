import React from "react";
import { COLORS, FONTS } from "../theme/theme";
import './Slide.css'



const Radio = ({ id_room , image, setdata,data,index = 0 }) => {
    const handleChange = (event) => {
       
        const name = event.target.name;
        const id = event.target.id;
        setdata({ ...data, [name]:{ room_id : id} })
      }
     
    return (
        <div >
<input 
  type="radio" 
  name="room" 
  id={id_room} 
  className="input-hidden" 
  onChange={handleChange}
  
  />
<label for={id_room}>
  
  <img 
    src={image}
    alt="I'm sad" />
</label>

</div>

    );
}
export default Radio