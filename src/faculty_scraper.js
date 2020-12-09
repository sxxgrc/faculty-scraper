import React from 'react';
import './faculty_scraper.css';
import { FaSearch } from 'react-icons/fa';
import { Puff } from '@agney/react-loading';

class FacultySearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ url: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // Do nothing if already loading something.
        if (this.state.loading)
            return;

        this.setState({loading: true});

        // Send request to flask with the URL.
        
    }

    render() {
        return [
            <h1 class="title">Faculty Scraper</h1>,
            <form onSubmit={this.handleSubmit} class="wrap">
                <label class="scrape">
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Input a university URL (e.g. illinois.edu)" class="scrapeBar" />
                    <button type="submit" class="scrapeButton">
                        {
                            this.state.loading ? <Puff /> : <FaSearch />
                        }
                    </button>
                </label>
            </form>
        ];
    }
}

export default FacultySearchBox;
