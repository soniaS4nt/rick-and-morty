import { Props } from "./interface";

const NavPage: React.FC<Props> = ({ page, setPage }) => {
  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < 42) setPage(page + 1);
  };

  return (
    <header className="navPage">
      <button onClick={handleBack}>{`previous page ${page - 1}`}</button>
      <p>{`Page ${page}`}</p>
      <button onClick={handleNext}>
        {page < 42 ? `Next page ${page + 1}` : "no more pages"}
      </button>
    </header>
  );
};

export default NavPage;
