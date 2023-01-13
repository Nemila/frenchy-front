import useSWR from "swr";
// components
import AnimeCard from "@/components/AnimeCard";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
// lib
import { fetcher } from "@/lib/api";
import { Anime } from "@/lib/types";

export default function Home() {
  const { data, isLoading, error } = useSWR(
    "http://localhost:8000/anime/popular",
    fetcher
  );

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <main className="max-w-6xl w-full mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4 gap-4">
        {data.map((anime: Anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </main>
  );
}
