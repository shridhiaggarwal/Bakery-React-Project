import React from "react";
import styled from "styled-components";
import CounterCard from "../CounterCard";

interface ICounterCardsDataProps {
  imageSrc: string;
  counterStart: number;
  counterEnd: number;
  title: string;
}
interface ICounterCardsContainerProps {
  margin?: string;
  counterCardsData: Array<ICounterCardsDataProps>;
}

const StyledRow = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

function CounterCardsContainer(props: ICounterCardsContainerProps) {
  const { margin, counterCardsData } = props;

  return (
    <StyledRow className="row" margin={margin}>
      {counterCardsData.map((card) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-3">
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
