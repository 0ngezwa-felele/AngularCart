import { Injectable } from '@angular/core';
// import { log } from 'console';
import { BehaviorSubject } from 'rxjs';
import { Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList : any = []
public productlist = new BehaviorSubject<any> ([]);
  constructor() { }
  getProducts(): Observable<any>
  {
    return this.productlist
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this .productlist.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productlist.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(index : number){
    // this.cartItemList.map((a: any, index:any)=>{
    //   if (products.id === a.id){
    //     this.cartItemList.splice(index,1)
    //   }
    // })
      this.cartItemList.splice(index, 1);
      this.productlist.next(this.cartItemList)
  }
  
  

  removeAllCart(){
    this.cartItemList = []
    this.productlist.next(this.cartItemList);
  }
}
