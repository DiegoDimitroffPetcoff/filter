import "./App.css";

import { Countries } from "./components/countries";
import { Filter } from "./components/filter";
import { usefilter } from "./hooks/useFilters";

function App() {
  const { countries } = usefilter();

  return (
    <>
      <header>Search Country</header>
      <Filter />
      <Countries countries={countries} />
    </>
  );
}

export default App;
