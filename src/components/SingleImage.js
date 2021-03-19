import React from 'react';

class SingleImage extends React.Component {


    render() {

        const url = this.props.image.urls.regular;
        return (
            <div className="ui container">
                <img src={url} alt="images" />
            </div>
        )
    }
}

export default SingleImage;