import { Grid, Row, Col } from "react-flexbox-grid";
import React, { Fragment, Component } from "react";
import styles from "./Header.module.scss";
import { Route, Link } from "react-router-dom";

//components
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Menu from "../../components/Menu/Menu";

//images
import avatar from "../../images/avatar.svg";
import Paragraph from "../../components/Paragraph/Paragraph";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.header}`}>
          <Grid>
            <Row center="xs" middle="xs">
              <Col xs={11}>
                <Row between="xs" middle="xs">
                  <Col lg={6} xs={11}>
                    <Row middle="xs">
                      <Link to="/">
                        <Row middle="xs">
                          <Logo />
                          <div className={`${styles.removeBorder}`} />
                        </Row>
                      </Link>
                    </Row>
                  </Col>

                  <Col lg={6} xs={1}>
                    <Route
                      path="/"
                      exact
                      render={() => {
                        return (
                          <Row middle="xs" end="xs">
                            <div className={`${styles.open}`}>
                              <Menu>
                                <div className={`${styles.mobileOpen}`}>
                                  <Row center="xs">
                                    <Col xs={8}>
                                      <Row middle="xs" center="xs">
                                        <Col xs={6} xs={5}>
                                          <Link to="/work">
                                            <Paragraph className="display">
                                              Work
                                            </Paragraph>
                                          </Link>
                                        </Col>
                                        <Col xs={6} xs={7}>
                                          <Link to="/contact">
                                            <Button
                                              className="display"
                                              type="white"
                                            >
                                              Say Hello
                                            </Button>
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </div>
                              </Menu>
                            </div>

                            <Col xs={1}>
                              <Link to="/work">
                                <div className={`${styles.mobileClose}`}>
                                  <Paragraph className="display">
                                    Work
                                  </Paragraph>
                                </div>
                              </Link>
                            </Col>
                            <Col xs={4}>
                              <Link to="/contact">
                                <div className={`${styles.mobileClose}`}>
                                  <Button className="display" type="white">
                                    Say Hello
                                  </Button>
                                </div>
                              </Link>
                            </Col>
                          </Row>
                        );
                      }}
                    />

                    <Route
                      path="/contact"
                      render={() => {
                        return (
                          <Row middle="xs" end="xs">
                            <Col xs={1}>
                              <Link to="/">
                                <img
                                  style={{ width: "25px" }}
                                  src="https://image.flaticon.com/icons/svg/151/151882.svg"
                                />
                              </Link>
                            </Col>
                          </Row>
                        );
                      }}
                    />

                    <Route
                      path="/work"
                      exact
                      render={() => {
                        return (
                          <Row middle="xs" end="xs">
                            <div className={`${styles.open}`}>
                              <Menu>
                                <div className={`${styles.mobileOpen}`}>
                                  <Row center="xs">
                                    <Col xs={3}>
                                      <Link to="/contact">
                                        <Button type="white">Say Hello</Button>
                                      </Link>
                                    </Col>
                                  </Row>
                                </div>
                              </Menu>
                            </div>

                            <Col md={4} xs={1}>
                              <Link to="/contact">
                                <div className={`${styles.mobileClose}`}>
                                  <Button type="white">Say Hello</Button>
                                </div>
                              </Link>
                            </Col>
                          </Row>
                        );
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Header;
