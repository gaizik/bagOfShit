import { productsList } from "./../PrudactMock";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { startsWithPipe } from '../customstart.pipes';




@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private service: ProductService) {}
  productsList = this.service.Products;
  ngOnInit() {}

  query:string = '';

  first = 0;
  last = 5;

  nextDisabled = false;
  previousDisabled = true;

  getNext() {
    if (this.last <= this.productsList.length) {
      this.first += 5;
      this.last += 5;
      console.log(this.first + "-->" + this.last);
    }
    this.nextDisabled = this.last >= this.productsList.length;
    this.previousDisabled = this.last <= 5 ;
  }

  getPrevious() {
    if (this.first >= 0) {
      this.first -= 5;
      this.last -= 5;
      console.log(this.first + "-->" + this.last);
    }
    this.previousDisabled = this.last <= 5 ;
    this.nextDisabled = this.last >= this.productsList.length;
  }



}
