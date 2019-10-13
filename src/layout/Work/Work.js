import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { TimelineMax, TweenLite } from "gsap";
import ScrollMagic from "scrollmagic";
import styles from "./Work.module.scss";

//components
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Cert from "../../components/Cert/Cert";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import Globe from "../../components/Globe/Globe";
import Pane from "../../components/Pane/Pane";

//media
import animeCover from "../../images/animeCover.png";
import animeChart from "../../images/anichart.PNG";
import anilistmp4 from "../../images/anilist.mp4";
import anilistwebm from "../../images/anilist.webm";

class Work extends Component {
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
    //fix animation trigger

    let controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();

    tl.from("#fundamentals", 1, { right: "300px", opacity: "0" });
    tl.from("#aplus", 1, { right: "150px", opacity: "0" }).delay(1);
    tl.from("#netplus", 1, { right: "150px", opacity: "0" }).delay(2);

    let scene = new ScrollMagic.Scene({
      triggerElement: "#fundamentals"
    })
      .setTween(tl)
      .addTo(controller);
  }
  render() {
    return (
      <Fragment>
        <Section
          pos="bottom"
          //backImage="url(http://pluspng.com/img-png/wave-background-png-blue-moving-flowing-abstract-waves-on-white-background-blurred-smooth-seamless-loop-design-video-animation-1920x1080-motion-background-videoblocks-1920.png)"
          pad="220px 0"
        >
          <Grid>
            <Row center="xs">
              <Col>
                <Title size="work">“Out of clutter, find simplicity.”</Title>
                <Paragraph size="lg">― Albert Einstein</Paragraph>
                {/*

                  Removed globe becasue of design and cross-platform compatability

                <Globe />
                */}
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section
          className="border"
          backColor="rgb(213, 3, 28)"
          color="white"
          pad="80px 0"
        >
          <Grid>
            <Row center="xs">
              <Col lg={12} xs={11}>
                <Title size="lg">Anime Shop Online</Title>
                <Image
                  sizeX="80%"
                  mar="10px auto 40px auto"
                  display="block"
                  src={animeCover}
                />
                <Paragraph>
                  Anime Fans Love Us! We offer best service and great prices on
                  Anime Products such as Clothes, Shoes and Accessories.
                  Shipping to 185 Countries Our Anime Store operates worldwide
                  and you can enjoy free delivery of all your Anime orders. 100%
                  Safe Payment Buy Anime Products with confidence using the
                  world’s most popular and secure payment methods.
                </Paragraph>
                <br />
                <br />
                <br />
                <Button path="https://www.anime-shop-online.com/" type="work">
                  Visit Site
                </Button>
              </Col>
            </Row>
          </Grid>
        </Section>
        {/*
        @info   Removed to promote author as software engineer exclusively

        <Section id="certs" backColor="#e42518" color="white" pad="100px 0">
          <Grid>
            <Row center="xs">
              <Col xs={12}>
                <Title size="lg">IT Certifications</Title>
              </Col>
              <Col xs={12}>
                <Cert
                  ref={el => (this.certItem1 = el)}
                  id="fundamentals"
                  name="fundamentals"
                  title="CompTIA IT Fundamentals"
                  desc="IT Fundamentals covers a range of IT topics and provides a solid grounding in the technology concepts and practices organizations use today."
                  href="https://certification.comptia.org/certifications/it-fundamentals"
                />
                <Cert
                  ref={el => (this.certItem2 = el)}
                  id="aplus"
                  name="aplus"
                  title="CompTIA A+"
                  desc="A+ is the starting point for a career in IT. The performance-based exams certify foundational IT skills across a variety of devices and operating systems."
                  href="https://certification.comptia.org/certifications/a"
                />
                <Cert
                  ref={el => (this.certItem3 = el)}
                  id="netplus"
                  name="netplus"
                  title="CompTIA Network+"
                  desc="Network+ certifies the essential skills needed to confidently design, configure, manage and troubleshoot any wired and wireless devices."
                  href="https://certification.comptia.org/certifications/network"
                />
              </Col>

              <Col xs={12}>
                <br />
                <br />
                <br />
                <Paragraph>
                  I currently hold multiple IT certifications and am experienced
                  in a wide variety of IT roles with a track record in system
                  implementation, project management, and network design.
                </Paragraph>
              </Col>
            </Row>
          </Grid>
        </Section>
        */}
        <Section
          className="border"
          backColor="rgb(49, 53, 91)"
          color="white"
          pad="80px 0"
        >
          <Grid>
            <Row center="xs">
              <Col lg={12} xs={11}>
                <Title size="lg">AniList</Title>
                <video
                  className={styles.work__video}
                  loop="loop"
                  autoplay="autoplay"
                  muted="muted"
                >
                  <source src={anilistwebm} type="video/webm"></source>

                  <source src={anilistmp4} type="video/mp4"></source>
                </video>
                <Paragraph>
                  AniList is the one-stop-shop for the latest news and details
                  for Anime. Here, you can search or browse for Anime, see their
                  information and more. We also have a cool social and forum
                  section where you can share anything Anime with friends around
                  the world.
                </Paragraph>
                <br />
                <br />
                <br />
                <Button path="https://anilist.co" type="work">
                  Visit Site
                </Button>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section
          className="border"
          backColor="rgb(213, 3, 28)"
          color="white"
          pad="80px 0"
        >
          <Grid>
            <Row center="xs">
              <Col lg={12} xs={11}>
                <Title size="lg">AniChart</Title>
                <Image
                  sizeX="80%"
                  mar="10px auto 40px auto"
                  display="block"
                  src={animeChart}
                />
                <Paragraph>
                  If you've ever wanted to find out what Anime is coming out
                  year-round then AniChart is the place to be. With AniChart
                  anyone can check out upcoming TV shows and movies. One cool
                  the feature is the ability to sort through Anime by season so
                  you can see what's hot all year round!
                </Paragraph>
                <br />
                <br />
                <br />
                <Button path="https://anichart.net" type="work">
                  Visit Site
                </Button>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section
          className="border"
          backColor="#293347"
          color="white"
          pad="200px 0"
        >
          <Grid>
            <Row center="xs">
              <Col xs={12}>
                <Title size="lg">Projects</Title>
                <Row center="xs">
                  <Col lg={4} xs={12}>
                    <Pane
                      target="_blank"
                      href="https://stupefied-kepler-3384a4.netlify.com"
                      color="light"
                      type="css"
                      desc="This visually appealing website showcases advanced css designs"
                    />
                  </Col>

                  <Col lg={4} xs={12}>
                    <Pane
                      target="_self"
                      href="https://welcome-0906.netlify.com"
                      color="light"
                      type="welcome"
                      desc="An ineractive welcome screen"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
      </Fragment>
    );
  }
}

export default Work;
