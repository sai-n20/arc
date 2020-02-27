import { Component, OnInit } from '@angular/core';
import { faSearch, faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faShoppingCart = faShoppingCart;
  cartItems: number = 69;

  constructor() { }

  ngOnInit() {
  }

}
