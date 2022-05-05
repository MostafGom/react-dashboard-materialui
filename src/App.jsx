import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Teams from './Teams';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/teams' element={<Teams />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App