'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get('/project/'+idNumber, addProject);
}

function addProject(result) {
	console.log(result);

	$('#project'+result.id +' .details').html(
		'<img src=' + result.image + ' class="detailsImage">'
		+result.title+ ' (' +result.date + ')'
		+result.summary 
	);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
	$.get('/palette', changeColors);
	console.log("here")
	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL?format=json',
	// 	// async: false,
	// 	// jsonpCallback: 'jsonCallback',
	// 	contentType: "application/json",
	// 	crossDomain: true,
	// 	dataType: 'jsonp',

	// 	success: function(result) {
	// 		console.log('test');
	// 		console.log(result);
	// 	},
	// 	error: function(e) {
	// 	   console.log(e);
	// 	}
	// });
	// var xhr = new XMLHttpRequest();
	// xhr.open('GET', 'http://data.nba.com/json/cms/2015/standings/conference.json', true);
	// xhr.send(null);
	// xhr.onreadystatechange = function () {
	//   var DONE = 4; // readyState 4 means the request is done.
	//   var OK = 200; // status 200 is a successful return.
	//   if(xhr.readyState === DONE) {
	//   	if(xhr.status === OK) {
	// 		console.log(xhr.responseText); // 'This is the returned text.'
	//   	} else {
	//   		console.log('Error: ' + xhr.status); // An error occurred during the request.
	//   	}
	//   }
	// };
	$.get('http://pokeapi.co/api/v2/pokemon/1/', lololol, 'jsonp');
}

function changeColors(result) {
	//console.log(result);
	var colors = result.randomPalette.colors.hex;

	//console.log(colors)

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);


	//$.get('http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL?format=json', 'jsonp', lololol);

	// var url = 'http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL?format=json';

	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://api.worldbank.org/countries/all/indicators/SP.POP.TOTL?format=json',
	// 	async: false,
	// 	jsonpCallback: 'jsonCallback',
	// 	contentType: "application/json",
	// 	dataType: 'jsonp',
	// 	success: function(result) {
	// 		console.log('test');
	// 		console.log(result);
	// 	},
	// 	error: function(e) {
	// 	   console.log(e);
	// 	}
	// });

}

function lololol(result) {
	console.log(result);
}