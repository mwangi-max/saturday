import React from 'react';
import {Link} from 'react-router-dom';


const SenResults = ()=>{
 return(
  <section className='container'>
   <article className='results'>
    <h2> IEBC Kiambu County Senatorial Results 2022</h2>
    <p>(IEBC - Independent Electoral & Boundaries Commission (Kenya))</p>
    <h3>Paul Thang'wa - <span className='green'>579,411 Votes,</span> <span className='blue'>Party:UDA</span></h3>
    <h3>George Maara - <span className='green'>112,304 Votes,</span> <span className='blue'>Party:Jubilee</span></h3>
    <h3>Machel Waikenda - <span className='green'>38,534 Votes,</span> <span className='blue'>Party:CCK</span></h3>
    <h3>Alice Gathekia - <span className='green'>33,953 Votes,</span> <span className='blue'>Party:Tujibebe</span></h3>
    <h3>John Mugwe - <span className='green'>29,697 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <h3>Carolyne Kigunda - <span className='green'>12,204 Votes,</span> <span className='blue'>Party:KNC</span></h3>
    <h3>George Njoroge - <span className='green'>7,565 Votes,</span> <span className='blue'>Party:Safina</span></h3>
    <h3>Joseph Kamau - <span className='green'>6,840 Votes,</span> <span className='blue'>Party:Usawa</span></h3>
    <Link to='/senator' className='link'>Go Back</Link>
   </article>
  </section>
 )
}
export default SenResults;