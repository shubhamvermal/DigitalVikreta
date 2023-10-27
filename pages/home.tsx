import React from 'react';
import Announcement from '../components/announcement/Announcement';
import { H1, H4, H6, Paragraph } from '../components/typography';
import Button from '../components/button/Button';
import GradientText from '../components/typography/GradientText';

const Home = () => {
  const handleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      localStorage.removeItem('theme');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <div className="w-full h-full">
      {/* announcement bar */}
      <Announcement>
        😋 Get 20% Discount for startups. Register now <Button onClick={handleTheme}>toggle theme</Button>
      </Announcement>
      {/* navigation */}
      <div className="w-full h-full bg-[#EAEFFF] p-3 rounded-t-3xl dark:bg-slate-700"></div>
      {/* Body */}
      <div className="w-full h-full bg-[#EAEFFF] p-3 dark:bg-slate-700">
        {/* landing */}
        <div>
          <div>
            <H1>Help your brand grow online through</H1>
            <GradientText text={'creative storytelling'} />
            <Paragraph className="text-[#33333399]">
              Digital Vikreta is a digital marketing agency that specializes in helping FMCG brands create and execute storytelling campaigns that
              drive results.
            </Paragraph>
            {/* <H1>Help your brand grow online through creative storytelling</H1> */}
          </div>
          <div>
            <img alt="" src={'/heroImage.png'} />
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="bg-[#EAEFFF]">
        <svg width="100%" height="160" viewBox="0 0 1100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120.713C0 120.713 201.463 19.311 351.044 24.3699C540.179 30.7666 589.701 79.3954 776.686 108.732C876.55 124.4 954.674 23.644 1053.63 2.96056C1132.34 -13.489 1283 43.9737 1283 43.9737V920H0V120.713Z"
            fill="#D39FFF"
            fill-opacity="0.2"
          ></path>
        </svg>
      </div>
      {/* certifications */}
      <div className="bg-[#d39fff59]">
        <div className="flex flex-col items-center">
          <H6>
            Our team has <GradientText text="Certification of" />
          </H6>
          <div className="flex justify-around items-center h-16 px-3 w-full">
            {[
              '/certs/google_digital.png',
              '/certs/google_anal.png',
              '/certs/Digital_Mar_Assoc.png',
              '/certs/smm.png',
              '/certs/LinkedIn_Learning.png',
            ].map((cert) => (
              <img className="" src={cert} />
            ))}
          </div>
        </div>
        <hr />
        {/* our services */}
        <div className="flex flex-col items-center">
          <H4>
            Our <GradientText text="Service" />
          </H4>

          <div className="flex w-full justify-around px-3">
            {[
              { logo: '/assets/handshake.png', title: 'Brand Consulting' },
              { logo: '/assets/instagram.png', title: 'Social Media Manager' },
              { logo: '/assets/globe.png', title: 'Web & E-Commerce Setup' },
              { logo: '/assets/megaphone.png', title: 'Paid Advertising' },
              { logo: '/assets/idea.png', title: 'Creative Branding' },
            ].map(({ logo, title }: any) => (
              <div className="flex items-center flex-col">
                <div className="w-[145px] h-[145px] flex items-center justify-center bg-gradient-to-b from-purple-300 to-purple-400 rounded-[20px] shadow">
                  <img src={logo} />
                </div>
                <H6>{title}</H6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
