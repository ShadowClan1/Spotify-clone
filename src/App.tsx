import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Authentication from './components/Authentication';
import Home from './components/Home';
import Search from './components/Search';
import Context2 from './context/Context2';

const  App : React.FC = ()=> {

  return (



<Context2>

    <Router>
<Routes>
<Route  path='/*' element={<Home/>}/>
<Route path='/auth' element={<Authentication/>}/>
{/* <Route path='/search' element={<Search/>}/> */}

</Routes>

    </Router>
</Context2>

  );
}

export default App;
