import { Component, ElementRef,AfterViewInit, ViewChild, Directive, DoCheck, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  boi :any=''
  boi2 :any=''
  boi3 :any=''
  boi4 :any=''
  @ViewChild('bo') koy!: ElementRef
  koi: any
  constructor(private element: ElementRef){}
  contactKey(e: any){
   let x=this.koy.nativeElement
   console.log(x);
  } 
}
