import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          Your Brand
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
