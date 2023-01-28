import {Component, Input, NgModule} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'met-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  @Input()
  inset: boolean = false;

  @Input()
  vertical: boolean = false;

}
@NgModule({
  imports: [CommonModule],
  declarations: [DividerComponent],
  exports: [DividerComponent],
})
export class ProgressBarComponentModule {}
