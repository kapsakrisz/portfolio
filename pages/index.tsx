import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';

import Skills from '../components/Skills';
import Projectsv2 from '../components/Projectsv2';
import analytics from '@vercel/analytics';




const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>krisz portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero/>

      </section>

      <section id='about' className="snap-center">
       <About/> 
      </section>

      <section id='skills' className="snap-start">
      <Skills/>
      </section>
      
      <section id='projects' className="snap-start">
     <Projectsv2/>
     
      </section>
      <section id='contact' className="snap-start">
        <ContactMe/>
      </section>

      
    </div>
  )
}

export default Home
