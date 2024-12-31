import Contact from './contact';
import { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
import { animate, animate3 } from '../animation/anim';

const Faqs = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = true; // Establece el estado "checked" del input
    }
  }, []);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });

  return (
    <section className='min-h-screen lastBackground w-full p-10 lg:p-20 flex flex-col justify-center items-center gap-10 lg:gap-20'>
      <div className='flex flex-col gap-8 items-center'>
        <motion.div
          ref={ref}
          initial='initial'
          variants={animate}
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
            FAQ&apos;S
          </p>
        </motion.div>
        <motion.h3
          ref={ref2}
          initial='initial'
          variants={animate3}
          animate={isInView2 ? 'open' : 'initial'}
          className='text-white text-[20px] lg:text-[60px] leading-[1.2em] font-bold max-w-2xl text-center'
        >
          Frequently Asked Questions
        </motion.h3>
      </div>
      <div className='max-w-3xl  w-full flex flex-col gap-5'>
        <motion.div
          ref={ref3}
          initial='initial'
          variants={animate3}
          animate={isInView3 ? 'open' : 'initial'}
          className='collapse collapse-plus border py-2 text-white bg-[rgb(19_20_18)] border-[rgb(31_37_14)]'
        >
          <input
            ref={inputRef}
            type='radio'
            name='my-accordion-3'
            className='peer'
            aria-label='What is the Wolf’s Coaching Program?'
          />
          <div className='collapse-title text-base lg:text-xl font-medium peer-checked:text-[#0DC8E0]'>
            What is the Wolf&apos;s Coaching Program?
          </div>
          <div className='collapse-content text-[14px] lg:text-base text-[#c6c7c6]'>
            <p>
              The Wolf&apos;s Coaching Program is a
              transformative growth journey crafted for
              individuals ready to make the leap from
              employee to employer—even if they haven&apos;t
              yet started their own business. Through
              Wolf&apos;s structured, step-by-step approach,
              the program guides aspiring entrepreneurs in
              building and scaling their ventures from the
              ground up. With highly personalized
              consulting, Wolf shares the strategies and
              insights he&apos;s used to develop multiple
              successful enterprises, empowering you to
              transition into a business owner and leader.
              Join the journey and take the first steps
              toward building your own successful business.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref4}
          initial='initial'
          variants={animate3}
          animate={isInView4 ? 'open' : 'initial'}
          className='collapse collapse-plus border py-2 text-white bg-[rgb(19_20_18)] border-[rgb(31_37_14)]'
        >
          <input
            type='radio'
            name='my-accordion-3'
            className='peer'
            aria-label='How long is the program?'
          />
          <div className='collapse-title text-base lg:text-xl font-medium peer-checked:text-[#0DC8E0]'>
            How long is the program?
          </div>
          <div className='collapse-content text-[14px] lg:text-base text-[#c6c7c6]'>
            <p>
              The program is ongoing, but clients typically
              commit for a minimum of one year. The idea is
              to ensure sustained growth and successful
              scaling to reach $60,000+ per month. Each
              client receives personalized support that
              adapts as their business grows.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref5}
          initial='initial'
          variants={animate3}
          animate={isInView5 ? 'open' : 'initial'}
          className='collapse collapse-plus border py-2 text-white bg-[rgb(19_20_18)] border-[rgb(31_37_14)]'
        >
          <input
            type='radio'
            name='my-accordion-3'
            className='peer'
            aria-label='What is the cost of the program?'
          />
          <div className='collapse-title text-base lg:text-xl font-medium peer-checked:text-[#0DC8E0]'>
            What is the cost of the program?
          </div>
          <div className='collapse-content text-[14px] lg:text-base text-[#c6c7c6]'>
            <p>
              The cost of the Wolf&apos;s Coaching Program
              is $14,000 per year. This investment provides
              you with direct access to Wolf, personalized
              coaching, exclusive resources, and
              participation in mastermind events.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref6}
          initial='initial'
          variants={animate3}
          animate={isInView6 ? 'open' : 'initial'}
          className='collapse collapse-plus border py-2 text-white bg-[rgb(19_20_18)] border-[rgb(31_37_14)]'
        >
          <input
            type='radio'
            name='my-accordion-3'
            className='peer'
            aria-label='Does this include 1-on-1 coaching with Wolf?'
          />
          <div className='collapse-title text-base lg:text-xl font-medium peer-checked:text-[#0DC8E0]'>
            Does this include 1-on-1 coaching with Wolf?
          </div>
          <div className='collapse-content text-[14px] lg:text-base text-[#c6c7c6]'>
            <p>
              Yes, the program includes four personalized
              one-on-one coaching sessions with Wolf per
              month, in addition to weekly group calls and
              priority chat access for ongoing guidance.
            </p>
          </div>
        </motion.div>
      </div>
      <Contact />
    </section>
  );
};
export default Faqs;
