export const Countries = ({ countries }) => {
  return (
    <ul>
      {countries.map((country, index) => {
        return (
          <li key={index}>
            <h1>{country.country}</h1>
            <div>Monthly: %{country.monthly_rate_pct}</div>
            <div>Yearly: %{country.yearly_rate_pct}</div>
            <strong>Period: {country.period}</strong>
          </li>
        );
      })}
    </ul>
  );
};
