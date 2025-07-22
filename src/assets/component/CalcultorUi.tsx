export default function Calculator(){
    return(
      <div className="grid grid-cols-4 grid-rows-6 gap-4">
        <div className="col-span-4  row-span-1 bg-gray-800 p-4 rounded text-end" >Answer here</div>
        <button className="bg-gray-300">AC</button>
        <button className="bg-gray-300">+/-</button>
        <button className="bg-gray-300">%</button>
        <button className="bg-amber-600">&divide;</button>
        <button className="bg-gray-300">7</button>
        <button className="bg-gray-300">8</button>
        <button className="bg-gray-300">9</button>
        <button className="bg-amber-600">&times;</button>
        <button className="bg-gray-300">4</button>
        <button className="bg-gray-300">5</button>
        <button className="bg-gray-300">6</button>
        <button className="bg-amber-600">-</button>
        <button className="bg-gray-300">1</button>
        <button className="bg-gray-300">2</button>
        <button className="bg-gray-300">3</button>
        <button className="bg-amber-600">+</button>
        <button className="col-span-2">0</button>
        <button className="bg-gray-300">.</button>
        <button className="bg-amber-600">=</button>
      </div>
    )
}