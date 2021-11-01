import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sidebar center align">
        <div className="centered mt-20" style={{ width: "30px" }}>
          <Link to="/">
            <svg style={{ fill: "white" }} viewBox="0 0 100 100">
              <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
            </svg>
          </Link>
        </div>
        <div className="buttons small shadowless dark vertical mt-20">
          <button className="button borderless">
            <i className="material-icons">group_work</i>
          </button>
          <button className="button borderless">
            <i className="material-icons">verified_user</i>
          </button>
          <div className="dropdown right">
            <a tabindex="0" className="button toggle borderless">
              <i className="material-icons">settings</i>
            </a>
            <ul className="menu">
              <li className="item">
                <Link to="/">Dropdown 1</Link>
              </li>
              <li className="item">
                <Link to="/">Dropdown 2</Link>
              </li>
              <li className="item">
                <Link to="/">Dropdown 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="navbar shadowed light mini">
          <div className="container">
            {/* <!-- responsive hamburger menu --> */}
            <input type="checkbox" id="burger" />
            <label for="burger" className="burger"></label>
            {/* <!-- /responsive hamburger menu--> */}

            <section className="links">
              <div className="section">
                <div className="buttons mini">
                  <div className="dropdown bottom left">
                    <a href="#n" tabindex="0" className="button toggle">
                      <span className="material-icons mr-5 color-primary">
                        drafts
                      </span>{" "}
                      Example{" "}
                      <span className="material-icons ml-5">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <ul className="menu">
                      <li className="item">
                        <Link to="/">Dropdown 1</Link>
                      </li>
                      <li className="item">
                        <Link to="/">Dropdown 2</Link>
                      </li>
                      <li className="item">
                        <Link to="/">Dropdown 3</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form small">
                  <div className="item">
                    <div className="group">
                      <input type="text" placeholder="query..." />
                      <button className="dark button">
                        <i className="material-icons">search</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="buttons">
                  <div className="dropdown bottom right">
                    <a
                      href="#m"
                      tabindex="0"
                      className="button toggle small borderless"
                    >
                      <i className="material-icons mr-5">
                        notifications_active
                      </i>{" "}
                      Example{" "}
                      <span className="material-icons ml-5">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div className="menu">
                      <div className="item">
                        <Link to="/">Lorem ipsum dolor sit amet.</Link>
                      </div>
                      <div className="item">
                        <Link to="/">Pri decore consetetur complectitur.</Link>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown bottom right">
                    <a
                      href="#p"
                      tabindex="0"
                      className="button toggle borderless small"
                    >
                      <i className="material-icons mr-5 color-error">
                        account_circle
                      </i>{" "}
                      User{" "}
                      <span className="material-icons ml-5">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div className="menu">
                      <div className="item">
                        <Link to="/">Account</Link>
                      </div>
                      <div className="item">
                        <Link to="/">Logout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
