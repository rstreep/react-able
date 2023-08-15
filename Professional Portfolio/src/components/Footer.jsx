import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";

export default function Footer() {
  return (
    <footer className="bg-dark py-3 fixed-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <p>
                            <a
                                href="https://github.com/rstreep"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Github
                            </a>{" | "}
                            <a
                                href="mailto:youremail@example.com"
                                className="footer-link"
                            >
                                Email
                            </a>{" | "}
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  );
}
