import './App.css';
import { FeaturesComponent } from './Features/FeaturesComponent';
import { FooterComp } from './FooterComp';
import { MainPage } from './MainPage';
import {  NavBar  } from './NavBar'
import { NetWork } from './NetWork';
import { PlansComp } from './PlansComp';
import { SubComp } from './SubComp';
import { TestimonalsComp } from './TestimonialsComp';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage />
      <FeaturesComponent />
      <PlansComp/>
      <NetWork/>
      <TestimonalsComp/>
      <SubComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
