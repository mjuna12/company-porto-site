"use client";
import React from "react";
import { LiaBoxSolid } from "react-icons/lia";
import { LuSatelliteDish } from "react-icons/lu";
import { BsDroplet } from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Blurb = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
  return (
    <section className="section bg-800 context-dark text-center">
      <div className="row-bordered">
        <div className="row no-gutters">
          <div className="col-sm-4">
            <article
              className="blurb animated fadeIn"
              data-aos="fade-in"
              data-animate=""
            >
              <div className="icon blurb-icon thin-icon-satelite flex justify-center items-center">
                <LiaBoxSolid />
              </div>
              <div className="blurb-title h4">Branding</div>
            </article>
          </div>
          <div className="col-sm-4">
            <article
              className="blurb animated fadeIn"
              data-aos="fade-in"
              data-animate=""
            >
              <div className="icon blurb-icon thin-icon-satelite flex justify-center items-center">
                <BsDroplet />
              </div>
              <div className="blurb-title h4">UI/UX Design</div>
            </article>
          </div>
          <div className="col-sm-4">
            <article
              className="blurb animated fadeIn"
              data-aos="fade-in"
              data-animate=""
            >
              <div className="icon blurb-icon thin-icon-satelite flex justify-center items-center">
                <LuSatelliteDish />
              </div>
              <div className="blurb-title h4">Development</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
