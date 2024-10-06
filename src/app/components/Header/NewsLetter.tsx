import React from "react";

interface NewsLetterProps {
  openNewsPopover: boolean;
  newsRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const NewsLetter: React.FC<NewsLetterProps> = ({
  openNewsPopover,
  newsRef,
  className,
}) => {
  return (
    <div
    ref={newsRef}
    className={`fixed top-[62px] lg:top-0 left-0 lg:left-20 flex flex-col justify-center items-center lg:items-start lg:h-[342px] w-full lg:w-[700px] sm:px-24 py-4 transition-all duration-500 bg-white bg-opacity-45 lg:bg-cream drop-shadow-lg lg:drop-shadow-none ${
      openNewsPopover ? "translate-y-0 opacity-100 transition-all duration-500 animate-slideDown" : "-translate-y-[100%] opacity-0 transition-all duration-500"
    } ${className || ''}`}
  >
      <div className="navbar-contact-title h4">Join My Newsletter</div>
      <form
        className="rd-form-inline rd-mailform rd-form  lg:w-full"
        data-form-output="newsletter-navbar"
        data-form-type="subscribe"
        method="post"
        action="components/rd-mailform/rd-mailform.php"
        noValidate
      >
        <div className="form-group flex">
          <input
            className="form-control form-control-sm form-control-has-validation form-control-last-child mb-2"
            type="email"
            name="email"
            placeholder="E-mail"
            data-constraints="@Email @Required"
            id="regula-generated-984968"

          />
          <span className="form-validation"></span>
        </div>
        <button
          className="btn btn-sm btn-primary h-[50px]"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <div
        className="form-output snackbar snackbar-primary"
        id="newsletter-navbar"
      ></div>
    </div>
  );
};

export default NewsLetter;
