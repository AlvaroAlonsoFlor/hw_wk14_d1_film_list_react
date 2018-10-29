import React, {Component} from 'react';
import Film from './Film';

export default class FilmList extends Component {

    render() {
 
        console.log(this.props.data);

        const films = this.props.data.map((film) => {
            return (
                < Film />
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