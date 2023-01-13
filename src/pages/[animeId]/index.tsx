import React, { useEffect, useRef } from "react";
import useSWR from "swr";
// next
import Image from "next/image";
import { useRouter } from "next/router";
// components
import EpisodeList from "@/components/EpisodeList";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
// lib
import { AnimeDetailsType } from "@/lib/types";
import { fetcher } from "@/lib/api";

const AnimeDetails = () => {
  const router = useRouter();
  const { animeId } = router.query;
  const myDesc = useRef<any>(null);

  const { data, isLoading, error } = useSWR<AnimeDetailsType>(
    `http://localhost:8000/anime/info/${animeId}`,
    fetcher
  );

  useEffect(() => {
    if (myDesc.current) {
      myDesc.current.innerHTML = data?.synop;
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <div className="w-full h-56 md:96 overflow-hidden">
        <Image
          src={data?.banner || ""}
          alt=""
          width={200}
          height={400}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="max-w-6xl flex-grow w-full mx-auto py-8 flex flex-col md:flex-row-reverse gap-8">
        <div className="prose">
          <h2>{data?.eps[0].title}</h2>
          <p ref={myDesc}></p>
        </div>
        <EpisodeList episodes={data?.eps || []} animeId={animeId} />
      </div>
    </>
  );
};

export default AnimeDetails;
