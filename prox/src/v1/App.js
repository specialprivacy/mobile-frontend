import React, {Component} from 'react';
import './App.css';
import {CardMedia, CardText, CardActions} from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Pagination from './Pagination';
import data from './texts.json';

class App extends Component {

    state = {
        slideIndex: 0,
        consent: [false, false, false, false],
        images: [
            "GettyImages-506537685.jpg",
            "GettyImages-163252478.jpg",
            "GettyImages-486416759.jpg",
            "GettyImages-71930067.jpg",
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
        const prevButton =
            (this.state.slideIndex > 0) ?
                <FlatButton
                    secondary={true}
                    label="Back"
                    onClick={this.toggleSlide.bind(null, -1)}
                />
            :
                null;
        const nextButton =
            (this.state.slideIndex < 5) ?
                <FlatButton
                    primary={true}
                    label="Next"
                    onClick={this.toggleSlide.bind(null, 1)}
                />
            :
                null;
        const agreeButton =
            (this.state.slideIndex === 5) ?
                <FlatButton
                    primary={true}
                    label="Agree"
                    labelStyle={!(this.state.consent[0] || this.state.consent[1] || this.state.consent[2] || this.state.consent[3]) ? {color: "grey"} : {}}
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
                            <img className="img-responsive" src={"images/" + this.state.images[this.state.slideIndex]} alt=""/>
                        </CardMedia>
                        <CardText style={{paddingBottom: 0}}>
                            <SwipeableViews index={this.state.slideIndex}>
                                <div>
                                    <h1 style={{marginTop: 0}}>{ this.state.texts.title }</h1>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.welcomeText}}></p>
                                    <p><small>{ this.state.texts.welcomeSmallText }</small></p>
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page1}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent1 }
                                        onCheck={this.consent.bind(null, null, 0)}
                                        checked={this.state.consent[0]}
                                    />
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page2}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent2 }
                                        onCheck={this.consent.bind(null, null, 1)}
                                        checked={this.state.consent[1]}
                                    />
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page3}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent3 }
                                        onCheck={this.consent.bind(null, null, 2)}
                                        checked={this.state.consent[2]}
                                    />
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{__html: this.state.texts.page4}}></p>
                                    <Checkbox
                                        label={ this.state.texts.consent4 }
                                        onCheck={this.consent.bind(null, null, 3)}
                                        checked={this.state.consent[3]}
                                    />
                                </div>
                                <div>
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
                                </div>
                            </SwipeableViews>
                            <div style={{textAlign: "center"}}>
                                <Pagination
                                    dots={6}
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

export default App;
