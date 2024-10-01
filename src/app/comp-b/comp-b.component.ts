import { Component } from '@angular/core';
import { foodService } from '../food-service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent {
  
  constructor(public foodService:foodService){

  }
opt="";
alertMessage ="";
getnonvegFood(){
    this.opt = this.foodService.getnonvegFoodList();//non-veg-meals

    this.alertMessage = this.foodService.shownotificaion(this.opt);
    //notification
    // window.alert(this.alertMessage);
 
  }



}
