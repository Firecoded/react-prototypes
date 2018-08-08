import React from 'react';

function ScrapbookImage(props) {
	const { src, style } = props.about;
	return (
		<img className = "scrapbook-image" src = {src} style = {style}/>
	)
}

export default ScrapbookImage;