import React from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <>
      <div id="app">
        <aside>
          <strong>Register</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Username</label>
              <input name="github_username" id="github_username" required />
            </div>
            <div className="input-block">
              <label htmlFor="techs">Techs</label>
              <input name="techs" id="techs" required />
            </div>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
            </div>
            <button type="submit">Save</button>
          </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img
                  src="https://avatars0.githubusercontent.com/u/17129198?s=460&v=4"
                  alt="pedronline"
                />
                <div className="user-info">
                  <strong>PedrOnline</strong>
                  <span>ReactJS, NodeJS</span>
                </div>
              </header>
              <p>
                ( I'm a Polymath ) => Always Looking For Knowledge And New
                Challenges ▪ Self-taught And Motivated Web Developer
              </p>
              <a href="https://github.com/pedronline">Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img
                  src="https://avatars0.githubusercontent.com/u/17129198?s=460&v=4"
                  alt="pedronline"
                />
                <div className="user-info">
                  <strong>PedrOnline</strong>
                  <span>ReactJS, NodeJS</span>
                </div>
              </header>
              <p>
                ( I'm a Polymath ) => Always Looking For Knowledge And New
                Challenges ▪ Self-taught And Motivated Web Developer
              </p>
              <a href="https://github.com/pedronline">Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img
                  src="https://avatars0.githubusercontent.com/u/17129198?s=460&v=4"
                  alt="pedronline"
                />
                <div className="user-info">
                  <strong>PedrOnline</strong>
                  <span>ReactJS, NodeJS</span>
                </div>
              </header>
              <p>
                ( I'm a Polymath ) => Always Looking For Knowledge And New
                Challenges ▪ Self-taught And Motivated Web Developer
              </p>
              <a href="https://github.com/pedronline">Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img
                  src="https://avatars0.githubusercontent.com/u/17129198?s=460&v=4"
                  alt="pedronline"
                />
                <div className="user-info">
                  <strong>PedrOnline</strong>
                  <span>ReactJS, NodeJS</span>
                </div>
              </header>
              <p>
                ( I'm a Polymath ) => Always Looking For Knowledge And New
                Challenges ▪ Self-taught And Motivated Web Developer
              </p>
              <a href="https://github.com/pedronline">Github</a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
