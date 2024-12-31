'use client';
import Button from './ButtonGrad';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import {
  animate,
  animate3,
  animateImageUp,
} from '../animation/anim';
import { FaAnglesRight } from 'react-icons/fa6';

const Program = ({ isMobile }) => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const articles = [
    {
      id: 1,
      imgSrc: '/images/IconoPro (9).png',
      imgAlt: 'ASTERISCO',
      title:
        'Four Personalized Coaching Sessions per Month with Wolf',
      description:
        'One-on-one personalized sessions to help you focus on what matters most and give you the exact blueprint to accelerate your success.',
    },
    // Add more articles as needed
    {
      id: 2,
      imgSrc: '/images/IconoPro (7).png',
      imgAlt: 'ASTERISCO',
      title: 'Weekly Group Calls with the Wolf Pack',
      description:
        'Receive insights from Wolf and interact with other high-performing entrepreneurs. Learn from the community and get answers directly from the expert.',
    },
    {
      id: 3,
      imgSrc: '/images/IconoPro (10).png',
      imgAlt: 'ASTERISCO',
      title: 'Priority Premium Chat Access With Wolf',
      description:
        'Exclusive, one-on-one chat access for priority communication and on-the-spot guidance whenever you need it.',
    },
    {
      id: 4,
      imgSrc: '/images/IconoPro (12).png',
      imgAlt: 'ASTERISCO',
      title: 'Step-by-Step Roadmap to $60,000+/Month',
      description:
        'Gain access to over 20 hours of premium content, offering detailed insights into each step to scale your business sustainably.',
    },
    {
      id: 5,
      imgSrc: '/images/IconoPro (1).png',
      imgAlt: 'ASTERISCO',
      title: 'Access to the "Lone Wolf Scaling License"',
      description:
        'The exact tools and systems Wolf used to scale multiple businesses beyond $300,000 per month.',
    },
    {
      id: 6,
      imgSrc: '/images/IconoPro (2).png',
      imgAlt: 'ASTERISCO',
      title: 'Top Talent Recruitment for Your Team',
      description:
        "Get direct access to Wolf's network to recruit the best setters, closers, content specialists, and more to make your business unstoppable.",
    },
    {
      id: 7,
      imgSrc: '/images/IconoPro (11).png',
      imgAlt: 'ASTERISCO',
      title: 'Access to an Exclusive Community',
      description:
        'Join the thriving community of entrepreneurs making between $10,000 and $200,000 per month, share insights, and grow together.',
    },
    {
      id: 8,
      imgSrc: '/images/IconoPro (6).png',
      imgAlt: 'ASTERISCO',
      title: 'Exclusive Discounts for Mastermind Events',
      description:
        'Get access to Growing Mastermind events, held twice annually, to connect with like-minded individuals, share, and learn in person.',
    },
    {
      id: 9,
      imgSrc: '/images/IconoPro (5).png',
      imgAlt: 'ASTERISCO',
      title: 'In-Person 1-on-1 Day with Wolf',
      description:
        'Spend an entire day with Wolf, fully documented and shared across Instagram and YouTube, for the ultimate experience in personalized coaching.',
    },
  ];
  return (
    <section className='seccion1 flex flex-col gap-12 justify-start items-center'>
      <div className='flex flex-col gap-8 items-center '>
        <motion.div
          ref={ref}
          variants={animate}
          initial='initial'
          animate={isInView ? 'open' : ''}
          className='flex items-center w-fit p-[10px] lg:p-3 gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'
        >
          <div className='bg-[#0F2426] flex items-center justify-center h-4 w-4 rounded-sm'>
            <img
              src='/images/Asterix.svg'
              height={'12px'}
              width={'12px'}
              alt='asterisco'
            />
          </div>
          <p className='text-center font-semibold text-[12px] lg:text-[16px]'>
            {' '}
            WHAT YOU&apos;LL RECEIVE
          </p>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={animate3}
          initial='initial'
          animate={isInView2 ? 'open' : ''}
          className='flex flex-col gap-12 items-center'
        >
          <h1 className='text-[20px] text-center lg:text-[60px] max-w-xs lg:max-w-[46rem] leading-[1.4em] lg:leading-[1.2em] font-bold text-white'>
            Deliverables from the Wolf&apos;s Coaching
            Program
          </h1>
        </motion.div>
      </div>
      {isMobile === false ? (
        <motion.div
          ref={ref3}
          initial='initial'
          variants={animateImageUp}
          animate={isInView3 ? 'open' : ''}
          className='grid grid-cols-3 place-items-center gap-5 mt-5'
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className='bg-[rgb(19_20_18)] max-w-sm h-[354px] w-[399px] flex justify-center items-center rounded-xl border-[rgb(31_37_14)] border'
            >
              <div className='flex flex-col p-8 gap-7 items-center min-h-full'>
                <div className='bg-[#141414] flex items-center justify-center h-[56px] border-[rgb(31_37_14)] border w-[56px] rounded-xl'>
                  <img
                    src={article.imgSrc}
                    className='h-7 w-7'
                    alt={article.imgAlt}
                  />
                </div>
                <div className='flex flex-col text-center gap-2'>
                  <h2 className='text-[#fff] text-[22px]'>
                    {article.title}
                  </h2>
                  <p className='text-[#c6c7c6] text-[18px]'>
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      ) : (
        <div className='relative carousel rounded-box w-[80%]'>
          {articles.map((article) => (
            <article
              key={article.id}
              className='bg-[rgb(19_20_18)] carousel-item max-w-sm min-h-[300px] h-full lg:h-[354px] w-full lg:w-[399px] flex justify-center items-center rounded-2xl border-[rgb(31_37_14)] border'
            >
              <div className='flex flex-col p-8 gap-4 items-center min-h-full'>
                <div className='bg-[#141414] flex items-center justify-center h-[56px] border-[rgb(31_37_14)] border w-[56px] rounded-xl'>
                  <img
                    src={article.imgSrc}
                    className='h-7 w-7'
                    alt={article.imgAlt}
                  />
                </div>
                <div className='flex flex-col text-center gap-2'>
                  <h2 className='text-[#fff] text-[16px]'>
                    {article.title}
                  </h2>
                  <p className='text-[#c6c7c6] text-[12px]'>
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
          <button className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#141414] text-[#0DC8E0] rounded-full h-14 w-14 text-base flex items-center justify-center'>
            <FaAnglesRight />
          </button>
        </div>
      )}
      <Button buttonText={'Begin your Journey Now'} />
    </section>
  );
};
export default Program;
