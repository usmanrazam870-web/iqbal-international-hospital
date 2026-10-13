import React from 'react'
import NavBar from '../components/NavBar';
import HomeSlider from '../components/HomeSlider';
import HomeBatch from '../components/HomeBatch';
import HospitalServices from '../components/HospitalServices';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeSlider />
      <HomeBatch />
      <HospitalServices />
      <Facilities />
      <Footer />
    </div>
  )
}

export default Home
