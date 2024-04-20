import { useState } from "react";
import Button from "./Button";
import diceMapper from "./shared/DiceMapper";

const GamePage = () => {
    const arrayNum = [1, 2, 3, 4, 5, 6];
    const [clicked, setClicked] = useState(-1);
    const [diceImage, setDiceImage] = useState(diceMapper[1]);
    const [showScore, setShowScore] = useState(0);
    const [showWarn, setShowWarn] = useState(false);
    const[showRules, setShowRules] = useState(false);

    function setChooseNumber(value) {
        setClicked(value);
        setShowWarn(false);
    }

    function diceImageHandler() {
        let randNum = Math.floor(Math.random() * 6);
        setDiceImage(diceMapper[randNum + 1]);
        if (clicked == randNum + 1) setShowScore((prev) => prev + clicked);
        else setShowScore((prev) => prev - 2);
    }



  return (
    <div className="p-16 min-h-screen">
      <div className="md:flex justify-between">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl">{showScore}</h1>
          <p className="text-lg font-[700]">Total Score</p>
        </div>
        <div className="flex flex-col items-end">
          {showWarn ? (
            <p className="text-red-600">You have not selected any number</p>
          ) : null}
          <div className="flex max-h-[72px] ">
            {arrayNum.map((value, i) =>
              (
                <button
                  className={`border-solid border-2 m-2 px-5 p-4 cursor-pointer ${value===clicked && 'bg-black text-white'}`}
                  key={i}
                  onClick={()=>setChooseNumber(value) }
                >
                  {value}
                </button> 
              )
            )}
          </div>
          <p className="font-[900]">Select Number</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-10 gap-2">
        <img
          src={diceImage}
          alt="not-loaded"
          onClick={
            clicked < 0
              ? () => setShowWarn(true)
              : () => diceImageHandler()
          }
          className=" max-w-52 cursor-pointer active:scale-90"
        />
        <p>click on Dice to roll</p>
        <Button text="Reset Score" onClick={()=>setShowScore(0)} type="secondary" />
        <Button text="Show Rules" onClick={()=>setShowRules((prev)=>!prev)} type="primary" />
        {showRules ? <div className="flex flex-col justify-center items-start max-h-48 bg-purple-100 p-4 mt-3 ">
          <p className="font-semibold text-xl pb-1">How to play dice game</p>
          <p className=" text-xs font-medium">
            Select any number <br />
            Click on dice image <br />
            after click on dice if selected number is equal to dice number you
            will get same point as dice <br />
            if you get wrong guess then 2 point will be dedcuted
          </p>
        </div>: null}
      </div>
    </div>
  );
};

export default GamePage;
