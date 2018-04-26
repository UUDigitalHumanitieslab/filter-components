import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FilterService {

  constructor(private http: HttpClient) {
  }


  filters = [
    {
      field: "Text (checkbox)",
      dateType: "text",
      filterType: "checkbox",
    },
    {
      field: "Date",
      dataType: 'date',
      filterType: 'range',
      min_value: new Date("1993-05-13"),
      max_value: new Date("1993-05-15"),
    },
    {
      field: "Int",
      dateType: "int",
      filterType: "slider",
      min_value: 1,
      max_value: 50,

    },
    {
      field: "Text (DropDown)",
      dateType: "text",
      filterType: "dropdown",
      options: [
        'a',
        'b',
        'c'
      ]

    },
  ];


  getExampleFilters() {
    return this.filters;
  }

}
