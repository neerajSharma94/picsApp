import React from 'react';
// import GetImage from './GetImage';


class Searchbar extends React.Component {
    state = { term: '' };

    onInputSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <form className="ui form" onSubmit={(e) => this.onInputSubmit(e)}>
                <div className="field">
                    <label htmlFor="text">Search images</label>
                    <input type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })} />

                </div>
            </form>
        );
    }
}

export default Searchbar;