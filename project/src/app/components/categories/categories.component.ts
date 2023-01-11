import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
items = [
  'Cars', 'motorcycles', 'MobilePhones', "For Sale: Houses & Apartments",'OLX Renew (Mobile)','Scooters','Commercial & Other Vehicles','For Rent: Houses & Apartments'
]
ngOnInit(){
  
}
}
