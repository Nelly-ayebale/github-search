import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppColor]'
})
export class AppColorDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color = 'blue';
  }

}
