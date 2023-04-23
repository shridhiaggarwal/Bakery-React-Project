import React from "react";
import styled from "styled-components";
import TeamMemberCard from "../TeamMemberCard";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";

interface ITeamContainerProps {
  margin?: string;
}

const StyledTeamContainer = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

function TeamContainer(props: ITeamContainerProps) {
  const { margin } = props;

  const teamData = [
    { name: "Ishita Kapoor", designation: "Owner", imageSrc: Images.TEAM1 },
    {
      name: "Takashi Tanaka",
      designation: "Head Chef",
      imageSrc: Images.TEAM2,
    },
    { name: "Emily Thompson", designation: "Baker", imageSrc: Images.TEAM3 },
    { name: "Rohit Singh", designation: "Baker", imageSrc: Images.TEAM4 },
  ];
  return (
    <StyledTeamContainer margin={margin}>
      <Typography variant="h4" color="#da5162" margin="80px 0 32px 0">
        Our Team
      </Typography>
      <div className="row">
        {teamData.map((member) => {
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
