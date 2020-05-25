import React from 'react';
import Track from './Track.css';

export class Track extends React.Component {
    renderAction() {
        if (isRemoval) {
            <button className="Track-action">-</button>
        } else {
            <button className="Track-action">+</button>
        }
    }

    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    {/* <h3>a track name </h3> */}
                    {/* <p>Track artist | Track album here </p> */}
                </div>
                <button className="Track-action"> + or - comes here</button>
            </div>
        )
    }
}