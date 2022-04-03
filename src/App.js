import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';
import About from './components/About';
import { Contact } from './components/Contact';
import NewReleases from './components/NewReleases';
import BestSellers from './components/BestSellers';


function App() {
  return (
  <>
    <NavigationBar />
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/new-releases' element={<NewReleases />} />
        <Route path='/best-sellers' element={<BestSellers />} />
      </Routes>
    </Layout>
  </>
  );
}

export default App;
