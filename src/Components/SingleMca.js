import React from 'react';
import {Link,useParams} from 'react-router-dom';
import { mcasData } from './mcasData';

const SingleMca = () => {
  const {mcaWard} = useParams();
  const mca = mcasData.find((mca)=>mca.ward === mcaWard);
  console.log(mca);
  const {name,ward,image,party,constituency} = mca;
  return (
    <section className='container'>
     <article>
       <h2 className='heading'>{ward} Ward</h2>
       <p>({constituency} Constituency)</p>
      <figure>
        <img src={image} alt={name} className='images'/>
      </figure>
      <div className='format'>
      <h3>{name}</h3>
      <h3>{ward} Ward</h3>
      <h3>Political Party : { party}</h3>
      <Link to= '/mcas'>Go Back To List</Link>
      </div>
  
     </article>
    </section>
  )
}

export default SingleMca
