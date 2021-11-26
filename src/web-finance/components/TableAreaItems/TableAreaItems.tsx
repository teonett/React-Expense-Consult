import React from "react";
import { currency, formatDate } from "../../../main/utils/masks";
import { Expense } from "../../types/Expense";
import * as C from "./styles";
import { DataCategories as categories } from "../../_mock/dataCategories";

type ItemProps = {
  item: Expense;
};

const TableAreaItems = ({ item }: ItemProps) => {
  return (
    <C.TableLine>
      <C.TableColumnText tipoAlign={1}>
        {formatDate(item.date)}
      </C.TableColumnText>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumnText>{item.title}</C.TableColumnText>
      <C.TableColumn>
        <C.Value color={categories[item.category].color}>
          {currency.mask(item.value)}
          {categories[item.category].color === "blue" ? "  [+]" : "  [-]"}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};

export default TableAreaItems;
