import { Component } from '@angular/core';
import {FilterService} from "./filters/filter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  filters;

  selectedFilters = [];

  constructor(private filterService: FilterService){
    this.filters = this.filterService.getExampleFilters();
  }


}
