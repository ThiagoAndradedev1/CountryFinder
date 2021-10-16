import React, { useState } from "react";
import { useSearchCountry } from "../../hooks/useSearchCountry";

const SearchCountry = () => {
  const [name, setName] = useState("");

  const { data, loading, error, getCountry } = useSearchCountry();

  console.log(data);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getCountry({ variables: { name } })}>
        Search
      </button>
      <h1>{data?.Country[0].capital}</h1>
    </div>
  );
};

export default SearchCountry;
