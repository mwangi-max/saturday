import React from 'react';
import {Link} from 'react-router-dom';


const GvnResults = ()=>{
 return(
  <section className='container'>
   <article className='results'>
    <h2> IEBC Gubernatorial Results Kiambu County 2022</h2>
    <p>(IEBC - Independent Electoral & Boundaries Commission (Kenya))</p>
    <h3>Paul Wamatangi - <span className='green'>348,371 Votes,</span> <span className='blue'>Party:UDA</span></h3>
    <h3>Patrick Jungle - <span className='green'>237,361 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <h3>William Kabogo - <span className='green'>106,980 Votes,</span> <span className='blue'>Party:Tujibebe</span></h3>
    <h3>James Nyoro - <span className='green'>99,562 Votes,</span> <span className='blue'>Party:Jubilee</span></h3>
    <h3>Moses Kuria - <span className='green'>24,512 Votes,</span> <span className='blue'>Party:CCK</span></h3>
    <h3>Judy Gatabaki - <span className='green'>4,674 Votes,</span> <span className='blue'>Party:Safina</span></h3>
    <h3>Agnes Wachuka - <span className='green'>1,264 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <Link to='/governor' className='link'>Go Back</Link>
   </article>
  </section>
 )
}
export default GvnResults;