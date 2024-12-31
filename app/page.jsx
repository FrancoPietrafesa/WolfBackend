'use client';
import Hero from './components/hero';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Nav from './components/nav';
import Stories from './components/stories';
import Program from './components/program';
import Master from './components/master';
import Esquemas from './components/esquema';
import Message from './components/message';
import Faqs from './components/faqs';
import Footer from './components/footer';
import useDimension from '@/hooks/useDimension';

const App = () => {
  const { width } = useDimension();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    if (width && width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <main className='min-h-screen w-full py-7 '>
      <Nav />
      <Hero />
      <Stories />
      <Program isMobile={isMobile} />
      <Master />
      <Esquemas />
      <Message />
      <Faqs />
      <Footer />
    </main>
  );
};
export default App;
