import dicesImage from '../assets/dices 1.png';
import Button from './Button';

const Home = () => {
  return (
    <div className='flex items-center max-h-screen justify-center'>
        <img src={dicesImage} alt="" />
        <div>
          <h1 className='text-8xl font-semibold'>DICE GAME</h1>
          <Button text="Play Now" className="border-black text-white" />
        </div>
    </div>
  )
};

export default Home;
