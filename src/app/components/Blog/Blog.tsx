"use client";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import 'animate.css';
import AOS from 'aos';
import { formularBlack } from "@/app/fonts";

const blogPosts = [
  {
    id: 1,
    date: "April 25, 2020",
    title: "Why Are All Sites Optimizing For Smartphones?",
    text: "Sites were developed for desktop devices at first but as the worldwide smartphone usage rate increased so did the site developers look for...",
    imgSrc: "images/image-08-287x239.jpg",
    imgAlt: "Smartphone Optimization",
    imgWidth: 287,
    imgHeight: 239,
    link: "#",
    animation: "fade-right",
  },
  {
    id: 2,
    date: "April 25, 2020",
    title: "How to Start Promoting Your Own Blog",
    text: "Promoting your blog is sometimes more difficult than creating it at all. But it is still wholly possible without paid advertisement or being a celebrity...",
    imgSrc: "images/image-09-287x239.jpg",
    imgAlt: "Blog Promotion",
    imgWidth: 287,
    imgHeight: 239,
    link: "#",
    animation: "fade-left",
  },
  {
    id: 3,
    date: "April 25, 2020",
    title: "25 Steps to Make Sure that Your Website is Pleasant to Use",
    text: "Using the internet means browsing various websites for important information. Or, if you’re one of those people who like to browse YouTube...",
    imgSrc: "images/image-10-287x239.jpg",
    imgAlt: "Website Usability",
    imgWidth: 287,
    imgHeight: 239,
    link: "#",
    animation: "fade-right",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section className="section section-md bg-right" id="blog">
      <div className="bg-item-1 overflow-hidden hidden md:flex">
        <img className="h-[82rem]" src="images/bg-pattern-1.jpg" alt="Background pattern" />
      </div>
      <div className="bg-item-2 bg-secondary"></div>
      <div className="container text-left">
        <h2
          className="text-decoration text-left text-sm-left animated fadeIn"
          data-aos="fade-in"
          data-aos-anchor-placement="bottom-bottom"
          style={{fontFamily: formularBlack.style.fontFamily}}
        >
          My Blog
        </h2>
        <div className="post-container">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="post post-side"
              data-aos={post.animation}
              data-aos-anchor-placement="bottom-bottom"
            >
              <a className="post-media" href={post.link}>
                <img
                  className="post-img"
                  src={post.imgSrc}
                  alt={post.imgAlt}
                  width={post.imgWidth}
                  height={post.imgHeight}
                />
              </a>
              <div className="post-body">
                <div className="post-meta">
                  <div className="post-meta-item">
                    <div className="post-date h5">{post.date}</div>
                  </div>
                </div>
                <div className="post-title h4">
                  <a href={post.link}>{post.title}</a>
                </div>
                <div className="post-text">
                  {post.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
