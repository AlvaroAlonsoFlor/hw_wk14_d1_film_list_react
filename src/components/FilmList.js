import React, {Component} from 'react';
import Film from './Film';

export default class FilmList extends Component {

    render() {

        const films = this.props.data.map((film) => {
            return (
                < Film name={film.name} key={film.id} url={film.url}/>
            );
        })

        return(
            <div>
                <h3 className="film-releases">Upcoming Film Releases for UK</h3>
                {films}

            </div>
        );
    }
}