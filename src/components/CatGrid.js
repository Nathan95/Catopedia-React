import React, { Component } from 'react';
import '../Styles.css';
import {Grid, Row, Col, Button, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CatGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
    this.incFav = this.incFav.bind(this);
  }

  incFav() {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  }


  render() {
    return(
              <Grid>
                  <div><h2>Cata-logue</h2></div>

                  <Row className="show-grid">
                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button onClick={this.incFav} className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">{this.state.likes}</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                      <Col md={4}>
                        <div className="catContainer">
                            <div className="innerImage"></div>
                            <Col md={3} xs={3} className="like">
                            <Button className="likeButtonMargin">
                               <Glyphicon glyph="heart" /> Like
                             </Button>
                            </Col>
                              <Col md={2} xs={2}> <div className="likeCounter">0</div></Col>
                            <Col md={4} xs={4}>
                              <Link to='/CatLanding'>
                                <Button className="ArrowbuttonMargin">
                                   <Glyphicon glyph="chevron-right" />
                                 </Button>
                              </Link>
                            </Col>
                        </div>
                      </Col>

                  </Row>
              </Grid>
    );
  }
}





export default CatGrid;
