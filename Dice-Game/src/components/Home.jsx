import dicesImage from "../assets/dices 1.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="md:flex items-center h-[100vh] justify-center">
      <img src={dicesImage} alt="" />
      <div>
        <h1 className="text-8xl font-semibold pb-4">DICE GAME</h1>
        <div className="flex justify-end">
          <Button text="Play Now" onClick={startGame} type='primary'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
