import React, { useState } from "react";
import axios from "axios";

const Search = ({ setCharacters, setIsLoading }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const fetchdata = async () => {
    if (search) {
      try {
        setIsLoading(true);
        const response = await axios.post("http://localhost:3100/", {
          name: search,
        });
        const results = response.data.results;
        setCharacters(results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError("Quel super héros cherches-tu? ");
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetchdata();
      }}
    >
      <input
        type="text"
        placeholder="Rechercher un personnage"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <input type="submit" value="Rechercher" />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Search;
