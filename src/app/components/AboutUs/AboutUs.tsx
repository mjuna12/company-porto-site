"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { formularBlack } from '@/app/fonts';
import AOS from 'aos';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section
      className="section section-md bg-left-1 text-center text-sm-left relative"
      id="about-me"
    >
      <div className="bg-item overflow-hidden hidden md:flex relative">
        <img
          src="images/bg-pattern-1.jpg"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          alt=""
          className="relative z-0 w-[600px]"
        />
      </div>

      <div className="container relative">
        <div className="row row-30">
          <div className="col-sm-6 ">
            <div className="absolute z-0 top-6 left-6 sm:-top-14 sm:-left-14 w-[200px] h-[200px] bg-[#FDF7F1] opacity-50"></div>
            <div
              className=''
              data-animate=""
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                className="image overflow-hidden relative"
                src="images/image-01-424x491.jpg"
                alt=""
                width="500"
                height="491"
              />
            </div>
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-in"
            data-aos-anchor-placement="center-bottom"
            data-animate=""
          >
          <h2 className="text-decoration font-weight-bolder" style={{fontFamily: formularBlack.style.fontFamily}} >About me</h2>
            <h5 className='text-[20px]'>
              My name is James Adams. I’m a UI/UX &amp; graphic designer. I
              believe that a well-designed product leads a business to success.
            </h5>
            <h5 className='text-[20px] '>
              I love learning how people think and behave, and I leverage
              research to design user-centered products and experiences which
              solve both user and business problems.
            </h5>
            <div className="btn-group-1">
              <a className="btn" style={{ fontSize: '23px', padding: '25px 30px', display: 'inline-block' }} href="#">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
