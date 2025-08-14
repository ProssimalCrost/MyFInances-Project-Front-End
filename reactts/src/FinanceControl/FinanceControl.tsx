import type { FinanceControlProps } from "../models/Interfaces/FinanceControlProps/FinanceControlProps";
import "./FinanceControl.css";
import type { Moviment } from "../components/Moviment/Moviment";
import Balance from "../components/Balance/Balance";
import Expense from "../components/Expense/Expense";

const FinanceControl = ({
  handleSetMovement, 
  balance, 
  expenses
}: FinanceControlProps) => {

const receiveNewMoviment = (movement: Moviment) => {
  movement && handleSetMovement(movement);
}
return (
      <div className="container_finances">
       <Balance currentBalance={balance} emitMovement={receiveNewMoviment}/>
       <Expense currentBalance={balance} currentExpense={expenses} emitMoviment={receiveNewMoviment}/>
      </div>  
  );
}


export default FinanceControl;