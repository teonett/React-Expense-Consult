import React from "react";
import { currency } from "../../../main/utils/masks";
import * as C from "./styles";

type ResumeProps = {
  title: string;
  value: number;
};

const ResumeItem = ({ title, value }: ResumeProps) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info>{currency.mask(value)}</C.Info>
    </C.Container>
  );
};

export default ResumeItem;
