import { useState } from "react";
import type { BalanceProps } from "../../models/Interfaces/BalanceProps/BalanceProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Balance.css"
import Button from "../Button/Button";

const Balance = ({ emitMovement, currentBalance }: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  // abrir o form (antes fazia !false = true sempre; mantive o nome e a ideia de "mostrar")
  const handleRenderInputForm = () => setRenderInputForm(true);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  // handlers corretos para os inputs
  const handleInputNameForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputName(value);
    setIsFormValid(value.trim().length > 0 && inputValue.trim().length > 0);
  };

  const handleInputValueForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
    setIsFormValid(inputName.trim().length > 0 && value.trim().length > 0);
  };

  // tipagem do evento no <form>, não em <input>
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputValue.trim().length === 0) {
      setIsFormValid(false);
      return;
    }

    const numericValue = parseFloat(inputValue.replace(",", "."));
    if (Number.isNaN(numericValue)) {
      setIsFormValid(false);
      return;
    }

    hideInputForm();
    emitMovement({
      name: inputName.trim(),
      value: 0, // antes enviava string
      type: "input",
    });
  };

  return (
    <div>
      <div className="balance_container">
        <div className="balance_card">
          <header>
            <div className="balance_header">
              <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x"/>
              <h2>Saldo</h2>
            </div>
          </header>
          <h3>{currentBalance > 0 ? currentBalance : "R$ 0"}</h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Entrada"
              priority="Input"
            />
          )}

          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <div className={`input_form_container ${!isFormValid ? "invalid" : ""}`}>
                <input
                  type="text"
                  placeholder="Nome"
                  className="balance_input"
                  value={inputName}
                  onChange={handleInputNameForm}
                />

                <input
                  type="number"
                  step="0.01"
                  inputMode="decimal"
                  placeholder="Valor"
                  className="balance_input"
                  value={inputValue}
                  onChange={handleInputValueForm}
                />

                {!isFormValid && (
                  <small className="error_text">Preencha nome e valor válidos.</small>
                )}

                <Button 
                  title="Cacelar"
                  priority="Output"
                  action={hideInputForm}
                />

                <Button 
                  title="Adicionar"
                  priority="Input"
                  action={hideInputForm}
                />
              </div>
              <div className="actions_form_buttons_container"></div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
