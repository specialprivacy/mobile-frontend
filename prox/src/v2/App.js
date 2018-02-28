import React, {Component} from 'react';
import './App.css';
import {Card, CardMedia, CardHeader, CardText, CardActions} from 'material-ui';
// import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

import data from './texts.json';


class App extends Component {

    state = {
        slideIndex: 0,
        consent: [false, false, false, false],
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

    agree = () => { };

    render() {
        const color = "rgb(92, 45, 145)";
        const colorTwo = "rgb(0, 188, 238)";
        const prevButton =
            (this.state.slideIndex > 0) ?
                <RaisedButton
                    secondary={true}
                    className="prox-btn"
                    label="Back"
                    labelStyle={{color: colorTwo}}
                    onClick={this.toggleSlide.bind(null, -1)}
                />
                :
                null;
        const nextButton =
            (this.state.slideIndex < 0) ?
                <RaisedButton
                    primary={true}
                    className="prox-btn"
                    label="Next"
                    labelStyle={{color: color}}
                    onClick={this.toggleSlide.bind(null, 1)}
                />
                :
                null;
        const agreeButton =
            (this.state.slideIndex === 0) ?
                <RaisedButton
                    primary={true}
                    className="prox-btn"
                    label="Agree"

                    onClick={this.agree}
                    disabled={!(this.state.consent[0] || this.state.consent[1] || this.state.consent[2] || this.state.consent[3])}
                />
                :
                null;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-12" style={{padding: 0}}>
                        <CardMedia>
                            <img className="img-responsive" src="images/GettyImages-506537685.jpg" alt=""/>
                        </CardMedia>
                        <CardText>
                            <h1 style={{marginTop: 0, color: color}}>{this.state.texts.title}</h1>
                            <p dangerouslySetInnerHTML={{__html: this.state.texts.welcomeText}}></p>
                            <p><small>{ this.state.texts.welcomeSmallText }</small></p>
                            {/*
                            <Card className="custom-card" style={{marginBottom: "20px"}}>
                                <CardHeader
                                    title={<span>
                                        <img className="custom-icon" src="icons/icon_Mobile-Telephony_rgb.svg" alt=""/>
                                        {this.state.texts.label2}
                                    </span>}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardText expandable={true}>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page1}}></p>
                                    <Checkbox
                                        label={this.state.texts.consent1}
                                        onCheck={this.consent.bind(null, null, 0)}
                                        checked={this.state.consent[0]}
                                    />
                                </CardText>
                            </Card>
                            */}
                            <Card className="custom-card" style={{marginBottom: "20px"}}>
                                <CardHeader
                                    title={<span>
                                        <img className="custom-icon" src="icons/icon_My-Location_rgb.svg" alt=""/>
                                        {this.state.texts.label2}
                                    </span>}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardText expandable={true}>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page2}}></p>
                                    <Checkbox
                                        label={this.state.texts.consent2}
                                        onCheck={this.consent.bind(null, null, 1)}
                                        checked={this.state.consent[1]}
                                    />
                                </CardText>
                            </Card>
                            <Card className="custom-card" style={{marginBottom: "20px"}}>
                                <CardHeader
                                    title={<span>
                                        <img className="custom-icon" src="icons/icon_TV_rgb.svg" alt=""/>
                                        {this.state.texts.label3}
                                    </span>}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardText expandable={true}>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page3}}></p>
                                    <Checkbox
                                        label={this.state.texts.consent3}
                                        onCheck={this.consent.bind(null, null, 2)}
                                        checked={this.state.consent[2]}
                                    />
                                </CardText>
                            </Card>
                            <Card className="custom-card" style={{marginBottom: "20px"}}>
                                <CardHeader
                                    title={<span>
                                        <img className="custom-icon" src="icons/icon_World_rgb.svg" alt=""/>
                                        {this.state.texts.label4}
                                    </span>}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardText expandable={true}>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page4}}></p>
                                    <Checkbox
                                        label={this.state.texts.consent4}
                                        onCheck={this.consent.bind(null, null, 3)}
                                        checked={this.state.consent[3]}
                                    />
                                </CardText>
                            </Card>

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

export default App;
