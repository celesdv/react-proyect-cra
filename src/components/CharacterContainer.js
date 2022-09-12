import CharacterCard from "./CharacterCard";

const CharacterConteiner = ({ characters }) => {
  return (
    <div className="cardStyle">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <CharacterCard
              name={character.name}
              status={character.name}
              species={character.species}
              type={character.type}
              gender={character.gender}
              image={character.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterConteiner;
