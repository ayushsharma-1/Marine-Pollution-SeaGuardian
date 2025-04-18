import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/components/home';
import OurProgram from '../src/components/our-program';
import TheLatest from '../src/components/the-latest';
import FAQ from '../src/components/faq';
import WaterAnimalsList from '../src/components/extinct-animal';
import DonatePage from '../src/components/donate';
import Faq1 from '../src/components/faq-ques/faq1';
import Faq2 from '../src/components/faq-ques/faq2';
import Faq3 from '../src/components/faq-ques/faq3';
import Faq4 from '../src/components/faq-ques/faq4';
import Faq5 from '../src/components/faq-ques/faq5';
import About from '../src/components/about-us';
import Details from '../src/components/details';
import Whaling from '../src/components/details-animal/whale';
import Shark from '../src/components/details-animal/shark';
import Captivity from '../src/components/details-animal/captivity';
import ExtinctSpecies from '../src/components/details-animal/extinct';
import Fisheries from '../src/components/details-animal/fishery';
import Pollution from '../src/components/details-animal/pollution';
import AnalyzeImg from '../src/components/take-action';
import Ewaste from '../src/components/EWaste';
import Locator from '../src/components/locator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-program" element={<OurProgram />} />
      <Route path="/the-latest" element={<TheLatest />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/analyze-img" element={<AnalyzeImg />} />
      <Route path='/EWaste' element={<Ewaste/>}/>

      <Route path='/Locator' element={<Locator/>}/>

      {/* FAQs Ques Routes */}
      <Route path="/faq1" element={<Faq1 />} />
      <Route path="/faq2" element={<Faq2 />} />
      <Route path="/faq3" element={<Faq3 />} />
      <Route path="/faq4" element={<Faq4 />} />
      <Route path="/faq5" element={<Faq5 />} />

      {/* Other Routes */}
      <Route path="/distinctones" element={<WaterAnimalsList />} />
      <Route path="/details" element={<Details />} />

      {/* Animal Details Routes */}
      <Route path="/whaling" element={<Whaling />} />
      <Route path="/captivity" element={<Captivity />} />
      <Route path="/extinct" element={<ExtinctSpecies />} />
      <Route path="/fishery" element={<Fisheries />} />
      <Route path="/pollution" element={<Pollution />} />
      <Route path="/shark" element={<Shark />} />
    </Routes>
  );
}

export default App;
