import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// components
import EpisodeList from "@/components/EpisodeList";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
//  libs
import { fetcher } from "@/lib/api";
import { AnimeDetailsType, Episode } from "@/lib/types";

const Stream = () => {
  const router = useRouter();
  const { animeId, episodeId } = router.query;
  const [currentEp, setCurrentEp] = useState<Episode | undefined>();

  const { data, isLoading, error } = useSWR(
    `http://localhost:8000/anime/episode/${episodeId}`,
    fetcher
  );

  const {
    data: anime,
    isLoading: animeLoading,
    error: animmeError,
  } = useSWR<AnimeDetailsType>(
    `http://localhost:8000/anime/info/${animeId}`,
    fetcher
  );

  useEffect(() => {
    if (anime && anime.eps.length > 0) {
      setCurrentEp(
        anime.eps.find((ep) => ep.url === `/anime/episode/${episodeId}`)
      );
    }
  }, [anime]);

  if (isLoading || animeLoading) return <Loading />;
  if (error || animmeError) return <Error />;

  return (
    <div className="flex-grow max-w-6xl w-full mx-auto">
      <iframe
        className="aspect-video w-full md:w-full"
        src={data}
        sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allowFullScreen
      ></iframe>

      <div className="flex-grow py-4 flex flex-col gap-4">
        <div className="prose">
          <h3>{currentEp?.title}</h3>
          <p>Duree {currentEp?.time}</p>
        </div>

        <EpisodeList episodes={anime?.eps || []} animeId={animeId} />
      </div>
    </div>
  );
};

export default Stream;
