import useFetchApi from "hooks/useFetchApi";
import Character from "./components/Character";
import NavPage from "./components/NavPage";

const Characters: React.FC = () => {
  const { character, page, setPage, loading } = useFetchApi();
  return (
    <div>
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="characters">
          {character.map((character) => (
            <div key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Characters;
