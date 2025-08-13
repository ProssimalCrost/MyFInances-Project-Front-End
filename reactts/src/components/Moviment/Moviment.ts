export interface Moviment {
    name: string;
    value: number;
    type: "input" |"output";
    id?: string;
}