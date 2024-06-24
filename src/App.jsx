import './App.css'
import ContactUs from './component/ContactUs'
import DeluxePage from './component/DeluxePage'
import FacilitiesHero from './component/facilities/FacilitiesHero'
import FacilitiesPage from './component/facilities/FacilitiesPage'
import LandingPage1 from './component/landing/LandingPage1'
import LandingPage2 from './component/landing/LandingPage2'

function App() {

  return (
    <>
    <div className=''>
      <ContactUs />
    </div>
     <div className='mt-9'>
        <FacilitiesHero />
     </div>
     <div>
     <FacilitiesPage />
     </div> 
     <div className=''>
      <LandingPage1 />
     </div>
     <div className=''>
      <LandingPage2 />
     </div>

     <div>
      <DeluxePage />
     </div>
    </>
  )
}

export default App
