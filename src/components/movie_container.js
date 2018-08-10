import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

export default class MovieContainer extends Component {
	state = {
		movies: []
	}
	componentWillMount() {
		const itunesApi = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
		axios.get(itunesApi).then((resp) => {
			this.setState({
				movies: resp.data.feed.entry
			})
		});
	}
	render() {
		const movieList = this.state.movies.map((item, index) => {
			return <Movie info = {item} key = {index}/>
		})
		return (
			<div>
				{movieList}
			</div>
		);
	}
}
