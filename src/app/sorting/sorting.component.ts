import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  template: `
    <div>
      <h2>Sorting Doodles</h2>
      <label>Order:</label>
      <select [(ngModel)]="selectedOrder" (change)="sortList()">
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      <br><br>
      <label>List:</label>
      <p>Ex:[1,apple,'true','false',54,2453,zebra]<p>
      <input type="text" [(ngModel)]="inputList" (input)="sortList()">
      <br><br>
      <p>Sorted List:</p>
      <ul>
        <li *ngFor="let item of sortedList">{{ item }}</li>
      </ul>
    </div>
  `,
})
export class SortingComponent {
  selectedOrder: 'ASC' | 'DESC' = 'ASC';
  inputList:any;
  sortedList: any[] = [];

  sortList() {
    const list = this.inputList.trim().split(',');
    // console.log(list)

    if (this.selectedOrder === 'ASC') {
      this.sortAscending(list);
    } else {
      this.sortDescending(list);
    }
  }

  sortAscending(list: any[]) {
    this.sortedList = list.sort((a, b) => {
      if (this.compare(a, b) > 0) {
        return 1;
      } else if (this.compare(a, b) < 0) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  sortDescending(list: any[]) {
    this.sortedList = list.sort((a, b) => {
      if (this.compare(a, b) > 0) {
        return -1;
      } else if (this.compare(a, b) < 0) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  compare(a: any, b: any): number {
    if (typeof a === 'boolean' && typeof b !== 'boolean') {
      return -1;
    } else if (typeof a !== 'boolean' && typeof b === 'boolean') {
      return 1;
    } else if (typeof a === 'boolean' && typeof b === 'boolean') {
      return a === b ? 0 : a ? 1 : -1;
    } else if (typeof a === 'number' && typeof b !== 'number') {
      return -1;
    } else if (typeof a !== 'number' && typeof b === 'number') {
      return 1;
    } else if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      return String(a).localeCompare(String(b));
    }
  }
}

