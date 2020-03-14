import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
		selector: 'sorting-table',
		templateUrl: './sorting-table.component.html',
		styleUrls: ['./sorting-table.component.css']
})
export class SortingTableComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	/*@Input() id: string;
	@Input() dataTable: any;
	@Input() dataTableHeader: any;*/

	@ViewChild('st', { read: ElementRef , static: true}) el: ElementRef;

	constructor() { }

	ngOnInit(){
	}

	ngAfterViewInit() {
		function sortTable(n: number) {
			var table, 
			rows, 
			switchChange, 
			i, 
			firstRow, 
			nextRow, 
			shouldSwitch, 
			direction, 
			switchcount = 0;

			table = document.getElementById("sortingTable");

			switchChange = true;
			direction = "asc"; 

			while (switchChange) {

				switchChange = false;

				rows = table.rows;

				for (i = 1; i < (rows.length - 1); i++) {

					shouldSwitch = false;

					firstRow = rows[i].getElementsByTagName("TD")[n];
					nextRow = rows[i + 1].getElementsByTagName("TD")[n];

					if (direction == "asc") {

						if (firstRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {

							shouldSwitch= true;
							break;

						}

					} else if (direction == "desc") {

						if (firstRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {

							shouldSwitch = true;
							break;

						}

					}

				}

				if (shouldSwitch) {

					rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
					switchChange = true;
					switchcount ++; 

				} else {

					if (switchcount == 0 && direction == "asc") {

						direction = "desc";
						switchChange = true;

					}

				}

			}

		}

		var headlineTable = document.getElementById("headlines").children;

		function toggleSort(i){
			return function(){
				sortTable(i);
			}
		}

		for(var i = 0; i < headlineTable.length; i++){
			headlineTable[i].addEventListener("click", toggleSort(i))
		}

	}

}
