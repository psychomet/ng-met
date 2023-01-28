import { Component, Input, NgModule, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;

@Component({
  selector: 'button[met-button], a[met-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  host: {
    class:
      'btn',
      '[class.btn-primary]': `color === 'primary'`,
      '[class.btn-secondary]': `color === 'accent'`
  },

})
export class ButtonComponent implements OnChanges {
  @Input() color: ThemePalette = 'primary';
 
  // @Output() clickEvent = new EventEmitter();

  // greet(e: any){
  //   console.log('e',e);
  //   this.clickEvent.emit(e)
  // }

  ngOnChanges(changes: SimpleChanges){
    console.log('color',this.color);
    
    console.log('changes',changes)
  }

}
