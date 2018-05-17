import React, {Component} from 'react';
import AppV1 from './v1/App';
import AppV2 from './v2/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

const muiTheme = getMuiTheme({
    // fontFamily: "Proximus-regular",
    palette: {
        primary1Color: "rgb(1, 166, 155)",
        accent1Color: "rgb(255, 172, 79)",
    }
});

class AppContainer extends Component {

    componentDidMount() {
        const self = this;

        window.onhashchange = function() {
            self.forceUpdate();
        }
    }

    render() {
        var content = <AppV2/>;

        if (window.location.hash === "#v1") {
            content =  <AppV1/>;
        } else if (window.location.hash === "#v2") {
            content =  <AppV2/>;
        }

        return(
                <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
            iconStyleRight={{width: "15%", height: "50px"}}
            iconElementRight={<img alt="Special" style={{"float": "right", position: "relative", width: "auto", height: "100%"}} src="special_logo_crop_alpha.png"/>}
                        title="BeFit"
                        showMenuIconButton={false}
                    />
                    {content}
                </div>
            </MuiThemeProvider>
        );
    }

}

export default AppContainer;
