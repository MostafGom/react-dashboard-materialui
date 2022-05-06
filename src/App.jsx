import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Teams from './Teams';
import Users from './Users';
import { base } from './constant';
import Tasks from './Tasks';
import Articles from './Articles';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={`${base}`} element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path={`${base}teams`} element={<Teams />} />
          <Route path={`${base}users`} element={<Users />} />
          <Route path={`${base}taks`} element={<Tasks />} />
          <Route path={`${base}posts`} element={<Articles />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App