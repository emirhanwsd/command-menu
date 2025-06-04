import CommandMenu from "@/components/command-menu";
import Head from "next/head";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950/70 font-sans text-gray-900 backdrop-blur-lg">
      <Head>
        <title>Command Menu</title>
      </Head>

      <main className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <CommandMenu />
      </main>
    </div>
  );
};

export default Home;
