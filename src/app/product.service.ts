import { Injectable } from "@angular/core";
// import { Prudact } from './Prudact';
import { productsList } from "./PrudactMock";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  Products = productsList;

  constructor() {}


}
