import type { Moviment } from "../../../components/Moviment/Moviment";

export interface BalanceProps {
    emitMovement: (movement: Moviment) => void;
    currentBalance: number;
 }