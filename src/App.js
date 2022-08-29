  import Footer from "./components/Footer";

import Header from "./components/header";
import './style.css'
import Food from './Companents/food'
import Schilers from './Companents/Schilers'
import Corusel from './Companents/Corusel'
import './style.css'
import Blogs from "./Companents/Blogs"
import Follow from '../src/component/Follow';

function App() {
  return (
    <>
      <Header />
      {/* header */}
      <Schilers/> 
      <Corusel/>
      
      {/* carusel */}
      {/* video */}
      <Food/>
      {/* follow */}
      <Footer/>
      <Blogs/>
      <Follow />
      {/* footer */}
    </>
  );
}

export default App;
