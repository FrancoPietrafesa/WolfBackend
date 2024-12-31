import Button from './ButtonGrad';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { animateImageUp } from '../animation/anim';

const Master = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className='h-[60vh] lg:h-[90vh] w-full mt-5 flex items-center justify-center'>
      <motion.article
        ref={ref}
        variants={animateImageUp}
        initial='initial'
        animate={isInView ? 'open' : 'initial'}
        className='gradiente max-w-[360px] lg:max-w-[952px] py-12 px-7 rounded-xl flex flex-col items-center justify-start gap-10 border border-[rgb(19_20_18)]'
      >
        <div className='flex items-center min-w-max px-3 py-[6px] gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'>
          <div className='bg-[#0F2426] flex items-center justify-center h-4 w-4 rounded-sm'>
            <img
              src='/images/Asterix.svg'
              height={'12px'}
              width={'12px'}
              alt='asterisco'
            />
          </div>
          <p className='text-center font-semibold text-[12px] lg:text-[14px]'>
            {' '}
            INVITATION TO EXCLUSIVE EVENTS
          </p>
        </div>
        <div className='flex flex-col gap-7 items-center'>
          <h1 className='text-[20px] text-center lg:text-[60px] min-w-[280px] lg:max-w-7xl text-white font-bold leading-[1.2em]  '>
            Met Twice A Year With Other Leaders At A
            <span className='text-[#0DC8E0]'>
              {' '}
              Growing Mastermind
            </span>
          </h1>
          <span className='text-[#c6c7c6] text-[10px] lg:text-[16px] max-w-xl text-center'>
            Learn from peers, collaborate on projects, and
            grow your network in exclusive mastermind events
            designed to supercharge your business success.
          </span>
        </div>
        <Button buttonText={'Take the First Step Now'} />
      </motion.article>
    </section>
  );
};
export default Master;
