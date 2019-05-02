import {Component,EventEmitter,Output} from '@angular/core'

@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>Hi<br>
    <div [hidden]="!visible">
      <ng-content></ng-content>
      </div>
  </div>`})

export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(this);
    } else {
      this.close.emit(this);
    }
  }
}