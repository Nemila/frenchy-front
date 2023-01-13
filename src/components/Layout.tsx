import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>MangaVF | Creer par lamine</title>
        <meta
          name="description"
          content="App pour regarder des animes en francais"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
