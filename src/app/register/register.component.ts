import { Component, OnInit } from '@angular/core';

class Registration {
  constructor(
    public description: string = '',
    public amount: number = null,
    public date = null,
  ) { }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegistrationComponent implements OnInit {
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  constructor() {
    this.registrations.push(new Registration('Coffee', 1.32, '2019-12-15'));
    this.registrations.push(new Registration('Breakfast', 2.59, '2019-12-16'));
  }

  ngOnInit() { }

  // This method associate to New Button.
  onNew() {
    this.regModel = new Registration();
    this.submitType = 'Save';
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (!this.regModel.description || !this.regModel.amount || !this.regModel.date) {
      alert('Please complete all fields');
    } else {
      if (this.submitType === 'Save') {
        this.registrations.push(this.regModel);
      } else {
        this.registrations[this.selectedRow].description = this.regModel.description;
        this.registrations[this.selectedRow].amount = this.regModel.amount;
        this.registrations[this.selectedRow].date = this.regModel.date;
      }
      this.showNew = false;
    }
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    this.showNew = false;
  }

}
