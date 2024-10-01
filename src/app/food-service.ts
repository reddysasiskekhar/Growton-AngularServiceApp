import { Injectable } from "@angular/core";
import { notifyService } from "./comp-b/notify.service";


@Injectable()
export class foodService {

    constructor(public noify:notifyService){

    }

    getvegFoodList(){
        return "veg-meals";
    }

    getnonvegFoodList(){
        return "non-vegFood";
    }

    shownotificaion(orderName:string=''){
        //Your orede has been recived.Thanks.....
        return this.noify.sendNotification(orderName);
    }
}