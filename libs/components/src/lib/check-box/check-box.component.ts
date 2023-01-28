import {Component, Input, NgModule, Output,EventEmitter} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ThemePalette} from "@angular/material/core";
import {MatCheckboxClickAction, MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'met-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent  {


  @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
  change = new EventEmitter<boolean>();

  @Output()
  indeterminateChange = new EventEmitter<boolean>();

  // @Input()
  // clickAction : MatCheckboxClickAction =  undefined;

  @Input()
  color: ThemePalette = 'warn';

  @Input()
  checked: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  id: string = "1";

  @Input()
  indeterminate: boolean = false;

  @Input()
  labelPosition: 'before' | 'after' = "after";

  @Input()
  name: string | null = ""

  @Input()
  label: string = "I'm a checkbox"

  @Input()
  required: boolean = false;

  @Input()
  value: string = "";

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkedLabel: string | undefined;
  constructor() { }


  onChange(event: any) {
    this.change.emit(event);
  }

  onIndeterminateChange(event: any) {
    this.indeterminateChange.emit(event);
  }
}
@NgModule({
  imports: [CommonModule, MatCheckboxModule, FormsModule],
  declarations: [CheckBoxComponent],
  exports: [CheckBoxComponent],
})
export class CheckBoxComponentModule {}
