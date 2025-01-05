"use client"
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";



export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Airam's Portfolio</title>
      </Head>
      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero">
      <Hero />
      </section>


      {/* About */}

      {/* Expireiencec */}

      {/* skills */}

      {/* Proyects */}

      {/* Contact */}
       
       
      
    </div>
  );
}


