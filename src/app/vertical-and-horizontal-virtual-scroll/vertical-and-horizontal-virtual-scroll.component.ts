import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vertical-and-horizontal-virtual-scroll',
  templateUrl: './vertical-and-horizontal-virtual-scroll.component.html',
  styleUrls: ['./vertical-and-horizontal-virtual-scroll.component.scss']
})
export class VerticalAndHorizontalVirtualScrollComponent implements OnInit {


  rowsCount = 100000;
  columnsCount = 150;

  rowHeight = 27;
  columnWidth = 88;
  visibleRows = 10;
  visibleColumns = 10;
  startRow = 0;
  startColumn = 0;

  rows = Array.from({length: this.rowsCount}).map((_, i) => `r${i}`);
  columns = Array.from({length: this.columnsCount}).map((_, i) => `c${i}`);
  matrix = [];
  title = 'Project';


  scrollRows(event) {
    const candidateStartColumn = Math.floor(event.target.scrollLeft / this.columnWidth);
    if (candidateStartColumn <= (this.columnsCount - this.visibleColumns)) {
      this.startColumn = candidateStartColumn;
    } else {
      this.startColumn = this.columnsCount - this.visibleColumns;
    }
    this.startRow = Math.floor(event.target.scrollTop / this.rowHeight);
  }

  ngOnInit() {
    const matrix = [];

    this.rows.forEach(row => {
      const columns = [];
      this.columns.forEach(column => {
        columns.push(row + ' ' + column);
      });
      matrix.push(columns);
    });

    this.matrix = matrix;
    console.log(this.matrix);
  }

}
