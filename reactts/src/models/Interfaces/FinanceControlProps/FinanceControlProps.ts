import type { Moviment } from "../../../components/Moviment/Moviment";


export interface FinanceControlProps {
    handleSetMovement: (movement: Moviment) => void;
    balance: number;
    expenses: number;
}