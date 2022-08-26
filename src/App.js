import Header from "./components/header";
import './style.css'
import Food from './companents/food'
import Schilers from './Companents/Schilers'
import './style.css'
import Blogs from "./Companents/Blogs"
import Follow from '../src/component/Follow';

function App() {
  return (
    <>
      <Header />
      {/* header */}
      <Schilers/> 
      {/* carusel */}
      {/* video */}
      <Food/>
      {/* follow */}
      <Blogs/>
      <Follow />
      {/* footer */}
    </>
  );
}

export default App;
