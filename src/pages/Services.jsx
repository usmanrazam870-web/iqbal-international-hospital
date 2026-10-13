import React from 'react';
import NavBar from '../components/NavBar';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import CardiologyCard from '../components/Cards/CardiologyCard';
import DentistCard from '../components/Cards/DentistCard';
import PsychotherapistCard from '../components/Cards/PsychotherapistCard';
import SurgeryCard from '../components/Cards/SurgeryCard';
const Services = () => {
  return (
    <div>
      <NavBar />
      <Facilities />
      <CardiologyCard/>
      <DentistCard/>
      <PsychotherapistCard/>
      <SurgeryCard/>
      <Footer />
    </div>
  );
};

export default Services;