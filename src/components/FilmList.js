import React, {Component} from 'react';
import Film from './Film';

export default class FilmList extends Component {

    render() {
        return(
            <div>
                <h3 className="film-releases">Upcoming Film Releases for UK</h3>
                <Film />
                <Film />
                <Film />

            </div>
        );
    }
}