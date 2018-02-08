import React, { Component } from "react";
import Api from "../utils/Api";

//import components
import Header from "./Header";
import Feed from "./Feed";

//import images
import Walibi from "../images/Walibi.jpg";
import Oxxio from "../images/Oxxio.png";
import Florensis from "../images/Florensis.jpg";
import FeedBackground from "../images/Feed_bg.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "Walibi",
      projectImage: Walibi,
      instagramFeed: []
    };
  }

  /*fetching api data */
  componentWillMount() {
    Api.media()
      .then(res => {
        this.setState({ instagramFeed: res });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  /*slider method */
  nextProject = direction => {
    let projectName = ["Walibi", "Oxxio", "Florensis"];
    let projectImage = [Walibi, Oxxio, Florensis];
    let currentIndex = projectName.indexOf(this.state.projectName);
    currentIndex === 0
      ? (currentIndex = projectName.length - currentIndex)
      : "";
    direction === "left" ? currentIndex-- : currentIndex++;
    let number = currentIndex % projectName.length;

    this.setState({
      projectName: projectName[number],
      projectImage: projectImage[number]
    });
  };

  /*scroll method */
  scrollDown = () => {
    document.getElementById("about").scrollIntoView();
  };

  render() {
    const { projectName, projectImage, instagramFeed } = this.state;
    const background = {
      backgroundImage: `url(${FeedBackground})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div>
        <Header
          nextProject={this.nextProject}
          projectName={projectName}
          projectImage={projectImage}
          scrollDown={this.scrollDown}
        />
        <div className="about" id="about">
          <h4 className="about-title">WE ARE TAMTAM</h4>
          <p className="about-text">
            Tam Tam is a full service digital agency focussing on Dutch Digital
            Service Design. We combine strategy, design, technology and
            interaction to make the digital interactions between company and
            customer valuable and memorable. We work for awesome brands with a
            team of 120 digitals from our office in Amsterdam. Making great work
            and having a blast doing it. That’s what we believe in.
          </p>
        </div>
        <div style={background} className="feed-container">
          <div className="title-feed-container">
            <a
              className="instagram-link"
              href="https://www.instagram.com/tamtamnl/"
              target="_blank"
            >
              <h2 className="title-feed">follow us on instagram</h2>
              <h4 className="link-feed">@ tamtamnl</h4>
            </a>
          </div>
          <div className="feeds-container">
            {instagramFeed.map((stream, index) => {
              return (
                <Feed
                  stream={stream.display_src}
                  text={stream.caption}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
