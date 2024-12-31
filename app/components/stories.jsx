import Button from './ButtonGrad';
import Carousel from './carousel';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Stories = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const animate = {
    initial: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  const animate2 = {
    initial: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  return (
    <section
      id='Home'
      className='seccion1 pb-16 lg:pb-32 flex flex-col justify-start items-center'
    >
      <div className='flex flex-col gap-4 lg:gap-8 items-center '>
        <motion.div
          ref={ref}
          initial='initial'
          variants={animate}
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
            SUCCESS STORIES
          </p>
        </motion.div>
        <motion.div
          ref={ref2}
          initial='initial'
          variants={animate2}
          animate={isInView2 ? 'open' : ''}
          className='flex flex-col lg:gap-8 items-center'
        >
          <h2 className='text-[20px] text-center lg:text-6xl max-w-7xl font-bold text-white'>
            Results From Our Clients
          </h2>
          <Carousel />
        </motion.div>
        <Button
          buttonText={'Enroll in the Program Today'}
        />
      </div>
    </section>
  );
};
export default Stories;
