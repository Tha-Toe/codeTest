import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/Nav';
import Categories from './component/categories/Categories';
import BuyOne from './component/buyone/BuyOne';
import Promotion from './component/promition/Promotion';
import New from './component/new/New';
import Phone from './component/phone/Phone';
import Laptop from './component/laptop/Laptop';
import Tablet from './component/tablet/Tablet';
import Brand from './component/brand/Brand';
import Car from './component/car/Car';

function App() {
  return (
    <div className="App font-sans">
      <Nav/>
      <Categories/>
      <BuyOne />
      <Promotion />
      <New />
      <Car />
      <Brand />
      <Phone />
      <Laptop />
      <Tablet />
    </div>
  );
}

export default App;
