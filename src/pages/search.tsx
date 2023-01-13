import React, { useState } from "react";
import useSWR from "swr";
// components
import AnimeCard from "@/components/AnimeCard";
// libs
import { fetcher } from "@/lib/api";
import { Anime } from "@/lib/types";

const Search = () => {
  const [query, setQuery] = useState("naruto");

  const { data, isLoading, error } = useSWR(
    `http://localhost:8000/anime/search/${query}`,
    fetcher
  );

  if (isLoading) return <div className="flex-grow p-4">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleSearch = (e: any) => {
    setQuery(e.target["query"].value);
    e.preventDefault();
  };

  return (
    <div className="flex-grow p-4 flex flex-col gap-4">
      <form className="form-control prose" onSubmit={handleSearch}>
        <h2>Recherche</h2>
        <input
          type="text"
          name="query"
          className="input w-full"
          placeholder="Entrez un nom d'anime..."
        />
        <button className="btn btn-primary w-full mt-4">Chercher</button>
      </form>

      {data && (
        <div className="grid grid-cols-2 gap-4">
          {data.slice(0, 20).map((anime: Anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
