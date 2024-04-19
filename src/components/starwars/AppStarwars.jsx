import { useEffect, useState } from "react";
import { getCharacters, getIdFromUrl } from "../../app/services/services";

const AppStarwars = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div>
      {characters.map((character, i) => {
        return (
          <div key={i}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                character.url
              )}.jpg`}
              onClick={() =>
                (window.location.href = `/${getIdFromUrl(character.url)}`)
              }
            />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default AppStarwars;
