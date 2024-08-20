export default function Header({buttonSelected}) {
    return(<>
    <div className="text-gray-800 ml-[1%]">Fullstack Developer <a className="font-bold cursor-pointer">Afriano</a></div>
    <div className="w-[100vw] overflow-x-hidden flex gap-4 justify-center">
        <div className="w-[150px] p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 rounded-md text-center font-bold text-gray-700 active:text-gray-200 select-none cursor-pointer" onClick={()=> buttonSelected('ToDoList')}>ToDo Lists</div>
        <div className="w-[150px] p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 rounded-md text-center font-bold text-gray-700 active:text-gray-200 select-none cursor-pointer" onClick={()=> buttonSelected('RandomQuotes')}>Random Quotes</div>
        <div className="w-[150px] p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 rounded-md text-center font-bold text-gray-700 active:text-gray-200 select-none cursor-pointer" onClick={()=> buttonSelected('Calculators')}>Calculators</div>
        <div className="w-[150px] p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 rounded-md text-center font-bold text-gray-700 active:text-gray-200 select-none cursor-pointer text-sm" onClick={()=> buttonSelected('RockPaperScissors')}>Rock Paper Scissors</div>
        <div className="w-[150px] p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 rounded-md text-center font-bold text-gray-700 active:text-gray-200 select-none cursor-pointer" onClick={()=> buttonSelected('TicTacToe')}>Tic Tac Toe</div>
        <div className="w-[150px] p-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 rounded-md text-center font-bold text-gray-700 active:text-gray-200 select-none cursor-pointer" onClick={()=> buttonSelected('Slider')}>Sliders</div>
    </div>
    <div className="h-[2px] w-[90%] bg-gray-600 rounded-xl mx-auto mt-4"></div>
    </>)
}