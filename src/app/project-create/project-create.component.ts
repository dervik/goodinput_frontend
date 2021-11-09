import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor() { }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Ingo Meier \t- Inventur' },
      { item_id: 2, item_text: 'Sina Leimer \t- Inventur' },
      { item_id: 3, item_text: 'Olaf Kratsch \t- HR' },
      { item_id: 4, item_text: 'Laura Becker \t- Produktion' },
      { item_id: 5, item_text: 'Hubert Sonstwer \t- Produktion' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Alle auswählen',
      unSelectAllText: 'Alle anwählen',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
