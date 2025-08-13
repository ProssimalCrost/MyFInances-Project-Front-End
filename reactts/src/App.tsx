import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import FinanceControl from './FinanceControl/FinanceControl';
import type { Moviment } from './components/Moviment/Moviment';

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); // State de saldo atual
  const [currentExpenses, setCurrentExpenses] = useState(0); // State de despesas atual
  const [movimentsItens, setMovementsItens] = useState<Array<Moviment>>([]); // State de movimentacoes

  const setNewMovement = (movement: Moviment) => {
    if (movement) {
      setMovementsItens((prevMovements) => {
        const movements = [...prevMovements];
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        });

        return movements;
      });

      movement.type === "input" && 
      setCurrentBalance((prevBalance) => prevBalance + Number(movement.value));
   
      if (movement.type === "output")
    
        setCurrentExpenses((prevExpenses) => prevExpenses + Number(movement.value));
    
        currentBalance > 0 && 
        setCurrentBalance (
          (prevBalance) => prevBalance - Number(movement.value)
      )
   
    };


       
       
    };



   return (
    <div>
      <Header/>
      <FinanceControl balance={currentBalance} expenses={currentExpenses} handleSetMovement={setNewMovement}/>
    </div>
  );
};
export default App
