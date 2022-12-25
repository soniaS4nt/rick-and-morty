import Characters from "pages/Characters";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Characters />
      </main>
    </>
  );
};
export default Home;
