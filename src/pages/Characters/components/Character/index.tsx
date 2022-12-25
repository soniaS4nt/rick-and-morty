import { Props } from "pages/Characters/interface";

const Character: React.FC<Props> = ({ character }) => {
  return (
    <div className="character" key={character.id}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>
        Status: {character.status} <br />
        Specie: {character.species} <br />
        Gender: {character.gender} <br />
      </p>
    </div>
  );
};

export default Character;
