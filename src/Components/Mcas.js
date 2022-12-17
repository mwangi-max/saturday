import React from 'react';

import { mcasData } from './mcasData';
import {Link} from 'react-router-dom';

const Mcas = () => {
  return (
    <section>
     <article>
      <h1>Kiambu County Elected MCAs (60) 2022</h1>
      {
        mcasData.map((mca)=>{
          const {id,name,ward} = mca;
          return<div key={id} className='mps'>
            <h3 className='name'>{name}</h3>
            <h3 className='constncy'>{ward} Ward</h3>
            <Link to={`/mcas/${ward}`}>More Info</Link>
          </div>
        })
      }
     </article>
    </section>
  )
}

export default Mcas
