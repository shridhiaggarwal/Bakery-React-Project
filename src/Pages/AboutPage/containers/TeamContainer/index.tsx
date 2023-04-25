import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../TeamMemberCard";
import Typography from "../../../../components/Typography";

interface ITeamsDataProps{
  name: string;
  designation: string;
  imageSrc: string;
}
interface ITeamContainerProps {
  margin?: string;
  teamsData: Array<ITeamsDataProps>;
}

const StyledTeamContainer = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

function TeamContainer(props: ITeamContainerProps) {
  const { margin, teamsData } = props;

  return (
    <StyledTeamContainer margin={margin}>
      <Typography variant="h4" color="#da5162" margin="0 0 32px 0">
        Our Team
      </Typography>
      <div className="row">
        {teamsData.map((member) => {
          return (
            <div className="col-md-3">
              <TeamMemberCard
                name={member.name}
                designation={member.designation}
                imageSrc={member.imageSrc}
              />
            </div>
          );
        })}
      </div>
    </StyledTeamContainer>
  );
}

export default TeamContainer;
