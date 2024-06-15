import { useEffect, useState } from "react";
import countryMocks from "../mocks.json";
export function usefilter() {
  const [filters, setFilters] = useState({
    Monthly: "all",
    Yearly: "all",
  });
/* useEffect((
try {
  fetch(``)
} catch (error) {
  console.log(error);
}

),[filter]) */
  const countryFiltered = countryMocks.filter((country) => {
    return (
      (country.monthly_rate_pct >= filters.Monthly ||
        filters.Monthly === "all") &&
      (country.yearly_rate_pct >= filters.Yearly || filters.Yearly === "all")
    );
  });

  return { setFilters, countryFiltered };
}
