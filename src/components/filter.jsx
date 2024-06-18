import { useContext, useState } from "react";
import { FilterContext } from "../hooks/useContext";

export function Filter() {
  const { filters, useFilters } = useContext(FilterContext);

  function handleMonthlyChange(e) {
    useFilters((preState) => ({
      ...preState,
      Monthly: e.target.value,
    }));
  }
  function handleYearlChange(e) {
    useFilters((preState) => ({
      ...preState,
      Yearly: e.target.value,
    }));
  }
  return (
    <section>
      <div>
        <label htmlFor="monthly">Monthly</label>
        <input
          type="range"
          min="0.00"
          max="5"
          step="0.01"
          onChange={handleMonthlyChange}
          value={filters.Monthly}
        />
        <strong>From: %{filters.Monthly}</strong>
      </div>
      <div>
        <label htmlFor="yearly">Yearly</label>
        <input
          type="range"
          min="0.00"
          max="5"
          step="0.01"
          onChange={handleYearlChange}
          value={filters.Yearly}
        />
        <strong>From: %{filters.Yearly}</strong>
      </div>
    </section>
  );
}
