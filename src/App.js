import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useState } from 'react'
import whatsapp_icon from './components/Assets/whatsapp_icon.png'
import Loader from './components/Loader/Loader';


const Home = React.lazy(() => import('./components/pages/Home'));
const About = React.lazy(() => import('./components/pages/About'));
const Footer = React.lazy(() => import('./components/pages/Footer'));
const Payment = React.lazy(() => import('./components/pages/Payment'));
const Payments = React.lazy(() => import('./components/pages/Payments'));
const Doc = React.lazy(() => import('./components/pages/documents/Doc'));
const Feedback = React.lazy(() => import('./components/pages/feedback/FeedBack'))

const C_page_1 = React.lazy(() => import('./components/Course-pages/C_page_1'));
const C_page_2 = React.lazy(() => import('./components/Course-pages/C_page_2'));
const C_page_3 = React.lazy(() => import('./components/Course-pages/C_page_3'));
const C_page_4 = React.lazy(() => import('./components/Course-pages/C_page_4'));
const C_page_5 = React.lazy(() => import('./components/Course-pages/C_page_5'));
const C_page_6 = React.lazy(() => import('./components/Course-pages/C_page_6'));
const C_page_7 = React.lazy(() => import('./components/Course-pages/C_page_7'));
const C_page_8 = React.lazy(() => import('./components/Course-pages/C_page_8'));
const C_page_9 = React.lazy(() => import('./components/Course-pages/C_page_9'));
const C_page_10 = React.lazy(() => import('./components/Course-pages/C_page_10'));
const C_page_11 = React.lazy(() => import('./components/Course-pages/C_page_11'));
const C_page_12 = React.lazy(() => import('./components/Course-pages/C_page_12'));
const C_page_13 = React.lazy(() => import('./components/Course-pages/C_page_13'));
const C_page_14 = React.lazy(() => import('./components/Course-pages/C_page_14'));

const I_page_1 = React.lazy(() => import('./components/Intern-pages/I_page_1'));
const I_page_2 = React.lazy(() => import('./components/Intern-pages/I_page_2'));
const I_page_3 = React.lazy(() => import('./components/Intern-pages/I_page_3'));
const I_page_4 = React.lazy(() => import('./components/Intern-pages/I_page_4'));
const I_page_5 = React.lazy(() => import('./components/Intern-pages/I_page_5'));
const I_page_6 = React.lazy(() => import('./components/Intern-pages/I_page_6'));
const I_page_7 = React.lazy(() => import('./components/Intern-pages/I_page_7'));
const I_page_8 = React.lazy(() => import('./components/Intern-pages/I_page_8'));
const I_page_10 = React.lazy(() => import('./components/Intern-pages/I_page_10'));
const I_page_12 = React.lazy(() => import('./components/Intern-pages/I_page_12'));
const I_page_13 = React.lazy(() => import('./components/Intern-pages/I_page_13'));
const I_page_14 = React.lazy(() => import('./components/Intern-pages/I_page_14'));
const Header = React.lazy(() => import('./components/pages/Header'));







function App() {


  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  })



  return (
    <div>
      {
        loader ? <Loader /> : (
          <div>
            <div>
              <a href="https://wa.link/y2gz6b" target="_blank"><img src={whatsapp_icon} style={{ width: "52px", position: "fixed", right: "17px", bottom: "17px", zIndex: "2" }} /></a>
            </div>
            <Header />

            <Routes>
              <Route path="/" element={<React.Suspense fallback={<Loader />}><Home /></React.Suspense>} />
              <Route path="/Home" element={<React.Suspense fallback={<Loader />}><Home /></React.Suspense>} />
              <Route path="/Payment" element={<React.Suspense fallback={<Loader />}><Payment /></React.Suspense>} />
              <Route path="/Payments" element={<React.Suspense fallback={<Loader />}><Payments /></React.Suspense>} />
              <Route path="/About" element={<React.Suspense fallback={<Loader />}><About /></React.Suspense>} />
              <Route path="/documents" element={<React.Suspense fallback={<Loader />}><Doc /></React.Suspense>} />
              <Route path="/feedback" element={<React.Suspense fallback={<Loader />}><Feedback /></React.Suspense>} />

              <Route path="/C_page_1" element={<React.Suspense fallback={<Loader />}><C_page_1 /></React.Suspense>} />
              <Route path="/C_page_2" element={<React.Suspense fallback={<Loader />}><C_page_2 /></React.Suspense>} />
              <Route path="/C_page_3" element={<React.Suspense fallback={<Loader />}><C_page_3 /></React.Suspense>} />
              <Route path="/C_page_4" element={<React.Suspense fallback={<Loader />}><C_page_4 /></React.Suspense>} />
              <Route path="/C_page_5" element={<React.Suspense fallback={<Loader />}><C_page_5 /></React.Suspense>} />
              <Route path="/C_page_6" element={<React.Suspense fallback={<Loader />}><C_page_6 /></React.Suspense>} />
              <Route path="/C_page_7" element={<React.Suspense fallback={<Loader />}><C_page_7 /></React.Suspense>} />
              <Route path="/C_page_8" element={<React.Suspense fallback={<Loader />}><C_page_8 /></React.Suspense>} />
              <Route path="/C_page_9" element={<React.Suspense fallback={<Loader />}><C_page_9 /></React.Suspense>} />
              <Route path="/C_page_10" element={<React.Suspense fallback={<Loader />}><C_page_10 /></React.Suspense>} />
              <Route path="/C_page_11" element={<React.Suspense fallback={<Loader />}><C_page_11 /></React.Suspense>} />
              <Route path="/C_page_12" element={<React.Suspense fallback={<Loader />}><C_page_12 /></React.Suspense>} />
              <Route path="/C_page_13" element={<React.Suspense fallback={<Loader />}><C_page_13 /></React.Suspense>} />
              <Route path="/C_page_14" element={<React.Suspense fallback={<Loader />}><C_page_14 /></React.Suspense>} />

              <Route path="/I_page_1" element={<React.Suspense fallback={<Loader />}><I_page_1 /></React.Suspense>} />
              <Route path="/I_page_2" element={<React.Suspense fallback={<Loader />}><I_page_2 /></React.Suspense>} />
              <Route path="/I_page_3" element={<React.Suspense fallback={<Loader />}><I_page_3 /></React.Suspense>} />
              <Route path="/I_page_4" element={<React.Suspense fallback={<Loader />}><I_page_4 /></React.Suspense>} />
              <Route path="/I_page_5" element={<React.Suspense fallback={<Loader />}><I_page_5 /></React.Suspense>} />
              <Route path="/I_page_6" element={<React.Suspense fallback={<Loader />}><I_page_6 /></React.Suspense>} />
              <Route path="/I_page_7" element={<React.Suspense fallback={<Loader />}><I_page_7 /></React.Suspense>} />
              <Route path="/I_page_8" element={<React.Suspense fallback={<Loader />}><I_page_8 /></React.Suspense>} />
              <Route path="/I_page_10" element={<React.Suspense fallback={<Loader />}><I_page_10 /></React.Suspense>} />
              <Route path="/I_page_12" element={<React.Suspense fallback={<Loader />}><I_page_12 /></React.Suspense>} />
              <Route path="/I_page_13" element={<React.Suspense fallback={<Loader />}><I_page_13 /></React.Suspense>} />
              <Route path="/I_page_14" element={<React.Suspense fallback={<Loader />}><I_page_14 /></React.Suspense>} />
            </Routes>

            <Footer />
          </div>
        )
      }
    </div>

  );
}

export default App;
