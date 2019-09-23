import React, { Fragment, Component } from "react";

import { Grid, Row, Col } from "react-flexbox-grid";

import styles from "./Home.module.scss";

//components

import Pane from "../../components/Pane/Pane";

import Section from "../../components/Section/Section";

import Avatar from "../../components/Avatar/Avatar";

import Title from "../../components/Title/Title";

import Paragraph from "../../components/Paragraph/Paragraph";

import Overlay from "../../components/overlay/Overlay";

import Image from "../../components/Image/Image";

//media
import francisco from "../../images/francisco.jfif";
import claudio from "../../images/claudio.jfif";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    /*

    No longer needed. Used to alert user that pane component projects were under the works

    const contruct = e => {
      let target = e.target.id;
      alert(
        `The ${target} app is currently under development. Thank you for your patients.`
      );
    };
    const nails = document.getElementById("nails");
    const weather = document.getElementById("weather");
    nails.addEventListener("click", contruct);
    weather.addEventListener("click", contruct);
    */
  }

  render() {
    return (
      <Fragment>
        <div className={`${styles.home}`}>
          <Section pad="210px 0 380px 0" className={`${styles.city}`}>
            <Grid>
              <Row center="xs">
                <Col md={12} xs={11}>
                  <Row center="xs">
                    <Col xs={12}>
                      <Title size="lg">Front-end Developer </Title>
                      <br />

                      <Title size="sm">
                        I design and code beautifully simple things, and I love
                        what I do.
                      </Title>
                    </Col>

                    <Col xs={12}>
                      <Row center="xs">
                        <Avatar alt="Avatar of author. Has red hair and pale skin with freckles." />
                        <div className={`${styles.removeBorder}`} />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>

          <Section
            mar="-1px 0 0 0"
            pad="100px 0 220px 0"
            color="#fff"
            backColor="#1a73e8"
          >
            <Grid>
              <Row center="xs">
                <Col md={12} xs={11}>
                  <Row center="xs">
                    <Col lg={8} xs={12}>
                      <Title size="md">Hi, I’m Roman. Nice to meet you.</Title>

                      <Paragraph>
                        I'm an IT Specialist based in Jacksonville, FL. I have a
                        passion for web development and enjoy turning complex
                        problems into simple solutions. When I'm not coding or
                        pushing pixels, you'll find me workingout or playing
                        around with and learning about new technologies.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <Row center="xs">
                <Col lg={12} md={10} xs={11}>
                  <Row center="xs">
                    <Col lg={4} xs={12}>
                      <Overlay section="white" position="first">
                        <Title size="sm">Front-end Developer</Title>

                        <Paragraph size="md" extra="mar">
                          I like to code things from scratch, and enjoy bringing
                          ideas to life in the browser.
                        </Paragraph>

                        <Paragraph size="md" color="colored">
                          Languages I speak:
                        </Paragraph>

                        <Paragraph size="md" extra="mar">
                          HTML, JS, SCSS, CSS, Sass
                        </Paragraph>

                        <Paragraph size="md" color="colored">
                          Dev Tools:
                        </Paragraph>

                        <Paragraph size="md">
                          REACT
                          <br />
                          NODE.js
                          <br />
                          Bootstrap
                          <br />
                          MS Code
                          <br />
                          Codepen
                          <br />
                          Github
                          <br />
                          WordPress
                          <br />
                          Terminal
                        </Paragraph>
                      </Overlay>
                    </Col>

                    <Col lg={4} xs={12}>
                      <Overlay section="white" position="second">
                        <Title size="sm">IT Support</Title>

                        <Paragraph size="md" extra="mar">
                          I create effective solutions with a drive to deliver
                          work that exceeds expectations.
                        </Paragraph>

                        <Paragraph size="md" color="colored">
                          Technologies I support:
                        </Paragraph>

                        <Paragraph size="md" extra="mar">
                          MacOS, Windows, Linux, Mobile
                        </Paragraph>

                        <Paragraph size="md" color="colored">
                          IT Training:
                        </Paragraph>

                        <Paragraph size="md">
                          CompTIA a+
                          <br />
                          CompTIA Network+
                          <br />
                          Office 365
                          <br />
                          Migrations
                          <br />
                          Active Directory
                          <br />
                          Remote Support
                          <br />
                          Ticket Systems
                          <br />
                          Service Desk
                        </Paragraph>
                      </Overlay>
                    </Col>

                    <Col lg={4} xs={12}>
                      <Overlay section="white" position="third">
                        <Title size="sm">Full-Stack Developer</Title>

                        <Paragraph size="md" extra="mar">
                          I have the elemntal skills needed to launch a full
                          scale interactive web appliccation.
                        </Paragraph>

                        <Paragraph size="md" color="colored">
                          Languages I speak:
                        </Paragraph>

                        <Paragraph size="md" extra="mar">
                          MERN Stack, JavaScript
                        </Paragraph>

                        <Paragraph size="md" color="colored">
                          Dev Tools:
                        </Paragraph>

                        <Paragraph size="md">
                          HTTP, HTTPS, APIs
                          <br />
                          MongoDB
                          <br />
                          Express
                          <br />
                          React
                          <br />
                          NODE.js
                          <br />
                          Github
                          <br />
                          NPM
                          <br />
                          Heroku
                        </Paragraph>
                      </Overlay>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>

          <Section borderBottom="1px solid #E6ECF8" pad="50px 0 100px 0">
            <Grid>
              <Row center="xs">
                <Col lg={12} md={10} xs={11}>
                  <Row>
                    <Col xs={12}>
                      <Title size="md">My Recent Work</Title>

                      <Paragraph>
                        Here are a few recent design projects. Want to see more?
                        <a href="mailto:rrojaski@gmail.com"> Email me</a>.
                      </Paragraph>
                    </Col>

                    <Col lg={4} xs={12}>
                      <Pane
                        target="_blank"
                        color="dark"
                        href="https://www.anime-shop-online.com"
                        type="anime"
                        desc="An e-comerse anime website shipping to over 180 Countries"
                      />
                    </Col>

                    <Col lg={4} xs={12}>
                      <Pane
                        target="_blank"
                        color="dark"
                        href="https://stupefied-kepler-3384a4.netlify.com"
                        type="css"
                        desc="This visually appealing website showcases advanced css designs"
                      />
                    </Col>

                    <Col lg={4} xs={12}>
                      <Pane
                        target="_self"
                        href="https://welcome-0906.netlify.com"
                        color="dark"
                        type="welcome"
                        desc="An ineractive welcome screen"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section pad="50px 0 100px 0">
            <Grid>
              <Row center="xs">
                <Col md={12} xs={12}>
                  <Col xs={12}>
                    <Title size="md">Testimonials</Title>
                    <Paragraph>
                      People I've worked with have said some nice things...
                    </Paragraph>
                    <br />
                    <br />
                    <br />
                  </Col>
                  <Col xs={12}>
                    <Row center="xs">
                      <Col lg={8} xs={11}>
                        <CarouselProvider
                          naturalSlideWidth={10}
                          naturalSlideHeight={2}
                          totalSlides={2}
                          touchEnabled={true}
                        >
                          <Slider>
                            <Slide className={`${styles.slide}`} index={0}>
                              <Image
                                sizeX="100px"
                                radius="50%"
                                src={francisco}
                              />
                              <br />
                              <br />
                              <br />
                              <Paragraph>
                                “This guy really knows his stuff. I've had Roman
                                complete work for me and he's been able to
                                provide quality work on time.”
                              </Paragraph>

                              <Title size="name">Francisco Pena</Title>
                              <Paragraph size="sm">
                                Senior Frontend Developer, Nami ML
                              </Paragraph>
                            </Slide>
                            <Slide index={1}>
                              <Image sizeX="100px" radius="50%" src={claudio} />
                              <br />
                              <br />
                              <br />
                              <Paragraph>
                                “Roman was a real pleasure to work with and we
                                look forward to working with him again. He’s
                                definitely the kind of Web Developer you can
                                trust with a project from start to finish.”
                              </Paragraph>

                              <Title size="name">Claudio Rojas</Title>
                              <Paragraph size="sm">
                                Web Developer, LaGuardia Community College
                              </Paragraph>
                            </Slide>
                          </Slider>

                          <Dot className={`${styles.dot}`} slide={0} />
                          <Dot className={`${styles.dot}`} slide={1} />
                        </CarouselProvider>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Row>
            </Grid>
          </Section>
        </div>
      </Fragment>
    );
  }
}

export default Home;
