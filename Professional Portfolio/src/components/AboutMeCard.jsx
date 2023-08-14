import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMeCard() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="C:\Users\stree\workspace\react-able\Professional Portfolio\src\assets\images\IMG_3761 (1).jpg"
              alt="Richard Streeper"
              className="rounded-circle img-fluid"
            />
            <div className="col-md-8">
            <h2 className="mb-4">About Me!</h2>
            <p>
              Hello my name is Richard Streeper. I began my coding career in
              March of 2023. I started coding because I have always found myself
              drawn to technology and have always been curious as to how certain
              things work. I believe I will succeed as a coder because I am good
              at problem solving and working in a team or by myself.
            </p>
            <p>
              Coding Technologies I have worked with:
              <li>HTML</li>
              <li>
                CSS and other CSS frameworks such as bulma, materialize, tailwind and
                bootstrap
              </li>
              <li>Javascript and Python</li>
              <li>MySQL and NoSQL databases</li>
              <li>Backend frameworks such as Node.js and Express.js</li>
              <li></li>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
