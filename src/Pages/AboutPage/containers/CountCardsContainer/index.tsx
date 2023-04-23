import React from "react";
import Counter from "../../../../components/Counter/Index";
import Typography from "../../../../components/Typography";
import styled from "styled-components";
import CounterCard from "../CounterCard";

interface ICounterCardsContainerProps {
  margin?: string;
}

const StyledRow = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

function CounterCardsContainer(props: ICounterCardsContainerProps) {
  const { margin } = props;

  const counterCardsData = [
    {
      imageSrc: "https://img.icons8.com/color/96/null/happy--v1.png",
      counterStart: 0,
      counterEnd: 250,
      title: "Happy Customers",
    },
    {
      imageSrc:
        "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/96/null/external-cake-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
      counterStart: 0,
      counterEnd: 24,
      title: "Cake Options",
    },
    {
      imageSrc: "https://img.icons8.com/officel/96/null/checked-truck.png",
      counterStart: 0,
      counterEnd: 159,
      title: "Deliveries Made",
    },
    {
      imageSrc:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/96/null/external-baker-professions-men-diversity-flaticons-lineal-color-flat-icons.png",
      counterStart: 0,
      counterEnd: 4,
      title: "Employees",
    },
  ];

  return (
    <StyledRow className="row" margin={margin}>
      {counterCardsData.map((card) => {
        return (
          <div className="col-md-3">
            <CounterCard
              imageSrc={card.imageSrc}
              counterStart={card.counterStart}
              counterEnd={card.counterEnd}
              title={card.title}
            />
          </div>
        );
      })}
    </StyledRow>
  );
}

export default CounterCardsContainer;
