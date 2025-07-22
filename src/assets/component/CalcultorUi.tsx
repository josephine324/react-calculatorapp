export default function Calculator(){
    function handleClick(){
        return
    }
    return(
      <div className="grid grid-cols-4 grid-rows-6 w-96 h-96 mt-2 min-h-screen mx-auto">
        <div className="col-span-4 row-span-1 bg-gray-800 text-end text-white" ></div>
        <button className="bg-gray-300 border border-black text-3xl font-bold">AC</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">+/-</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">%</button>
        <button className="bg-amber-600 border border-black text-3xl font-bold">&divide;</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">7</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">8</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">9</button>
        <button className="bg-amber-600 border border-black text-3xl font-bold">&times;</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">4</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">5</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">6</button>
        <button className="bg-amber-600 border border-black text-3xl font-bold">-</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">1</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">2</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">3</button>
        <button className="bg-amber-600 border border-black text-3xl font-bold">+</button>
        <button className="col-span-2 border border-black text-3xl font-bold">0</button>
        <button className="bg-gray-300 border border-black text-3xl font-bold">.</button>
        <button className="bg-amber-600 border border-black text-3xl font-bold">=</button>
      </div>
    )
}