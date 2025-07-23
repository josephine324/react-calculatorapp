import { useState } from "react";
import {evaluate} from "mathjs";

export default function Calculator() {
    const [input, setInput] = useState("")
    function handleClick(value: string){
        if(value==="AC"){
            setInput("")
        } else if(value==="="){
            try{
                const result =evaluate(input).toString();
                setInput(result)
            } catch (error) {
                setInput("error")
            }
        }else{
            setInput((prevValue)=>prevValue + value)
        }
    }
  const buttons = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="mx-auto mt-5 w-96 h-9">
      <div className="text-end bg-gray-500">{input || 0}</div>
      <div className="grid grid-cols-4 grid-rows-6">
        {buttons.map((value, index) => {
          return (
            <button
              key={index}
              className={`border border-black text-2xl ${value==="0"?"col-span-2":""} ${
                ["=", "+", "-", "*", "÷"].includes(value)
                  ? "bg-amber-700"
                  : "bg-gray-500"
              }`}
              onClick={()=>handleClick(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
