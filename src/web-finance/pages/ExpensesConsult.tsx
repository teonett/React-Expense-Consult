import React, { useEffect, useState } from "react";
import {
  filteredByMonth,
  getCurrentMonth,
} from "../../main/helpers/dataFilter";
import * as C from "../../main/styles/GlobalStyles";
import InfoArea from "../components/InfoArea";
import TableArea from "../components/TableArea";
import {} from "../components/InfoArea/InfoArea";
import { Expense } from "../types/Expense";
import { dataExpenses as Expenses } from "../_mock/dataExpenses";
import { DataCategories as categories } from "../_mock/dataCategories";

const ExpensesConsult = () => {
  const [list, setList] = useState(Expenses);
  const [filteredList, setFilteredList] = useState<Expense[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filteredByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default ExpensesConsult;
