import React from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import GetImage from './components/GetImage';


class App extends React.Component {
    state = { images: [] };
    onSubmit = async (props) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: props },
            headers: {
                Authorization: 'Client-ID jwwle-YRzR5OwMbPvmdWNU0LEXoaO1Hc7_1vIh5c1mA'
            }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onSubmit={this.onSubmit} />
                <GetImage images={this.state.images} />

            </div>
        )
    }

}

export default App;