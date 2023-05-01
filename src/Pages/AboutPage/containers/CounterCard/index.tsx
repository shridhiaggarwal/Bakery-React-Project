import React from "react";
import styled from "styled-components";
import Counter from "../../../../components/Counter";
import Typography from "../../../../components/Typography";

const StyledCounterCard = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.16);
  }
  .counterSpan {
    color: #666666;
    font-size: 1.75rem;
    font-weight: bolder;
  }
  @media (max-width: 768px){
    margin-bottom: 16px;
  }
`;

const StyledImage = styled.img`
  margin-bottom: 8px;
`;

interface ICounterCardProps {
  imageSrc: string;
  counterStart: number;
  counterEnd: number;
  title: string;
}

function CounterCard(props: ICounterCardProps) {
  const { imageSrc, counterStart, counterEnd, title } = props;

  return (
    <StyledCounterCard>
      <StyledImage src={imageSrc} />
      <Counter
        start={counterStart}
        end={counterEnd}
        prefix="+ "
        duration={4}
        className="counterSpan"
      />
      <Typography
        variant="h6"
        fontWeight="bold"
        color="#da5162"
        margin="8px 0 0 0"
      >
        {title}
      </Typography>
    </StyledCounterCard>
  );
}

export default CounterCard;
