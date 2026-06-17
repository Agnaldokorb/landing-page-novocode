"use client";

import React from "react";
import YouTube, { type YouTubeProps } from "react-youtube";

interface PlayerVars {
  autoplay: number;
}

interface YoutubeOpts {
  height: string;
  width: string;
  playerVars: PlayerVars;
}

function extractYouTubeId(value: string): string {
  const trimmedValue = value.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedValue)) {
    return trimmedValue;
  }

  try {
    const url = new URL(trimmedValue);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }

    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v") ?? "";
    }
  } catch {
    return "";
  }

  return "";
}

function MeuVideoYouTube(): React.ReactElement {
  const source = "https://www.youtube.com/watch?v=uH9Wui3-se0&t=22s"; // Pode ser ID (11 caracteres) ou URL completa do YouTube
  const videoId = extractYouTubeId(source);

  const opts: YoutubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0, // 1 para reproduzir automaticamente
    },
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  if (!videoId) {
    return (
      <div className="w-full max-w-3xl rounded-lg border border-orange-200 bg-white p-4 text-sm text-orange-700">
        Video nao exibido: use um ID valido de 11 caracteres ou URL completa do
        YouTube.
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl">
        <div className="flex-col p-4 bg-orange-500 text-white">
            <h3 className="text-center text-lg font-semibold text-gray-900 md:text-3xl">
                Apresentacao do Gpro
            </h3>
            <p className="text-center mt-2 text-sm md:text-base p-2">
                Conheca o Gpro, o sistema de gestão empresarial da Gdoor Zucchetti, e
                descubra como ele pode transformar a operação do seu negócio.
            </p>
        </div>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        className="aspect-video w-full"
        iframeClassName="h-full w-full"
      />
    </div>
  );
}

export default MeuVideoYouTube;
