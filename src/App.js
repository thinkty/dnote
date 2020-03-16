/**
 * This component contains all the routes for different pages
 * It is using the react-router-dom package for routing and redirection
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import LoginPage from './components/LoginPage';
import MainPage from './components/MainFeedPage';


const theme = createMuiTheme({
    palette : {
        background : {
            default : "#28293d",
            paper : "#2f3047"
        },
        primary : {
            main : "#C7C9D9"
        },
        secondary : {
            main : "#6698FA"
        },
        text : {
            primary : "#FFFFFF",
            secondary : "#A4A4A4",
            hint: "#A4A4A4"
        }
    },
    typography : {
        h2 : {
            font : "Inter"
        },
        button : {
            textTransform : "capitalize"
        }
    }
});

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/home" component={MainPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );

}