import Navbar from "../components/Navbar";
import Jumbotrons from "../components/Jumbotrons";
import SearchField from "../components/SearchField";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Jumbotrons />
      <SearchField />
    </div>
  );
};

export default HomePage;
