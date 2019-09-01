import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public user = new User;
  radioSel: any;
  radioSelected: string;
  radioSelectedString: string;
  itemsList: Item[] = ITEMS;
  

  constructor() {
    this.itemsList = ITEMS;
    //Selecting Default Radio item here
    this.radioSelected = "Y";
    this.getSelectedItem();
  }


  public incrementCounter() {
    this.currentCount++;
  }
  public decreseCounter() {
    if (this.currentCount > 0) {
      this.currentCount--;
    }
  }
  public OnSubmit() {

  }
 public getSelectedItem() {
    this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
   this.radioSelectedString = JSON.stringify(this.radioSel);
   
  }
  public toggleButtons() {

    ITEMS.forEach(Item => {
      if (Item.value == this.radioSel.value) {
        Item.btnStyle = "btn-default";
        Item.checked = true;
      }
      else {
        Item.btnStyle = "btn-primary";
        Item.checked = false;
    }
      
    });
    
     
  }
  public onItemChange(item) {
    this.getSelectedItem();
    this.toggleButtons();

   
  }
}

export const ITEMS:Item[] = [
  {
    name: 'Kyllä',
    value: 'Y',
    checked: true,
    btnStyle: " btn-primary "
  },
  {
    name: 'Ei',
    value: 'N',
    checked: false,
    btnStyle: "btn-default"
  },
  {
    name: 'EOS',
    value: 'E',
    checked: false,
    btnStyle: "btn-default"
  },
  
];
export class Item {
  name: string;
  value: string;
  checked: boolean;
  btnStyle: string;
}

export class User {
  title: string;
  UserName: string;
  Password: string;
  Email: string;
  FirstName: string;
  LastName: string;

}
