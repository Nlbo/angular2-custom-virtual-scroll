import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-horizontal-virtual-scroll',
  templateUrl: './horizontal-virtual-scroll.component.html',
  styleUrls: ['./horizontal-virtual-scroll.component.scss']
})
export class HorizontalVirtualScrollComponent implements OnInit {


  rowsCount = 1;
  columnsCount = 150;

  columnWidth = 88;
  visibleColumns = 10;
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
