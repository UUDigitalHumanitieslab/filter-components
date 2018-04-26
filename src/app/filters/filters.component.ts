import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterService} from './filter.service';


/*
export type Filter = {
  field: string;
} & ({
  dataType: 'text';
  filterType: 'dropdown'
  options: string[];
} | {
  dataType: 'int';
  filterType: 'slider';
  min_value: number;
  max_value: number;
}| {
  dataType: 'text';
  filterType: 'checkbox'
} |{
  dataType: 'date';
  filterType: 'range';
  min_value: Date;
  max_value: Date;
}

);
*/


export interface Filter{
  field;
  dataType;
  filterType;
  options;
  min_value;
  max_value;
}

export interface FilterValue {
  field: string;
  value;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters;

  @Output() filterChange = new EventEmitter<FilterValue[]>();

  selectedFilters = [];

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {

  }

  filterChanged(e) {
    if (e.selected) {
      this.addToSelectedFilters(e);
    } else {
      this.removeFromSelectedFilters(e);
    }

  }

  addToSelectedFilters(e) {
    const location = this.selectedFilters.findIndex((el) => el.field === e.field);
    if (location === -1) {
      this.selectedFilters.push(e);
    } else {
      this.selectedFilters[location] = e;
      this.selectedFilters = this.selectedFilters.slice();
    }
    this.filterChange.emit(this.selectedFilters);
  }

  removeFromSelectedFilters(e) {
    this.selectedFilters = this.selectedFilters.filter((el) => el.field !== e.field);
    this.filterChange.emit(this.selectedFilters);
  }

}
