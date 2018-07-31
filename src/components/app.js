import React from 'react';
import Table from "./table";


const students = [
		{name: "Jeff Goldblum",
		course: "Dinosaur Genetics",
		grade: "88"},
		{name: "Joe Dirt",
		course: "Economics",
		grade: "98"},
		{name: "John Jacob",
		course: "Stealing names",
		grade: "86"}
];

export default () => {
    return (<div className = 'container'>
    	<h1>Student Grade Table</h1>
    	<Table data={students}/>
    </div>)
};



