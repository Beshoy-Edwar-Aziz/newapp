import { Component, ElementRef, HostListener,AfterViewInit ,QueryList, VERSION, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent{
  @ViewChild("bock") bock!: ElementRef;
  name=""
  imgSrc :any
  x :any|void
  constructor(private element: ElementRef){}
  getInfo(event: any){
  this.x=this.bock.nativeElement
  this.x.classList.replace('d-none','d-flex')
  this.imgSrc=event.srcElement.offsetParent.childNodes[0].src;
  this.ngAfterViewInit()
  }
  getInfoClick(event: any){
    this.x=this.bock.nativeElement
    if(event.target.id=="bock"){
      this.x.classList.replace('d-flex','d-none')
    }
  }
  ngAfterViewInit() :any{
    const byName=(<HTMLElement>this.element.nativeElement).querySelectorAll('.image')
    const byImg=(<HTMLElement>this.element.nativeElement).querySelector('#bock img')
  }
  
}
