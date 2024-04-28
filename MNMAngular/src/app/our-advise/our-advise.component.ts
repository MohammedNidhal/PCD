import { Component, OnInit } from '@angular/core';
import { RecommendedProductsService } from '../recommended-products.service';
@Component({
  selector: 'app-our-advise',
  templateUrl: './our-advise.component.html',
  styleUrls: ['./our-advise.component.scss']
})
export class OurAdviseComponent implements OnInit {
  responseProducts: any;

  constructor(private products: RecommendedProductsService) { }

  ngOnInit(): void {
    this.products.getData().subscribe(
      (data:any) => {
        this.responseProducts = data;
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
