import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardMedia, CardHeader, CardText, CardActions} from 'material-ui';
// import SwipeableViews from 'react-swipeable-views';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Smartphone from 'material-ui/svg-icons/hardware/smartphone';
import ActionExplore from 'material-ui/svg-icons/action/explore';
import TV from 'material-ui/svg-icons/hardware/tv';
import ActionLanguage from 'material-ui/svg-icons/action/language';

import data from './texts.json';


class App extends Component {

    state = {
        slideIndex: 0,
        consent: [false, false, false, false],
        images: [
            "lighthouse-1667223_1920.jpg",
            "photography-801891_1920.jpg",
            "street-map-2679271_1920.jpg",
            "children-403582_1920.jpg",
            "macbook-577758_1920.jpg",
            "belgium-2628337_1920.jpg",
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

    agree = () => { };

    render() {
        const color = "rgb(92, 45, 145)";
        const colorTwo = "rgb(2, 186, 237)";
        const prevButton =
            (this.state.slideIndex > 0) ?
                <FlatButton
                    secondary={true}
                    label="Back"
                    labelStyle={{color: colorTwo}}
                    onClick={this.toggleSlide.bind(null, -1)}
                />
            :
                null;
        const nextButton =
            (this.state.slideIndex < 0) ?
                <FlatButton
                    primary={true}
                    label="Next"
                    labelStyle={{color: color}}
                    onClick={this.toggleSlide.bind(null, 1)}
                />
            :
                null;
        const agreeButton =
            (this.state.slideIndex === 0) ?
                <FlatButton
                    primary={true}
                    label="Agree"
                    labelStyle={!(this.state.consent[0] || this.state.consent[1] || this.state.consent[2] || this.state.consent[3]) ? {color: "grey"} : {color: color}}
                    onClick={this.agree}
                    disabled={!(this.state.consent[0] || this.state.consent[1] || this.state.consent[2] || this.state.consent[3])}
                />
            :
                null;

        return (
            <MuiThemeProvider>
                <div className="container-fluid" style={{marginTop: "15px"}}>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 col-sm-12">
                            <Card>
                                <CardMedia>
                                    <img className="img-responsive" src={this.state.images[this.state.slideIndex]} alt=""/>
                                </CardMedia>
                                <div style={{background: color, height: "10px"}}></div>
                                <CardText>
                                    <h1 style={{marginTop: 0}}>{this.state.texts.title}</h1>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.welcomeText}}></p>
                                    <p><small>{ this.state.texts.welcomeSmallText }</small></p>

                                    <Card style={{marginBottom: "20px"}}>
                                        <CardHeader
                                            title={<span><Smartphone style={{verticalAlign: "middle", marginRight: "10px"}}/>{this.state.texts.label1}</span>}
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
                                    <Card style={{marginBottom: "20px"}}>
                                        <CardHeader
                                            title={<span><ActionExplore style={{verticalAlign: "middle", marginRight: "10px"}}/>{this.state.texts.label2}</span>}
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
                                    <Card style={{marginBottom: "20px"}}>
                                        <CardHeader
                                            title={<span><TV style={{verticalAlign: "middle", marginRight: "10px"}}/>{this.state.texts.label3}</span>}
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
                                    <Card style={{marginBottom: "20px"}}>
                                        <CardHeader
                                            title={<span><ActionLanguage style={{verticalAlign: "middle", marginRight: "10px"}}/>{this.state.texts.label4}</span>}
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
                            </Card>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
