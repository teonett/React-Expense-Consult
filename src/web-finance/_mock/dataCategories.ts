import { Category } from "../types/Category";

export const DataCategories: Category = {
  salary: { title: "Salário Mensal", color: "blue", expense: false },
  food: { title: "Refeição", color: "orange", expense: true },
  rent: { title: "Aluguel", color: "#F8C471 ", expense: true },
  funny: { title: "Diversão Pessoal", color: "#F4D03F", expense: true },
  bills: { title: "Conta de Consumo", color: "red", expense: true },
  others: { title: "Outras Contas", color: "#800000", expense: true },
};
