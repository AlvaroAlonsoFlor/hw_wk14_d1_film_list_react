import React, {Component} from 'react';

export default class Film extends Component {

    render() {
        return(
            <h3 className="film" key={this.props.id}>
                <a href={this.props.url} target="_blank">{this.props.name}</a>
            </h3>
            
        );
    }
}