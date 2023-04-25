import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/Typography";

interface ITeamMemberCardProps {
  name: string;
  designation: string;
  imageSrc: string;
}

const StyledMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #faf6f2;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #da5162;
  border-radius: 8px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.16);
  &:hover {
    border-left: 4px dotted #da5162;
    border-right: 4px dotted #da5162;
    border-top: 4px dotted #da5162;
    border-bottom: 4px dotted #da5162;
  }
  @media (max-width: 768px){
    margin-bottom: 16px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

function TeamMemberCard(props: ITeamMemberCardProps) {
  const { name, designation, imageSrc } = props;

  return (
    <StyledMemberCard>
      <StyledImage src={imageSrc} />
      <Typography variant="h6" color="#da5162" fontWeight="bold" margin="16px 0 0 0">
        {name}
      </Typography>
      <Typography variant="body1" margin="8px 0 16px 0">
        {designation}
      </Typography>
    </StyledMemberCard>
  );
}

export default TeamMemberCard;
