import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Work.module.scss";

//components
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import Pane from "../../components/Pane/Pane";

//media
import animeCover from "../../images/animeCover.png";
import animeChart from "../../images/anichart.PNG";
import anilistmp4 from "../../images/anilist.mp4";
import anilistwebm from "../../images/anilist.webm";

class Work extends Component {
  render() {
    return (
      <Fragment>
        <Section
          backColor='#EBEBEB'
          pos="bottom"
          pad="220px 0"
        >
          <Grid>
            <Row center="xs">
              <Col>
                <Title size="work">“Out of clutter, find simplicity.”</Title>
                <Paragraph size="lg">― Albert Einstein</Paragraph>
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
                <Title size="lg">otakuchan</Title>
                <a target='_blank' href="https://www.otakuchan.com/" rel="noopener noreferrer" >
                  <Image
                    sizeX="80%"
                    mar="10px auto 40px auto"
                    display="block"
                    src={animeCover}
                  />
                </a>
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
                <a target='_blank' href="https://anilist.co" rel="noopener noreferrer">
                  <video
                    className={styles.work__video}
                    loop="loop"
                    autoPlay="autoPlay"
                    muted="muted"
                  >
                    <source src={anilistwebm} type="video/webm"></source>
                    <source src={anilistmp4} type="video/mp4"></source>
                  </video>
                </a>
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
                <a target='_blank' href='https://anichart.net' rel="noopener noreferrer" >
                  <Image
                    anchor='https://anichart.net'
                    sizeX="80%"
                    mar="10px auto 40px auto"
                    display="block"
                    src={animeChart}
                  />
                </a>
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
                      style={{ marginTop: '30px' }}
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
