import React from "react";
import * as C from "./styles";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";
import { ArrowRightCircleFill } from "@styled-icons/bootstrap/ArrowRightCircleFill";
import { formatCurrentMonth } from "../../../main/utils/masks";
import ResumeItem from "../ResumeItem";

type InfoAreaProps = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: InfoAreaProps) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <C.ArrowDirection>
            <ArrowLeftCircleFill />
          </C.ArrowDirection>
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <C.ArrowDirection>
            <ArrowRightCircleFill />
          </C.ArrowDirection>
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense * -1} />
        <ResumeItem title="Balanço" value={expense - income} />
      </C.ResumeArea>
    </C.Container>
  );
};

export default InfoArea;
