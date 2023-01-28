import {Component, Input, NgModule} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {CommonModule} from "@angular/common";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'met-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent  {

  constructor() { }



  /**
   * ProgressBar mode - 'determinate' | 'indeterminate'
   */
  @Input()
  mode: ProgressSpinnerMode = 'determinate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

   /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
   diameter: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

}
@NgModule({
  imports: [CommonModule],
  declarations: [ProgressSpinnerComponent],
  exports: [ProgressSpinnerComponent],
})
export class ProgressSpinnerComponentModule {}
