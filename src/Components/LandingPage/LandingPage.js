import React from "react";
import "../../Styling/LandingPage/style.css";
import logo from "../../Images/camera.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="page-body">
        <header className="showcase">
          <div className="container showcase-inner">
            <div>
              <h1 className="welcome">Welcome to Canon Genius</h1>
            </div>

            <p className="lets">Smile!</p>
            <a href="/main" className="landingPage-btn">
              Enter
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default LandingPage;
