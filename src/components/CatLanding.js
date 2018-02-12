import React, { Component } from 'react';
import '../Styles.css';
import {Grid, Row, Col, Button, Glyphicon} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class CatLanding extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
    this.incFav = this.incFav.bind(this);
    this.decFav = this.decFav.bind(this);
  }

  incFav() {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  }

  decFav() {
    this.setState(prevState => ({ likes: prevState.likes - 1 }));
  }

  render() {
    return(
  <div>
      <Grid>
        <Row className="show-grid">
          <Col md={12} xs={12}>
            <h1>Kitty moaw-moaw</h1>
          </Col>
          <Col md={6} xs={6}>
            <div className="catLandingImage"></div>
          </Col>
          <Col md={6} xs={6}>
              <div className="catLandingContent">
                <p>Look here, friend, said I, if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; thats all I have to say. And its said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell em Ive concluded not to make one of em. Ah, my dear fellow, you cant fool us that way—you cant fool us. It is the easiest</p>

                  <Col md={6} xs={6} className="CatLandinglikes"><Glyphicon glyph="heart" /> 12 Likes </Col>
                  <Col md={6} xs={6} className="CatLandingLink"><Link to='/'>Back to cat-alogue</Link></Col>
              </div>
          </Col>
        </Row>
        </Grid>


            <div className="sliderArea">
                <h3>Other Kitties related to 'Kitty moaw-maow'</h3>
                  <Grid>
                      <Row className="show-grid">
                      <Col md={4} xs={12}>
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

                      <Col md={4} xs={12}>
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

                      <Col md={4} xs={12}>
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
                      </Row>
                  </Grid>
            </div>
    </div>
 )

}

}



export default CatLanding;
