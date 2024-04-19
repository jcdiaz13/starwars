import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color:#1C1D1E;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  background-color: transparent;
  border: none;
  padding: 15px 20px; 
  margin: 0 10px; 
  font-size: 16px; 
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px; 
  padding: 0 20px; 
`;
