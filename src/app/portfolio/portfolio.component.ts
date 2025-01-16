import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedImage:string="";
  isHidden:boolean=true;
  listOfPorfolioImages:string[]=["/images/poert1.png","/images/port2.png","/images/port3.png","/images/poert1.png","/images/port2.png","/images/port3.png"];


  showImage(index:number): void{
    this.selectedImage=this.listOfPorfolioImages[index];
    this.isHidden=false;
  }
  hideImage():void{
    this.isHidden=true;
  }
}
