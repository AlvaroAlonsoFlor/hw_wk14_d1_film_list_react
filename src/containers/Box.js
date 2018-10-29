import React, {Component} from 'react';
import FilmList from '../components/FilmList';

class Box extends Component {

    render() {
        return(
            <div>
                Hey, I'm a Box!
                <FilmList />
            </div>
        );
    }
}

export default Box;