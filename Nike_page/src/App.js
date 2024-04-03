import './App.css';
import Navbar from './Navbar';
import fLogo from './images/flipkart.png';
import aLogo from './images/amazon.png';
import shoeImage from './images/shoe_image.png'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className='flex min-h-screen justify-center items-center '>
        <div className='flex-col justify-between gap-10'>
          <div className='uppercase text-8xl font-bold pl-36 pb-5'>Your Feet Deserve the Best</div>
          <div className='uppercase pl-36 font-semibold text-gray-600 pb-5 mr-20'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
          <div className='pl-36 flex gap-8 pb-5'>
            <button className=' pl-3 pr-3 p-1 font-medium bg-red-600 border rounded-sm border-hidden text-white text-lg'>Shop Now</button>
            <button className='pl-4 pr-4 p-1 font-medium text-gray-600 border-solid border-2 border-black rounded-sm '>Category</button>
          </div>
          <div className='pl-36 pb-5'>Also Available on</div>
          <div className='flex gap-2 pl-36'>
            <img src={fLogo}/>
            <img src={aLogo}/>
          </div>
        </div>
        <div className=''>
          <img className=' mr-96 pr-32' src={shoeImage} />
        </div>
      </div>
    </div>
  );
}

export default App;
