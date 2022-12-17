import React,{lazy,Suspense} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Loading from './Loading';
const Home = lazy(() => import('./Home'));
const PresidentialResults = lazy(()=>import('./PresidentialResults'));
const Governor = lazy(()=> import('./Governor'));
const GvnResults = lazy(()=>import('./GvnResults'));
const Senator = lazy(()=> import('./Senator'));
const SenResults = lazy(()=> import('./SenResults'));
const WomenRep = lazy(()=> import('./WomenRep'));
const WomenRepResults = lazy(()=> import('./WomenRepResults'));
const Mps = lazy(()=> import('./Mps'));
const SingleMp = lazy(()=> import('./SingleMp'));
const Mcas = lazy(()=> import('./Mcas'));
const SingleMca = lazy(()=> import('./SingleMca'));
const Error = lazy(()=> import('./Error'));





const App = ()=>{
 return (
  <>
  <Suspense fallback={<Loading/>}>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<SharedLayout/>}>
       <Route index element={<Home/>}/>
       <Route path='/pres-results' element={<PresidentialResults/>}/>
       <Route path='/governor' element = {<Governor/>}/>
       <Route path = '/gvn-results' element={<GvnResults/>}/>
       <Route path='/senator' element = {<Senator/>}/>
       <Route path ='/sen-results' element = {<SenResults/>}/>
       <Route path='/women-rep' element = {<WomenRep/>}/>
       <Route path = '/women-rep-results' element = {<WomenRepResults/>}/>
       <Route path='/mps' element = {<Mps/>}/>
       <Route path='/mps/:mpConstituency' element = {<SingleMp/>}/>
       <Route path='/mcas' element = {<Mcas/>}/>
       <Route path='/mcas/:mcaWard' element = {<SingleMca/>}/>
       <Route path = '*' element = {<Error/>}/>
      </Route>
     </Routes>
   </BrowserRouter>
   </Suspense>
   </>
 )
}

export default App;