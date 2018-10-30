import React, { Component } from "react";

export default class Button extends Component{

    render() {
        return (
            <a href = "https://www.imdb.com/calendar/?region=gb" target="_blank"
            className = "more-releases" rel = "noopener noreferrer" > 
            View More Upcoming releases 
            </a>
        );
    }
} 