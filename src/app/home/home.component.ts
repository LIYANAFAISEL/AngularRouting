import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  /*gotoProduct() {
    console.log('Try to update DB');
    setTimeout(() => {
      console.log('DB is updated');
      this.router.navigate(["./product-detail/products"]);
    }, 2000);
  }
*/
}