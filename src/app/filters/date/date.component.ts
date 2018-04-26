import {Component, OnInit} from '@angular/core';
import {FilterComponent} from "../filter/filter.component";

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends FilterComponent implements OnInit {

  min_value: Date;
  max_value: Date;

  ngOnInit() {
    this.min_value = new Date(this.filter.min_value);
    this.max_value = new Date(this.filter.max_value);
  }

  onCheckBoxClicked(e) {
    this.updateFilterChange(e.target.checked);
  }

  updateFilterChange(selected: boolean) {
    const change = {
      field: this.filter.field,
      selected: selected,
      value: {
        'min_value': this.dateToString(this.min_value), 'max_value': this.dateToString(this.max_value)
      }
    };

    this.onFilterChange.emit(change);
  }

  dateToString(date: Date) {
    return date.toISOString().split('T')[0];
  }

}


