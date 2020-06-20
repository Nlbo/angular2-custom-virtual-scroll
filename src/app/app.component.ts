import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  h = 100000;
  w = 10;

  rowHeight = 27;
  columnWidth = 88;
  visibleRows = 10;
  start = 0;

  rows = Array.from({length: this.h}).map((_, i) => `r${i}`);
  columns = Array.from({length: this.w}).map((_, i) => `c${i}`);
  matrix = [];
  title = 'Project';


  scrollRows(event) {
      this.start = Math.floor(event.target.scrollTop / this.rowHeight);
  }

  ngOnInit() {
    const matrix = [];

    this.rows.forEach(row => {
      const columns = [];
      this.columns.forEach(column => {
        columns.push(row + ' ' + column);
      })
      matrix.push(columns);
    })

    this.matrix = matrix;
    console.log(this.matrix);
  }


}
