import React from 'react';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Governor from './Governor';
import Senator from './Senator';
import WomenRep from './WomenRep';
import Mps from './Mps';
import SingleMp from './SingleMp';
import Mcas from './Mcas';
import SingleMca from './SingleMca';
import Error from './Error';
import PresidentialResults from './PresidentialResults';
import GvnResults from './GvnResults';
import SenResults from './SenResults';
import WomenRepResults from './WomenRepResults';

const App = ()=>{
 return (
  <>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<SharedLayout/>}>
       <Route index element={<Home/>}/>
       <Route path='pres-results' element={<PresidentialResults/>}/>
       <Route path='governor' element = {<Governor/>}/>
       <Route path = 'gvn-results' element={<GvnResults/>}/>
       <Route path='senator' element = {<Senator/>}/>
       <Route path ='sen-results' element = {<SenResults/>}/>
       <Route path='women-rep' element = {<WomenRep/>}/>
       <Route path = 'women-rep-results' element = {<WomenRepResults/>}/>
       <Route path='mps' element = {<Mps/>}/>
       <Route path='mps/:mpConstituency' element = {<SingleMp/>}/>
       <Route path='mcas' element = {<Mcas/>}/>
       <Route path='mcas/:mcaWard' element = {<SingleMca/>}/>
       <Route path = '*' element = {<Error/>}/>
      </Route>
     </Routes>
   </BrowserRouter>
   </>
 )
}

export default App;