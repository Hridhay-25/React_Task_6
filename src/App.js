import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="header bg-primary text-white py-5 text-center">
        <h1 className="name">Hridhay</h1>
        <p className="job-title">Web Developer</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate Web Developer with expertise in MongoDB,
            JavaScript, React, Node.js, and ExpressJS. I enjoy creating web
            applications and solving complex problems.
          </p>
        </div>
      </section>

      <section className="contact py-5 bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <p>Email: hridhay.a2021@vistudent.ac.in</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/a-hridhay-188ab326a"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Hridhay-25"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
