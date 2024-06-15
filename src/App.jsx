import "./App.css";

import { Countries } from "./components/countries";
import { Filter } from "./components/filter";
import { usefilter } from "./hooks/useFilters";

function App() {
  const { countryFiltered, setFilters } = usefilter();

  return (
    <>
      <header>Search Country</header>
      <Filter filter={setFilters} />
      <Countries countries={countryFiltered} />
    </>
  );
}

export default App;
