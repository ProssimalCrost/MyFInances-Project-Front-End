import { useState } from "react";
import "./Expense.css"
import type { ExpenseProp } from "../../models/Interfaces/ExpenseProps/ExpenseProp";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Expense = (
 {
  currentBalance,
  emitMoviment, 
  currentExpenses,

}: ExpenseProp) => {

    const [renderInputForm, setRenderInputForm] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [inputName, setInputName] = useState("");
    const [inputValue, setInputValue] = useState(0);

    const handleRenderInputForm = () => {
        setRenderInputForm(!false);

    const hideinputForm = () => {
        setRenderInputForm(false);
        setIsFormValid(true);
        setInputName("");    
        setInputValue(0);
    };
    };

  return (
    <div>
        <div className="expense_container">
          <div className="expense_card">
            <header className="expense_header">
              <FontAwesomeIcon icon={faPercent} color="#E43F4d" size="2x"/>
              <h2>Despesas</h2>
            </header>
          </div>

        </div>
    </div>
  )
};

export default Expense;