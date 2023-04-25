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
  background-color: #faf6f2;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #da5162;
  border-radius: 8px;
  &:hover {
    border-left: 4px dotted #da5162;
    border-right: 4px dotted #da5162;
    border-top: 4px dotted #da5162;
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
      <Typography variant="h5" color="#da5162" margin="16px 0 0 0">
        {name}
      </Typography>
      <Typography variant="h6" margin="16px 0 16px 0">
        {designation}
      </Typography>
    </StyledMemberCard>
  );
}

export default TeamMemberCard;
