import React from 'react';
import { Route, Routes, BrowserRouter ,Navigate} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Listing from './pages/Listing';
import ProgramDetails from './pages/ProgramDetails';
import Register from './pages/Register';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import About from './pages/About';
import Clients from './pages/Clients';
import LeaderShipOne from './pages/LeaderShipOne';
import CorporateTraining from './pages/CorporateTraining';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import ShareFeedback from './pages/ShareFeedback';
import Terms from './pages/Terms';
import Emailer from './pages/Emailer';
import Cookies from './pages/Cookies';
import ThankYou from './pages/ThankYou';
import Faq from './pages/Faq';


const CreateRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/listing' element={<DefaultLayout />}>
            <Route path='/listing' element={<Listing />} />
          </Route>
          <Route path='/program-detail/:id' element={<DefaultLayout />}>
            <Route path='/program-detail/:id' element={<ProgramDetails />} />
          </Route>
          <Route path='/register' element={<DefaultLayout />}>
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/privacy-policy' element={<DefaultLayout />}>
            <Route path='/privacy-policy' element={<Policy />} />
          </Route>
          <Route path='/contact-us' element={<DefaultLayout />}>
            <Route path='/contact-us' element={<Contact />} />
          </Route>
          <Route path='/about-us' element={<DefaultLayout />}>
            <Route path='/about-us' element={<About />} />
          </Route>
          <Route path='/our-clients' element={<DefaultLayout />}>
            <Route path='/our-clients' element={<Clients />} />
          </Route>
          <Route path='/leader-ship' element={<DefaultLayout />}>
            <Route path='/leader-ship' element={<LeaderShipOne />} />
          </Route>
          <Route path='/corporate-training' element={<DefaultLayout />}>
            <Route path='/corporate-training' element={<CorporateTraining />} />
          </Route>
          <Route path='/testimonials' element={<DefaultLayout />}>
            <Route path='/testimonials' element={<Testimonials />} />
          </Route>
          <Route path='/gallery' element={<DefaultLayout />}>
            <Route path='/gallery' element={<Gallery />} />
          </Route>
          <Route path='/share-feedback' element={<DefaultLayout />}>
            <Route path='/share-feedback' element={<ShareFeedback />} />
          </Route>
          <Route path='/terms' element={<DefaultLayout />}>
            <Route path='/terms' element={<Terms />} />
          </Route>

          <Route path='*' element={<Navigate replace to='/' />}>
            
          </Route>

          <Route path='/emailer' element={<DefaultLayout/>}>
            <Route path='/emailer' element={<Emailer/>} />
          </Route>
          <Route path='/cookies-policy' element={<DefaultLayout/>}>
            <Route path='/cookies-policy' element={<Cookies/>} />
          </Route>
          <Route path='/thankyou' element={<DefaultLayout/>}>
            <Route path='/thankyou' element={<ThankYou/>} />
          </Route>
          <Route path='/faq' element={<DefaultLayout/>}>
            <Route path='/faq' element={<Faq/>} />
          </Route>

        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default CreateRoutes;