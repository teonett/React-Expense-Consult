import React from "react";
import { Expense } from "../../types/Expense";
import TableAreaItems from "../TableAreaItems";
import * as C from "./styles";

type ExpenseProps = {
  list: Expense[];
};

const TableArea = ({ list }: ExpenseProps) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={150}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={170}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Descrição</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableAreaItems key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};

export default TableArea;
