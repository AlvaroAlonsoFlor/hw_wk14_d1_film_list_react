import React, {Component} from 'react';
import FilmList from '../components/FilmList';
import Button from '../components/Button';

class Box extends Component {

    render() {
        return(
            <div>
                Hey, I'm a Box!
                <FilmList />
                <Button />
            </div>
        );
    }
}

export default Box;