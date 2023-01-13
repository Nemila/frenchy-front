import { Anime } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  anime: Anime;
};

const AnimeCard = ({ anime }: Props) => {
  const animeUrl = anime.url.split("/");
  const animeId = animeUrl[animeUrl.length - 1];
  return (
    <Link
      href={`/${animeId}`}
      className="card bg-base-100 shadow-xl rounded-md"
    >
      <figure className="w-full h-56 overflow-hidden">
        <Image
          src={anime.url_image}
          alt="Shoes"
          width={300}
          height={150}
          className="object-cover object-center w-full h-full"
        />
      </figure>
      <div className="card-body p-4">
        <div className="card-title">
          <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">
            {anime.title}
          </h2>
        </div>
        <p className="text-slate-400 capitalize text-sm">{anime.nb_eps}</p>
      </div>
    </Link>
  );
};

export default AnimeCard;
