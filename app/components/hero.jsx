import Button from './ButtonGrad';
import { useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { animateHeroVideo } from '../animation/anim';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [iframeActive, setIframeActive] = useState(false);
  const handleIframeClick = () => {
    setIframeActive(true);
    setTimeout(() => setIframeActive(false), 2500);
  }; // Adjust delay as needed };
  return (
    <section
      id='Home'
      className='seccion1 background lg:min-h-screen flex flex-col p-16 lg:p-32 justify-start items-center'
    >
      <div className='flex flex-col gap-7 lg:gap-10 items-center '>
        <div className='fade-in flex items-center w-fit px-3 py-[5px] gap-2 border text-[#0DC8E0] bg-[rgb(19_20_18)] border-[rgb(31_37_14)] rounded-full'>
          <div className=' bg-[#0F2426] flex items-center justify-center h-2 lg:h-4 w-2 lg:w-4 rounded-sm'>
            <img
              src='/images/Asterix.svg'
              width='100'
              height='50'
              className='h-2 lg:h-3 w-auto'
            />
          </div>
          <p className='text-center font-semibold text-[10px] lg:text-[14px]'>
            {' '}
            For Employees wanting to become Employers
          </p>
        </div>
        <div className='flex flex-col gap-6 lg:gap-12 items-center'>
          <h1 className='fade-in2 text-[20px] text-center lg:text-[60px] max-w-[79rem] text-white leading-[1.2em] font-semibold'>
            Discover How to Unleash The Wolf Within and
            Scale Your Business to{' '}
            <span className='text-[#0DC8E0]'>
              $60,000+/Month
            </span>{' '}
            With My{' '}
            <span className='text-[#0DC8E0]'>
              1-On-1 Coaching
            </span>
          </h1>
          <span className='fade-in3 text-[#c6c7c6] text-[10px] max-w-5xl lg:text-[16px] text-center'>
            Without wasting thousands on ineffective ads,
            overcomplicating launches, or working 24/7 just
            to break even using Wolf strategy of doing this
            while being employed to maximise your success.
          </span>
          <motion.div
            ref={ref}
            variants={animateHeroVideo}
            initial='initial'
            animate={isInView ? 'open' : 'initial'}
            className='wrapper mt-5'
            onClick={handleIframeClick}
          >
            <iframe
              width='1031'
              height='737'
              src='https://player.vimeo.com/video/1033127737?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              className={`rounded-3xl ${
                iframeActive
                  ? 'pointer-events-auto'
                  : 'pointer-events-none'
              }`}
              allowFullScreen
              loading='lazy'
            />
          </motion.div>
        </div>
        <Button buttonText={'Join the Program Now'} />
      </div>
    </section>
  );
};
export default Hero;
