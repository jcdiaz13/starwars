import {
  StyledLayout,
  StyledNav,
  StyledNavLink,
  ContentContainer,
} from "./styles";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledNav>
        <StyledNavLink to="/starwars">HOME</StyledNavLink>
      </StyledNav>
      <ContentContainer>{children}</ContentContainer>
    </StyledLayout>
  );
};

export default Layout;
