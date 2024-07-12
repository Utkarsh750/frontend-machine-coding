const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Protecto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Threats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Scan Endpoints
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Create Threat Research
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Submit Sample
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  API Integration
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Pages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All Pages
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      AllPages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true"></a>
              </li>
            </ul>

            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            {/* Login  */}

            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign Up
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="exampleModalLabel"
                    ></h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <input
                      className="form-control me-2"
                      type="text"
                      placeholder="Enter your email"
                      aria-label="Enter Your Password"
                    />
                    <input
                      className="form-control me-2"
                      type="text"
                      placeholder="Enter your first name"
                      aria-label="Login"
                    />
                    <input
                      className="form-control me-2"
                      type="text"
                      placeholder="Enter your last name"
                      aria-label="Login"
                    />
                    <input
                      className="form-control me-2"
                      type="text"
                      placeholder="Enter your email name"
                      aria-label="Login"
                    />
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <h2>Threat Research and Malware Research Platform</h2>
        <h4>We research and MAlware detection solution for you</h4>
      </div>
    </div>
  );
};