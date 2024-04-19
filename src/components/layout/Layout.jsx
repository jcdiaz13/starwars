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
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/starwars">Star Wars</StyledNavLink>
      </StyledNav>
      <ContentContainer>{children}</ContentContainer>
    </StyledLayout>
  );
};

export default Layout;
