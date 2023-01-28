import {Component, Input, NgModule, Output,EventEmitter} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatSlideToggle, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'met-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent  {
  @Input()
  color: ThemePalette = 'primary';

  @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
  change = new EventEmitter<boolean>();

  @Output()
  toggleChange = new EventEmitter<boolean>();

  @Input()
  checked: boolean = false;
  @Input()
  disabled: boolean = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }


  onChange(event: any) {
    this.change.emit(event);
  }

  onToggleChange(event: any) {
    this.toggleChange.emit(event);
  }
}
// @NgModule({
//   imports: [CommonModule, MatSlideToggle],
//   declarations: [SlideToggleComponent],
//   exports: [SlideToggleComponent],
// })
// export class SlideToggleComponentModule {}
