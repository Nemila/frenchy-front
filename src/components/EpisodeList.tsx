import { Episode } from "@/lib/types";
import Link from "next/link";
import React from "react";

type Props = {
  episodes: Episode[];
  animeId: string | string[] | undefined;
};

const EpisodeList = ({ animeId, episodes }: Props) => {
  return (
    <ul className="menu bg-base-100 w-full rounded-box max-h-56 flex-nowrap overflow-y-auto">
      {episodes.map((episode) => (
        <li key={episode.episode}>
          <Link href={`/${animeId}/${episode.url.split("/")[3]}`}>
            {episode.episode}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
