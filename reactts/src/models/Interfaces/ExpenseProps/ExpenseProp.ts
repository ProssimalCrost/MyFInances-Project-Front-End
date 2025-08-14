import type { Moviment } from '../../../components/Moviment/Moviment';

export interface ExpenseProp {
  emitMoviment: (moviment: Moviment) => void;
  currentExpense: number;
  currentBalance: number;
}