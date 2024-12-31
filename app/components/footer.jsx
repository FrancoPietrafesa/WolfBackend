const Footer = () => {
  return (
    <main className='flex h-[409px] flex-col items-center justify-center bg-black'>
      <section className='w-full lg:w-[70%] px-10'>
        <article className='flex flex-col gap-10 lg:gap-20 '>
          <div className='flex lg:flex-row flex-col items-start  gap-6 lg:items-center justify-between '>
            <div className='flex flex-col h-fit items-start gap-3 lg:gap-6 justify-center'>
              <img
                src='https://framerusercontent.com/images/zmqLodalWdgr1I625armPSY7sw.png'
                alt='Unleash The Wolf Within'
                width='100'
                height='50'
                className='h-7 w-auto'
              />
              <span className='text-[#0DC8E0] font-bold text-[16px]'>
                For Employees Wanting To Become Employers
              </span>
              <div className='flex gap-2'>
                <a
                  href='https://wolfmentor.kartra.com/calendar/V4TH9lytKmYf'
                  target='_blank'
                  className='bg-[#393938] h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <img
                    height={'20px'}
                    width={'20px'}
                    src='/images/attach-svgrepo-com.svg'
                    alt='facebook'
                  />
                </a>
                <a
                  href='https://twitter.com/wolf_WolfysBar'
                  target='_blank'
                  className='bg-[#393938] h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <img
                    height={'16px'}
                    width={'16px'}
                    src='/images/logo.svg'
                    alt='facebook'
                  />
                </a>
                <a
                  href='https://www.instagram.com/wolf_mentord'
                  target='_blank'
                  className='bg-[#393938] h-8 w-8 flex items-center justify-center rounded-full'
                >
                  <img
                    height={'20px'}
                    width={'20px'}
                    src='/images/instagram-svgrepo-com.svg'
                    alt='facebook'
                  />
                </a>
              </div>
            </div>
            <div className='flex flex-col gap-1 lg:gap-3'>
              <h3 className='text-[#0DC8E0] font-bold text-[20px]'>
                Contact Us
              </h3>
              <span className='text-white text-[16px]'>
                wolf@wolfysbar.com
              </span>
              <span className='text-white text-[16px]'>
                +44 7713 357099
              </span>
              <span className='text-white text-[16px]'>
                Unit Q, Nyland Court, Wolfys Bar, Bailey St,
                London SE8 5EY, United Kingdom
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='w-full h-[1px] bg-[#393938]'></div>
            <span className='text-white'>
              © 2024 RekonMedia. All rights reserved.
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};
export default Footer;
