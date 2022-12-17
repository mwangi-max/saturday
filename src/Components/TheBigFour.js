import React from 'react';

const TheBigFour = (props)=>{

 const {name,image,position} = props;

 return(
  <section>
   <article>
    <figure>
        <img src={image} alt={name} className='image'/>
    </figure>
    
    <h2>{name}</h2>
    <h4>{position}</h4>

   </article>
  </section>
 )
}

export default TheBigFour;