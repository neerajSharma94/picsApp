import '../images.css'
import React from 'react';
import SingleImage from './SingleImage';



class GetImage extends React.Component {

    render() {
        const images = this.props.images;
        return (
            <div className="images">
                {
                    images.map(image => {
                        return (
                            <div key={image.id} className="ui container">
                                <SingleImage image={image} />
                            </div>
                        )
                    })
                }
            </div>
        )
    };
}

export default GetImage;