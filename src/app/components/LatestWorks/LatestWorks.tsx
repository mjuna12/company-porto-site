"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import ModalProject from "../ModalProject/ModalProject";
import { formularBlack } from "@/app/fonts";

const LatestWorks = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const works = [
    {
      id: 1,
      image: "images/image-02-432x228.jpg",
      title: "Donut Country",
      tags: ["Design", "Branding"],
    },
    {
      id: 2,
      image: "images/image-03-432x238.jpg",
      title: "Furni",
      tags: ["Design"],
    },
    {
      id: 3,
      image: "images/image-04-432x228.jpg",
      title: "uDesign",
      tags: ["Design", "Branding", "Logo"],
    },
    {
      id: 4,
      image: "images/image-05-432x238.jpg",
      title: "ProKnife",
      tags: ["Design", "Branding"],
    },
    {
      id: 5,
      image: "images/image-06-432x228.jpg",
      title: "Floral Paradise",
      tags: ["Design", "Branding"],
    },
    {
      id: 6,
      image: "images/image-07-432x238.jpg",
      title: "Poultrix",
      tags: ["Design"],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 3;
  const maxIndex = works.length - itemsPerRow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 33.33}%)`,
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <section
      className="section section-md bg-100 overflow-hidden"
      id="portfolio"
    >
      <div className="container">
        <div className="row row-30 row-lg-50 justify-content-md-between align-items-center" style={{ marginLeft: '-10px' }}>
          <div className="col-sm-8 col-md-7 col-xxl-5">
            <h2
              className="text-decoration animated fadeIn"
              data-aos="fade-in"
              data-aos-anchor-placement="center-bottom"
              style={{fontFamily: formularBlack.style.fontFamily}}
            >
              Latest works
            </h2>

            <h5
              className="animated fadeIn"
              data-aos="fade-in"
              data-aos-anchor-placement="center-bottom"
            >
              Check out my recent and popular design &amp; branding projects I
              have worked on.
            </h5>
          </div>

          <div className="col-sm-4 col-md-5 col-xxl-3 text-sm-right text-lg-center animated fadeInRight">
            <div className="separate-owl-nav">
              <button
                type="button"
                className="owl-prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                className="owl-next"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                style={{
                  opacity: currentIndex >= maxIndex ? 0.5 : 1,
                }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="">
            <div
              className=""
              data-aos="fade-in"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="flex" style={slideStyle}>
                {works.map((work, id) => (
                  <div
                    key={id}
                    className="min-w-[33.3%] sm:w-50"
                  >
                    <div className="latest-set pr-3 sm:p-4">
                      <div className="thumbnail-media gap-12">
                        <img
                          className="w-full"
                          src={work.image}
                          alt={work.title}
                        />
                        <div className="thumbnail-tags">
                          {work.tags.map((tag, i) => (
                            <a
                              key={i}
                              className="design-effect"
                              href="#"
                            >
                              {tag}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="pl-8 pt-4">
                        <div className="thumbnail-title h4">
                          <a href="#">{work.title}</a>
                        </div>
                        <button
                          className="thumbnail-link h5"
                          onClick={openModal}
                        >
                          Explore
                        </button>
                        {isModalOpen && <ModalProject onClose={closeModal} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;

