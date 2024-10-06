"use client";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="footer footer-top context-dark bg-800">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-sm-6 col-xxl-6">
            <div className="relative">
              <a className="absolute right-0 top-0" href="#">
                <div className="custom-button p-4 group">
                  <FaFacebookMessenger
                    className="custom-icon sm:m-4"
                    size={50}
                  />
                </div>
              </a>

              <img
                className="image"
                src="images/image-11-787x516.jpg"
                alt=""
                width="787"
                height="516"
              />
            </div>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 col-xxl-4 offset-xxl-0 ml-2">
            <div className="footer-inner">
              <div className="logo">
                <div className="relative">
                  <div className="text-white">
                    <div className=" navbar-panel">
                      <button
                        className="navbar-switch "
                        data-multi-switch=""
                      ></button>
                      <div className="navbar-logo">
                        <a className="navbar-logo-link" href="index.html">
                          <img
                            className=""
                            src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-inverse-228x67.png"
                            alt="Booo"
                            width="150"
                            height="33"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                className="grid grid-cols-3"
                data-aos="fade-in-up"
                data-aos-anchor-placement="bottom-bottom"
                data-form-output="newsletter-sample"
                data-form-type="subscribe"
                method="post"
                action="components/rd-mailform/rd-mailform.php"
                data-animate=""
              >
                <div className="form-group w-full flex items-center col-span-2 mt-[-20px]">
                  <input
                    className="mt-4 form-control form-control-sm form-control-has-validation form-control-last-child h-14 px-3 border "
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    data-constraints="@Email @Required"
                    id="regula-generated-932748"
                  />
                  <span className="form-validation"></span>
                </div>
                <button
                  className="py-3 btn-secondary h-14 mt-[22px] sm:mt-[2px]"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <div
                className="form-output snackbar snackbar-primary"
                id="newsletter-sample"
              ></div>
              <div className="row row-20 row-content">
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5 className="text-xl">E-mail</h5>
                  <p className="text-md">
                    <a href="mailto:#">info@demolink.org</a>
                  </p>
                </div>
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5 className="text-xl">Phone</h5>
                  <p className="text-md">
                    <a href="tel:#">800.567.1234</a>
                  </p>
                </div>
                <div
                  className="col-6 col-sm-4 col-xl-6 animated fadeInUp"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-animate=""
                >
                  <h5 className="text-xl">Address</h5>
                  <p className="text-md">121 King Street, Melbourne , Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer footer-bottom context-dark bg-800">
        <div className="container">
          <div className="row row-20 animated fadeIn" data-animate="">
            <div className="col-md-7 col-xl-6">
              <div className="group-80x15">
                <a className="image-link" href="#">
                  <img
                    className="image brightness-50 hover:brightness-100"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-07-81x20.png"
                    alt=""
                    width="81"
                    height="20"
                  />
                </a>
                <a className="image-link" href="#">
                  <img
                    className="image brightness-50 hover:brightness-100"
                    src="https://ld-wt73.template-help.com/wt_prod-29297/images/logo-08-102x20.png"
                    alt=""
                    width="102"
                    height="20"
                  />
                </a>
                <a className="" href="#">
                  <img
                    className="max-sm:mt-3 max-sm:mb-3 brightness-50 hover:brightness-100 transition-all duration-200 ease-in-out"
                    src="images/logo-09-98x27.png"
                    alt=""
                    width="98"
                    height="27"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-xl-6">
              <p className="rights">
                <span>© 2020&nbsp;</span>
                <span>Booo</span>
                <span>. All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
