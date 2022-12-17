import React from 'react';
import { Link } from 'react-router-dom';
import { mpsData } from './mpsData'

const Mps = () => {
  return (
    <section>
     <article>
      <h1>Kiambu County Elected MPs 2022</h1>
      {
       mpsData.map((mp)=>{
        const {id,name,constituency} = mp;
        return <div key={id} className='mps'>
         <h3 className='name'>{name}</h3>
         <h3 className='constncy'>{constituency} Constituency</h3>
         <Link to={`/mps/${mp.constituency}`}>More Info</Link>

        </div>
       })
      }
     </article>
    </section>
  )
}

export default Mps
