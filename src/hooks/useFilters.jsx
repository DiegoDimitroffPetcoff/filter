import { useContext } from "react";
import countryMocks from "../mocks.json";
import { FilterContext } from "./useContext";
export function usefilter() {
  const { filters, useFilters } = useContext(FilterContext);

  const countryFiltered = countryMocks.filter((country) => {
    return (
      (country.monthly_rate_pct >= filters.Monthly ||
        filters.Monthly === "all") &&
      (country.yearly_rate_pct >= filters.Yearly || filters.Yearly === "all")
    );
  });

  return { useFilters, countries: countryFiltered };
}
