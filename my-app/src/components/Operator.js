import React, {Component} from 'react';

class Generator extends Component {
    render (){
        const {start} = this.props;
        return (
            <div>
                <p> Im Generator </p>
                <p> (start) </p>
                </div>
        )
    }
}
export default Generator;