import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('test') test:string=''

  constructor(private elRef: ElementRef,) {
      this.elRef.nativeElement.style.backgroundColor = 'red';
     
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.elRef.nativeElement.style.backgroundColor = 'yellow';
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.elRef.nativeElement.style.backgroundColor = 'red';
    }

}
