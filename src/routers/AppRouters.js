import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../componente/Login';
import Register from '../componente/Register';
import DashboarRouters from './DashboarRouters';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';


const AppRouters = () => {
    
    return (
     <>
     <BrowserRouter>
        <Routes>
             <Route path="/login" element={
                  <PublicRouters isAutentica={false}>
                        <Login/>
                  </PublicRouters> 
                
             }/>

<Route path="/register" element={
                  <PublicRouters isAutentica={false}>
                        <Register/>
                  </PublicRouters> 
                
             }/>

    <Route path="/*" element={
        <PrivateRouters isAutentica={true}>
            <DashboarRouters/>
        </PrivateRouters>
    }/>

        </Routes>
     </BrowserRouter>
               
     </>
       
        
      
    );
};

export default AppRouters;
