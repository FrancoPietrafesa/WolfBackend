import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  animate,
  animate3,
  animate4,
  animateImageLeft,
  animateImageRight,
} from '../animation/anim';

const Esquemas = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });
  const isInView7 = useInView(ref7, { once: true });
  const isInView8 = useInView(ref8, { once: true });
  const isInView9 = useInView(ref9, { once: true });
  const isInView10 = useInView(ref10, { once: true });

  return (
    <main className='min-h-screen w-full py-7 px-10 flex flex-col gap-10 items-center justify-start fondoprueba bg-black'>
      <motion.div
        ref={ref}
        variants={animate}
        initial='initial'
        animate={isInView ? 'open' : 'initial'}
        className='flex items-center w-fit px-3 py-[6px] gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'
      >
        <div className='bg-[#0F2426] flex items-center justify-center h-4 w-4 rounded-sm'>
          <img
            src='/images/Asterix.svg'
            height={'12px'}
            width={'12px'}
            alt='asterisco'
          />
        </div>
        <p className='text-center font-semibold text-[14px]'>
          {' '}
          THIS IS WHAT YOU&apos;LL ACHIEVE
        </p>
      </motion.div>
      <motion.h2
        ref={ref2}
        variants={animate3}
        initial='initial'
        animate={isInView2 ? 'open' : 'initial'}
        className='text-[20px] text-center lg:text-[60px] max-w-[250px] lg:max-w-3xl text-white font-bold leading-[1.4em] lg:leading-[1.2em]  '
      >
        By The End Of The Program, You Will Have:
      </motion.h2>
      <section className='w-full flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-40 lg:mt-20 '>
        <article className='flex flex-col gap-10 lg:gap-4 justify-center items-center lg:items-start'>
          <motion.div
            ref={ref3}
            variants={animate3}
            initial='initial'
            animate={isInView3 ? 'open' : 'initial'}
            className='flex items-center w-fit px-3 py-[6px] gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'
          >
            <div className='bg-[#0F2426] flex items-center justify-center h-4 w-4 rounded-sm'>
              <img
                src='/images/Asterix.svg'
                height={'12px'}
                width={'12px'}
                alt='asterisco'
              />
            </div>
            <p className='text-center font-semibold text-[14px]'>
              {' '}
              THIS IS WHAT YOU&apos;LL ACHIEVE
            </p>
          </motion.div>
          <div className='flex flex-col items-center lg:items-start gap-7 max-w-xl '>
            <motion.h3
              ref={ref4}
              variants={animate4}
              initial='initial'
              animate={isInView4 ? 'open' : 'initial'}
              className='text-[20px] text-center lg:text-start lg:text-[60px] max-w-[400px] lg:max-w-3xl  text-white font-bold leading-[1.4em] lg:leading-[1.2em]  '
            >
              Empower a system that generates
              <span className='text-[#0DC8E0]'>
                {' '}
                $60,000+/Month
              </span>
            </motion.h3>
            <motion.span
              ref={ref5}
              variants={animate4}
              initial='initial'
              animate={isInView5 ? 'open' : 'initial'}
              className='text-[#c6c7c6] text-[14px] lg:text-[20px] max-w-xs lg:max-w-lg text-center lg:text-start'
            >
              Become a six-figure entrepreneur with a
              well-tested system that delivers real,
              repeatable results.
            </motion.span>
          </div>
        </article>
        <motion.div
          ref={ref6}
          variants={animateImageRight}
          initial='initial'
          animate={isInView6 ? 'open' : 'initial'}
          className=' w-[300px] h-[250px] lg:w-[448px] lg:h-[337px]'
        >
          <img
            src='/images/Esquema1.webp'
            alt='Esquema'
            className='object-contain'
            height={'100%'}
            width={'100%'}
          />
        </motion.div>
      </section>
      <section className='w-full flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-40 lg:mt-20'>
        <motion.div
          ref={ref10}
          variants={animateImageLeft}
          initial='initial'
          animate={isInView10 ? 'open' : 'initial'}
          className=' w-[300px] h-[250px] lg:w-[534px] lg:h-[422px] order-2 lg:order-1'
        >
          <img
            src='/images/Esquema2.png'
            alt='Esquema'
            className='object-contain'
            height={'100%'}
            width={'100%'}
          />
        </motion.div>
        <article className='flex flex-col gap-10 lg:gap-4 justify-center items-center lg:items-start order-1 lg:order-2'>
          <motion.div
            ref={ref7}
            variants={animate3}
            initial='initial'
            animate={isInView7 ? 'open' : 'initial'}
            className='flex items-center w-fit px-3 py-[6px] gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'
          >
            <div className='bg-[#0F2426] flex items-center justify-center h-4 w-4 rounded-sm'>
              <img
                src='/images/Asterix.svg'
                height={'12px'}
                width={'12px'}
                alt='asterisco'
              />
            </div>
            <p className='text-center font-semibold text-[14px]'>
              {' '}
              THIS IS WHAT YOU&apos;LL ACHIEVE
            </p>
          </motion.div>
          <div className='flex flex-col items-center lg:items-start gap-7 max-w-xl'>
            <motion.h3
              ref={ref8}
              variants={animate4}
              initial='initial'
              animate={isInView8 ? 'open' : 'initial'}
              className='text-[20px] text-center lg:text-start lg:text-[60px]   text-white font-bold leading-[1.4em] lg:leading-[1.2em]  '
            >
              A{' '}
              <span className='text-[#0DC8E0]'>
                Niche-Famous
              </span>{' '}
              Personal Brand
            </motion.h3>
            <motion.span
              ref={ref9}
              variants={animate4}
              initial='initial'
              animate={isInView9 ? 'open' : 'initial'}
              className='text-[#c6c7c6] text-[14px] lg:text-[20px] max-w-xs lg:max-w-lg text-center lg:text-start'
            >
              We pride ourselves on our strong set of values
              that guide our actions and decision-making
              processes.
            </motion.span>
          </div>
        </article>
      </section>
    </main>
  );
};
export default Esquemas;
