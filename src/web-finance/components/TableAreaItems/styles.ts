import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td<{ tipoAlign?: number }>`
  padding: 10px 0;
  text-align: ${(props) => (props.tipoAlign === 1 ? "center" : "auto")};
`;

export const TableColumnText = styled.td<{ tipoAlign?: number }>`
  padding: 10px 0;
  text-align: ${(props) => (props.tipoAlign === 1 ? "center" : "auto")};
  font-weight: bold;
  color: #888;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color?: string }>`
  border-radius: 5px;
  color: #fff;
  text-align: right;
  background-color: ${(props) => (props.color === "blue" ? "green" : "red")};
`;
