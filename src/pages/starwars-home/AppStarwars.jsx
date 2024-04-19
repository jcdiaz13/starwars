import { useEffect, useState } from "react";
import { getCharacters, getIdFromUrl } from "../../app/services/services";
import { Link } from "react-router-dom";
import { Box, StyledContainer } from "./styles";

const AppStarwars = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <StyledContainer>
      {characters.map((character, i) => {
        return (
          <Box key={i}>
            <Link to={"/starwars/profile/" + getIdFromUrl(character.url)}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                  character.url
                )}.jpg`}
              />
            </Link>
            <h2>{character.name}</h2>
          </Box>
        );
      })}
    </StyledContainer>
  );
};

export default AppStarwars;
