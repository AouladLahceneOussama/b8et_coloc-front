import React from 'react'

import './image.css'



const Slide_nonDispo  = ({ image }) => {
    return (
<div class="container">
  <img src={ image }  class="image"/>
  <div class="overlay_image">
  <a href="#" class="icon" title="Non Disponible">
  <i class="fas fa-ban"></i>
  </a>
  </div>
</div>);
}
export default Slide_nonDispo