import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ascendingAndDescending-app';
  // list = [10, true, 'apple', 3.14, false, 'banana', 5, 'cherry'];
  // myList = [10, true, 'apple', false, 5.5, 'banana', 20, 'cherry'];
  // myList = [1,2,3,4,5,6,7,8,9,10];
  // myList=['apple','mango','biscuit','grapes'];
  myList=[true,false,true,true]
  ngOnInit(){
   
const ascendingResult = this.sortDoodles('ASC', this.myList);
console.log(ascendingResult);

const descendingResult = this.sortDoodles('DESC', this.myList);
console.log(descendingResult);

    // this.sortDoodles();
  }

  sortDoodles(order: string, list: any[]): any[] {
    // Validate the order parameter
    if (order !== 'ASC' && order !== 'DESC') {
      throw new Error("Invalid order parameter. Please use 'ASC' or 'DESC'.");
    }
  
    // Define the comparison function based on the data types
    const compareFn = (a: any, b: any) => {
      if (typeof a === 'boolean' && typeof b === 'boolean') {
        return a === b ? 0 : a ? -1 : 1; // Boolean comparison
      } else if (typeof a === 'number' && typeof b === 'number') {
        return a - b; // Numeric comparison
      } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b); // String comparison
      } else {
        // Invalid data types, throw an error
        throw new Error('Invalid data types in the list.');
      }
    };
  
    // Sort the list based on the order parameter and the comparison function
    if (order === 'ASC') {
      return list.sort(compareFn);
    } else {
      return list.sort((a, b) => compareFn(b, a)); // Reverse sort for descending order
    }
  }
  
}
