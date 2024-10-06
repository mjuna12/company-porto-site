"use client";
import React from "react";

interface ModalProjectProps {
    onClose: () => void;
}

const ModalProject: React.FC<ModalProjectProps> = ({ onClose }) => {
    return (
        <div
            className="modal modal-project fade text-left"
            id="modal-project"
            role="dialog"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="container">
                        <div className="row row-30 align-items-md-center align-items-xxl-start">
                            <div className="col-md-6">
                                <h2 className="text-decoration">uDesign</h2>
                                <div className="group-1 d-flex flex-wrap align-items-center">
                                    <div className="h5">Client:</div>
                                    <img
                                        src="images/logo-02-187x30.png"
                                        alt=""
                                        width="187"
                                        height="30"
                                    />
                                </div>
                                <h5>
                                    This project combines innovative graphic design and web
                                    development techniques to deliver a stunning result.
                                </h5>
                                <div className="row row-15 row-content-3">
                                    <div className="col-sm-6 col-lg-5">
                                        <ul className="list list-marked h5">
                                            <li className="list-item">Responsive Interface</li>
                                            <li className="list-item">Logo Design</li>
                                            <li className="list-item">Branding</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-5">
                                        <ul className="list list-marked h5">
                                            <li className="list-item">Online Gallery</li>
                                            <li className="list-item">Blog</li>
                                        </ul>
                                    </div>
                                </div>
                                <blockquote className="quote quote-simple">
                                    <q className="quote-text h3">
                                        My goal was to completely rebuild a well-known website for
                                        designers.
                                    </q>
                                </blockquote>
                                <h5>
                                    Working with one of the biggest web technologies enterprises
                                    resulted in a fruitful cooperation. As a result, my project
                                    provided better user experience and simpler interaction with
                                    many vital website elements & pages.
                                </h5>
                            </div>
                            <div className="col-md-6 col-xxl-5 offset-xxl-1">
                                <div
                                    className="owl-carousel owl-carousel-1"
                                    data-owl='{"nav":true}'
                                    data-items="1"
                                    data-sm-items="2"
                                    data-md-items="1"
                                    data-xxl-margin="60"
                                >
                                    <div className="thumbnail thumbnail-1">
                                        <div className="thumbnail-media">
                                            <img
                                                className="thumbnail-img"
                                                src="images/image-04-651x773.jpg"
                                                alt=""
                                                width="651"
                                                height="773"
                                            />
                                            <div className="thumbnail-tags">
                                                <a className="tag" href="#">
                                                    Design
                                                </a>
                                                <a className="tag" href="#">
                                                    Branding
                                                </a>
                                                <a className="tag" href="#">
                                                    Logo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="thumbnail thumbnail-1">
                                        <div className="thumbnail-media">
                                            <img
                                                className="thumbnail-img"
                                                src="images/image-12-651x773.jpg"
                                                alt=""
                                                width="651"
                                                height="773"
                                            />
                                            <div className="thumbnail-tags">
                                                <a className="tag" href="#">
                                                    Design
                                                </a>
                                                <a className="tag" href="#">
                                                    Branding
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="absolute top-3 right-3 text-2xl text-gray-600"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProject;
