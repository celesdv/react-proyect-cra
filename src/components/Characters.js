import { useState, useEffect } from "react";
import CharactersContainer from "./CharacterContainer";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  const getCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="p-2">
      <h3 className="text-center">Rick and Morty Characters!</h3>
      <CharactersContainer characters={characters} />
    </div>
  );
};

export default Characters;
