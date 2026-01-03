// src/App.jsx
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="main">
      {/* TOP NAV */}
      <div className="top-nav">
        <div className="logo" />
        <div className="side-text">
          <h1>CHRIS ART</h1>
          <h1>Getida</h1>
          <h2>IT Student</h2>
        </div>

        <div className="link">
          <ul>
            <li>
              <a href="#about">
                <b>ABOUT</b>
              </a>
            </li>
            <li>
              <a href="#work">
                <b>WORK</b>
              </a>
            </li>
            <li>
              <a href="#blog">
                <b>BLOG</b>
              </a>
            </li>
            <li>
              <a href="#contact">
                <b>CONTACT</b>
              </a>
            </li>
            <div className="topnavcta">
              <p>Hire-Me</p>
            </div>
          </ul>
        </div>
      </div>

      {/* HERO / BANNER */}
      <div className="banner">
        <div className="side-info">
          <h1>Hello, I'm </h1>
          <h2>Chris Art Getida</h2>
          <h3>App Designer &amp; Web Developer</h3>

          <div className="side-icons">
            <img src="/img/Be.png" width="41" height="41" alt="Behance" />
            <img src="/img/drib.png" width="41" alt="Dribbble" />
            <img src="/img/fb.png" width="41" alt="Facebook" />
            <img src="/img/in.png" width="41" alt="LinkedIn" />
            <img src="/img/insta.png" width="41" alt="Instagram" />
            <img src="/img/twitt.png" width="41" alt="Twitter" />
          </div>

          <div className="banner-ctabtn">
            <a href="#contact">
              <div className="bcta">
                <p>Hire Me</p>
              </div>
            </a>
            <a href="#resume">
              <div className="bcta1">
                <p>See My Resume</p>
              </div>
            </a>
          </div>
        </div>

        <div className="me" />
      </div>

      {/* MINI GALLERY NAV + WORKS */}
      <div className="mini-gallery" id="work">
        <div className="mini-nav">
          <ul>
            <li>
              <a href="#work">All</a>
            </li>
            <li>
              <a href="#work">Apps</a>
            </li>
            <li>
              <a href="#work">Website</a>
            </li>
            <li>
              <a href="#work">Interactions</a>
            </li>
          </ul>
        </div>

        <div className="works">
          <div className="work-items">
            <div className="wimg1" />
            <div className="box">
              <h1>Web Design</h1>
              <h2>Header Desing</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg2" />
            <div className="box">
              <h1>Web Design</h1>
              <h2>GoldmanSuchs Web</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg3" />
            <div className="box">
              <h1>Web Design</h1>
              <h2>Header Desing 2</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg4" />
            <div className="box">
              <h1>Web Design</h1>
              <h2>Web Banner</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg5" />
            <div className="box">
              <h1>Graphic Design</h1>
              <h2>Glossy Buttons</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg6" />
            <div className="box">
              <h1>JS Project</h1>
              <h2>Grading System</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg7" />
            <div className="box">
              <h1>Graphic Design</h1>
              <h2>Personal logo</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg8" />
            <div className="box">
              <h1>Web Design</h1>
              <h2>Center Logo</h2>
              <h3>2022</h3>
            </div>
          </div>

          <div className="work-items">
            <div className="wimg9" />
            <div className="box">
              <h1>Web Design</h1>
              <h2>Left Side Logo</h2>
              <h3>2022</h3>
            </div>
          </div>
        </div>

        <div className="gallery-cta">
          <p>Load More Work</p>
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="about-me" id="about">
        <div className="side-images" />
        <div className="rside-info">
          <h1>ABOUT ME</h1>
          <h2>WHO AM I</h2>
          <p>
            Hello there! I'm Chris Art, a web developer and app designer with a
            passion for creating
            <br />
            beautiful and functional digital experiences. With [Number] years of
            experience in the industry, I've
            <br />
            had the pleasure of working on a variety of projects for clients
            ranging from small startups to large corporations.
            <br />
            <br />
            My approach to design is all about finding the perfect balance
            between aesthetics and usability.
            <br />
            I believe that a great design should not only look good, but also
            enhance the user's experience
            <br />
            and make their interaction with the product as seamless as possible.
          </p>

          <div className="Acta1">
            <p>HIRE ME</p>
          </div>
          <div className="Acta2">
            <p>SEE MY RESUME</p>
          </div>
        </div>
      </div>

      {/* QUOTE STRIP */}
      <div className="contentbox">
        <div className="ctext">
          <p>
            "Professional web developers and app designers don't just build
            digital products,
            <br />
            they craft intuitive and engaging experiences that bring ideas to
            life and inspire
            <br />
            users to connect with the world in new ways."
          </p>
        </div>
      </div>

      {/* READ ME SECTION */}
      <div className="readme" id="blog">
        <div className="headline">
          <h1>READ ME</h1>
          <p>Sometimes i write something smart</p>
        </div>

        <div className="Rmainbox1">
          <div className="Rbox1" />
          <div className="Rboxcon1">
            <h1>MY BEST APP DESIGN</h1>
            <h2>App Design</h2>
            <q>
              my most impressive and innovative work in mobile app design,
              highlighting my skills in user experience, interface design, and
              overall creativity. Through this project, I aim to demonstrate my
              ability to create engaging and intuitive designs that enhance the
              user's experience.
            </q>
            <div className="Rcta">
              <p>Read more</p>
            </div>
          </div>
        </div>

        <div className="Rmainbox2">
          <div className="Rbox2" />
          <div className="Rboxcon2">
            <h1>BEST WEB DESGIN</h1>
            <h2>CATEGORY</h2>
            <q>
              my proficiency in creating visually appealing layouts with optimal
              user experience. By displaying my mastery of typography, color
              theory, and layout design, I aim to demonstrate my ability to
              create outstanding web designs that meet clients' needs and exceed
              their expectations.
            </q>
            <div className="Rcta">
              <p>Read more</p>
            </div>
          </div>
        </div>

        <div className="Rmainbox3">
          <div className="Rbox3" />
          <div className="Rboxcon3">
            <h1>MY BEST JS WORKS</h1>
            <h2>CATEGORY</h2>
            <q>
              my top JavaScript projects that highlight my proficiency in
              creating interactive and dynamic web applications. Through this
              portfolio, I aim to demonstrate my expertise in various JS
              libraries and frameworks and how I utilize them to develop
              responsive, scalable, and efficient applications.
            </q>
            <div className="Rcta">
              <p>Read more</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footermain">
          <div className="text">
            <h1>All Rights Reserv in 2023</h1>
          </div>

          <div className="icons">
            <img src="/img/Activity.png" alt="Social icons" />
          </div>

          <div className="footernav">
            <ul>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <div className="fcta">
                  <p>Hire Me</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
