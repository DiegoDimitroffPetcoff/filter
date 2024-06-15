import { useState } from "react";

export function Filter({ filter }) {
  const [monthly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);

  function handleMonthlyChange(e) {
    setMonthly(e.target.value);
    filter((preState) => ({
      ...preState,
      Monthly: e.target.value,
    }));
  }
  function handleYearlChange(e) {
    setYearly(e.target.value);
    filter((preState) => ({
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
        />
        <strong>From: %{monthly}</strong>
      </div>
      <div>
        <label htmlFor="yearly">Yearly</label>
        <input
          type="range"
          min="0.00"
          max="5"
          step="0.01"
          onChange={handleYearlChange}
        />
        <strong>From: %{yearly}</strong>
      </div>
    </section>
  );
}
