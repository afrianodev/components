import { useState } from "react"
import Header from "./components/Header"
import ToDoListWrapper from "./components/TodoListWrapper/TodoListWrapper"
import RandomQuotesWrapper from "./components/RandomQuotesWrapper/RandomQuotesWrapper"
import RockPaperScissorsWrapper from "./components/RockPaperScissorsWrapper/RockPaperScissorsWrapper"
import TicTacToeWrapper from "./components/TicTacToeWrapper/TicTacToeWrapper"
import CalculatorWrapper from "./components/CalculatorWrapper/CalculatorWrapper"
import SliderScrollWrapper from "./components/SliderScrollWrapper/SliderScrollWrapper"

function App() {
  const [activeComponent, setActiveComponent] = useState('todolist');

  const renderComponent = () => {
    switch (activeComponent) {
        case "ToDoList":
            return <ToDoListWrapper />;
        case "RandomQuotes":
            return <RandomQuotesWrapper />;
        case "Calculators":
            return <CalculatorWrapper />;
        case "RockPaperScissors":
            return <RockPaperScissorsWrapper />;
        case "TicTacToe":
            return <TicTacToeWrapper />;
        case 'Slider':
            return <SliderScrollWrapper />
        default:
            return <ToDoListWrapper />;
    }
};

  return (
    <>
    <Header buttonSelected={setActiveComponent} />
    {renderComponent()}
    </>
  )
}

export default App
