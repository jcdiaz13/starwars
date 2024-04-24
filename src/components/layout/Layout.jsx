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
        <StyledNavLink to="/falacias">FALACIAS</StyledNavLink>
        <StyledNavLink to="/firebase">FIRE BASE</StyledNavLink>
      </StyledNav>
      <ContentContainer>{children}</ContentContainer>
    </StyledLayout>
  );
};

export default Layout;
