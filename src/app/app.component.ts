import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-sorting-table'

	dataTableHeader = [
		{ id: 1, name: "Name" }, 
		{ id: 2, name: "Country" }
	];

	dataTable = [
		{ id: 1, name: "John Doe", country: "Great Britian" },
		{ id: 2, name: "Mary Watson", country: "USA" },
		{ id: 3, name: "Dave Beck", country: "Ireland" },
		{ id: 4, name: "Brooke Tyson", country: "Italy" }
	];
}
