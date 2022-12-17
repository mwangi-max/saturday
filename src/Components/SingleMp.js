import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { mpsData } from './mpsData';

const SingleMp = () => {
const {mpConstituency} = useParams();

const mp = mpsData.find((mp)=>mp.constituency === mpConstituency);

const {name,constituency,image,party} = mp;
  return (
    <section>
     <article>
       <h2 className='heading'>{constituency} Constituency</h2>
      <figure>
        <img src={image} alt={name} className='image'/>
      </figure>
      <div className='format'>
      <h3>{name}</h3>
      <h3>{constituency} Constituency</h3>
      <h3> Political Party: {party}</h3>
      <Link to='/mps'>Go Back To List</Link>
      </div>
     </article>
    </section>
  )
}

export default SingleMp
