import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';
import About from './components/About';
import { Contact } from './components/Contact';


function App() {
  return (
  <>
    <NavigationBar />
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  </>
  );
}

export default App;
