import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vertical-virtual-scroll',
  templateUrl: './vertical-virtual-scroll.component.html',
  styleUrls: ['./vertical-virtual-scroll.component.scss']
})
export class VerticalVirtualScrollComponent implements OnInit {


  rowsCount = 100000;
  columnsCount = 10;

  rowHeight = 27;
  columnWidth = 88;
  visibleRows = 10;
  start = 0;

  rows = Array.from({length: this.rowsCount}).map((_, i) => `r${i}`);
  columns = Array.from({length: this.columnsCount}).map((_, i) => `c${i}`);
  matrix = [];
  title = 'Project';


  scrollRows(event) {
    const candidateStartRow = Math.floor(event.target.scrollTop / this.rowHeight);

    if (candidateStartRow <= (this.rowsCount - this.visibleRows)) {
      this.start = candidateStartRow;
    } else {
      this.start = this.rowsCount - this.visibleRows;
    }
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
