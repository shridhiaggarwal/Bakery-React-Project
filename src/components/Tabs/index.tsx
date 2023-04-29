import { useState } from "react";
import styled from "styled-components";

interface ITabProps {
  value: string;
  tabCategory: string;
}

interface ITabListProps {
  tabsList: Array<ITabProps>;
  activeTab: string;
  setActiveTab: (tabCategory: string) => void;
}

const StyledTabs = styled.ul`
  display: flex;
  justify-content: center;
  .nav-link {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    background-color: white;
    color: #da5162;
    text-transform: uppercase;
    border: none;
    outline: none;
  }
  .nav-link.active {
    background-color: #da5162;
    color: white;
  }
`;

function Tabs(props: ITabListProps) {
  const { tabsList, activeTab, setActiveTab } = props;

  return (
    <StyledTabs className="nav nav-pills" role="tablist">
      {tabsList.map((tabData) => {
        const { value, tabCategory } = tabData;
        return (
          <li className="nav-item">
            <a
              className={
                activeTab === tabCategory ? "nav-link active" : "nav-link"
              }
              data-toggle="pill"
              href="#"
              onClick={() => setActiveTab(tabCategory)}
            >
              {value}
            </a>
          </li>
        );
      })}
    </StyledTabs>
  );
}

export default Tabs;
