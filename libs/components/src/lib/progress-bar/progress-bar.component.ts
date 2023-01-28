import {Component, Input, NgModule} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'met-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent  {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }



  /**
   * ProgressBar mode - determinate | indeterminate | Buffer | Query
   */
  @Input()
  mode: ProgressBarMode = 'determinate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

   /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

}
@NgModule({
  imports: [CommonModule],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
})
export class ProgressBarComponentModule {}
