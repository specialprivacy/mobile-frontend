import React, {Component} from 'react';
import AppV1 from './v1/App';
import AppV2 from './v2/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

const muiTheme = getMuiTheme({
    fontFamily: "Proximus-regular",
    palette: {
        primary1Color: "rgb(92, 45, 145)",
        accent1Color: "rgb(0, 188, 238)",
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
                        title="Proximus"
                        showMenuIconButton={false}
                        style={{background: "linear-gradient(to right, rgb(92, 45, 145), rgb(0, 188, 238)"}}
                    />
                    {content}
                </div>
            </MuiThemeProvider>
        );
    }

}

export default AppContainer;