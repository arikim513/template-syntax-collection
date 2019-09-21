import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  </div>`,
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  // sizer (two-way-1)
  @Input() size: number | string;

  // sizer (two-way-2)
  @Output() sizeChange = new EventEmitter<number>();
  
  ngOnInit() {
  }

  dec(){ this.resize(-1);}
  inc(){ this.resize(+1);}

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
   
    // sizer (two-way-2)
    this.sizeChange.emit(this.size);
  }

}
