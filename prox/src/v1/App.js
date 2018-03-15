import React, {Component} from 'react';
import './App.css';
import {CardMedia, CardHeader, CardText, CardActions} from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Pagination from './Pagination';
import data from './texts.json';

class App extends Component {

    state = {
        slideIndex: 0,
        consent: [false, false, false, false],
        images: [
            "round-2086759_1920.jpg",
            "snow-1283525_1920.jpg",
            "silhouette-1159234_1920.jpg",
            "runner-557580_1920.jpg",
            "hiker-1082297_1920.jpg",
            "iStock_000043063398_XXXLarge.jpg",
            "GettyImages-494326915.jpg",
        ],
        texts: data,
    };

    consent = (e, index, isInputChecked) => {
        var newConsent = this.state.consent;
        newConsent[index] = !newConsent[index];
        this.setState({consent: newConsent});
    };

    toggleSlide = (delta) => {
        this.setState({slideIndex: this.state.slideIndex + delta});
    };

    handleChangeIndex = (index) => {
        this.setState({slideIndex: index});
    };

    agree = () => { };

    render() {
        const color = "rgb(92, 45, 145)";
        // const colorTwo = "rgb(0, 188, 238)";
        const prevButton =
            (this.state.slideIndex > 0) ?
                <RaisedButton
                    secondary={true}
                    className="prox-btn"
                    label="Back"
                    onClick={this.toggleSlide.bind(null, -1)}
                />
            :
                null;
        const nextButton =
            (this.state.slideIndex < 5) ?
                <RaisedButton
                    primary={true}
                    className="prox-btn"
                    label="Next"
                    onClick={this.toggleSlide.bind(null, 1)}
                />
            :
                null;
        const agreeButton =
            (this.state.slideIndex === 5) ?
                <RaisedButton
                    primary={true}
                    className="prox-btn"
                    label="Agree"
                    labelStyle={!(this.state.consent[0] || this.state.consent[1] || this.state.consent[2] || this.state.consent[3]) ? {color: "grey"} : {}}
                    onClick={this.toggleSlide.bind(null, 1)}
                    disabled={!(this.state.consent[0] || this.state.consent[1] || this.state.consent[2] || this.state.consent[3])}
                />
            :
                null;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-12" style={{padding: 0}}>
                        <CardMedia>
                            <img className="img-responsive" src={"images/" + this.state.images[this.state.slideIndex]} alt=""/>
                        </CardMedia>
                        <CardText style={{paddingBottom: 0}}>
                            <SwipeableViews index={this.state.slideIndex}>
                                <div>
                                  <CardText>
                                    <h1 style={{marginTop: 0, color: color}}>{ this.state.texts.title }</h1>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.welcomeText}}></p>
                                    <p><small>{ this.state.texts.welcomeSmallText }</small></p>
                                  </CardText>
                                </div>
                                <div>
                                  <CardHeader
                                      title={<span>
                                          <img className="custom-icon" src="icons/ic_favorite_black_48px.svg" alt=""/>
                                          {this.state.texts.label1}
                                          </span>}
                                  />
                                  <CardText>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page1}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent1 }
                                        onCheck={this.consent.bind(null, null, 0)}
                                        checked={this.state.consent[0]}
                                    />
                                  </CardText>
                                </div>
                                <div>
                                  <CardHeader
                                      title={<span>
                                          <img className="custom-icon" src="icons/ic_location_on_black_48px.svg" alt=""/>
                                          {this.state.texts.label2}
                                          </span>}
                                  />
                                  <CardText>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page2}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent2 }
                                        onCheck={this.consent.bind(null, null, 1)}
                                        checked={this.state.consent[1]}
                                    />
                                  </CardText>
                                </div>
                                <div>
                                  <CardHeader
                                      title={<span>
                                          <img className="custom-icon" src="icons/ic_person_black_48px.svg" alt=""/>
                                          {this.state.texts.label3}
                                          </span>}
                                  />
                                  <CardText>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page3}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent3 }
                                        onCheck={this.consent.bind(null, null, 2)}
                                        checked={this.state.consent[2]}
                                    />
                                  </CardText>
                                </div>
                                <div>
                                  <CardHeader
                                      title={<span>
                                          <img className="custom-icon" src="icons/ic_directions_run_black_48px.svg" alt=""/>
                                          {this.state.texts.label4}
                                          </span>}
                                  />
                                  <CardText>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page4}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent4 }
                                        onCheck={this.consent.bind(null, null, 3)}
                                        checked={this.state.consent[3]}
                                    />
                                  </CardText>
                                </div>
                                <div>
                                  <CardText>
                                    <p>{ this.state.texts.summaryText }</p>
                                    <Checkbox
                                        label={ this.state.texts.consent1 }
                                        onCheck={this.consent.bind(null, null, 0)}
                                        checked={this.state.consent[0]}
                                    />
                                    <Checkbox
                                        label={ this.state.texts.consent2 }
                                        onCheck={this.consent.bind(null, null, 1)}
                                        checked={this.state.consent[1]}
                                    />
                                    <Checkbox
                                        label={ this.state.texts.consent3 }
                                        onCheck={this.consent.bind(null, null, 2)}
                                        checked={this.state.consent[2]}
                                    />
                                    <Checkbox
                                        label={ this.state.texts.consent4 }
                                        onCheck={this.consent.bind(null, null, 3)}
                                        checked={this.state.consent[3]}
                                    />
                                    <p><small>{ this.state.texts.summarySmall }</small></p>
                                  </CardText>
                                </div>
                <div>
                  <CardText>
                    <h1 style={{color: color}}>Thank you for using our app.</h1>
                    <p>Here is an overview of the consent you have given:</p>
                    <SimpleList items={this.state.consent} texts={this.state.texts}/>
                  </CardText>
                </div>
                            </SwipeableViews>
                            <div style={{textAlign: "center"}}>
                                <Pagination
                                    dots={5}
                                    index={this.state.slideIndex}
                                    onChangeIndex={this.handleChangeIndex}
                                />
                            </div>
                        </CardText>
                        <CardActions style={{textAlign: "right"}}>
                            {prevButton}
                            {nextButton}
                            {agreeButton}
                        </CardActions>
                    </div>
                </div>
            </div>
        );
    }
}

class SimpleList extends Component {
    render() {
        const items = this.props.items.map((item, index) => {
            const textIndex = `consent${index + 1}`
            return {text: this.props.texts[textIndex], consent: item}
        }).filter(item => item.consent).map((item, index) => <li key={index}>{item.text}</li>);
        return <ul>{items}</ul>;
    }
}

export default App;
