import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplitLandingPage from '../Components/baselanding';
import UserSection from '../Components/clientlogs';
import Wrkout from '../Components/workouts';
import BmiCalculator from '../Components/bmi';
import Wrkchest from '../Components/wrkchest';
import Wrkback from '../Components/wrkback';
import Wrksholder from '../Components/wrksholder';
import Clhome from '../Components/clienthome';
import ProfileCard from '../Components/trainer';
import ContactForm from '../Components/contactus';
import Wrkbiceps from '../Components/wrkbiceps';
import Wrktriceps from '../Components/wrktriceps';
import Wrklegs from '../Components/wrkleg';
import AdminLandingPage from '../Components/Trainer  page/Thome';
import Tlogs from '../Components/Tlogin/trainerlogs';
import PremiumPlansPage from '../Components/Trainer  page/premiumplan';
import OphotoGallery from '../Components/bmidiets/oweight';
import WphotoGallery from '../Components/bmidiets/uweight';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplitLandingPage />} />
        <Route path="/client" element={<UserSection />} />
        <Route path="/clhome" element={<Clhome />} />
        <Route path="/wrkout" element={<Wrkout />} />
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/tra" element={<ProfileCard />} />
        <Route path="/wrkchest" element={<Wrkchest />} />
        <Route path="/wrkback" element={<Wrkback />} />
        <Route path="/wrksholder" element={<Wrksholder />} />
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/thome1" element={<AdminLandingPage/>}/>
        <Route path="/tlog" element={<Tlogs/>}/>
        <Route path="/bmi-calculator" element={<BmiCalculator />} />
        <Route path="/wrkbiceps" element={<Wrkbiceps/>}/>
        <Route path="/wrktri" element={<Wrktriceps/>}/>
        <Route path="/wrkleg" element={<Wrklegs/>}/>
        <Route path="/upplan" element={<PremiumPlansPage/>}/>
        <Route path="ov8" element={<OphotoGallery/>}/>
        <Route path="wv8" element={<WphotoGallery/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
