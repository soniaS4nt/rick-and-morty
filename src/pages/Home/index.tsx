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
      <footer>
        <p>Developed with 🧡 by</p>
        <a href="https://github.com/soniaS4nt/" target="_blank">
          <p>Sonia Chaparro</p>
        </a>
      </footer>
    </>
  );
};
export default Home;
