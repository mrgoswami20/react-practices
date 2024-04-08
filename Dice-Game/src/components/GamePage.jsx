import { useState } from "react";
import Button from "./Button";
import diceMapper from "./shared/DiceMapper";

const GamePage = () => {
    const arrayNum = [1,2,3,4,5,6];
    const [chooseNumber, setChooseNumber] = useState();

  return (
    <div className="p-20 min-h-screen">
        <div className="flex justify-between">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-7xl">0</h1>
                <p className="text-lg font-[700]">Total Score</p>
            </div>
            <div className="flex flex-col items-end">
                <p chooseNumber={false} className="text-red-600">You have not selected any number</p>
                <label className="flex max-h-[72px] ">
                    {arrayNum.map((value, i)=>(
                        <input className="border-solid border-2 m-2 px-5 p-4 cursor-pointer"
                            key ={i} onClick={()=>setChooseNumber(value)}
                            type="radio"
                        />
                    ))}
                </label>
                <p className=" font-[900]">Select Number</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10 gap-2">
            <img src={diceMapper[1]} alt="" className=" max-w-52 cursor-pointer"/>
            <p>click on Dice to roll</p>
            <Button text="Reset Score" type="secondary"/>
            <Button text="Show Rules" type="primary"/>
            <div className=" bg-green-400 ">
                rules
            </div>
        </div>
    </div>
  );
};

export default GamePage;
