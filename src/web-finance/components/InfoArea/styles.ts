import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #888;
  font-size: large;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;

export const ArrowDirection = styled.div`
  color: darkblue;
`;
