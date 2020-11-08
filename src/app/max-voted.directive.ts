import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaxVoted]'
})
export class MaxVotedDirective {

constructor(private elem: ElementRef){}

}
