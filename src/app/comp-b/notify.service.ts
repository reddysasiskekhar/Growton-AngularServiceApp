import { Injectable } from "@angular/core";


@Injectable()
export class notifyService {
    sendNotification(orderName:string){
        return `Your order ${orderName} has been recived.Thanks.....`;
    }

    
}