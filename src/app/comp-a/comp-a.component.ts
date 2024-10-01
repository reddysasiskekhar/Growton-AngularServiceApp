import { Component, output } from '@angular/core';
import { foodService } from '../food-service';

@Component({
  selector: 'app-comp-a',

  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {


  constructor(public foodService:foodService){

  }
output="";
status = "";
  GetvegFood(){
    this.output = this.foodService.getvegFoodList();//veg-meals

    this.status = this.foodService.shownotificaion(this.output);
  }
}
