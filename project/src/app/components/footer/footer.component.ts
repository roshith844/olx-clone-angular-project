import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  lists = [{
    heading:'POPULAR LOCATIONS',
    links: ["Kolkata",
    "Mumbai",
    "Chennai",
    "Pune"]
  },
  {
    heading:'TRENDING LOCATIONS',
    links: ["Bhubaneshwar",
    "Hyderabad",
    "Chandigarh",
    "Nashik"]
  },{
    heading:'ABOUT US',
    links: ["About OLX Group",
    "Careers",
    "Contact Us",
    " OLXPeople",
    "Waah Jobs"]
  },{
    heading:'OLX',
    links: ["Help",
    " Sitemap",
    "Legal & Privacy information",
    "Blog",
    "OLX Autos Sell Car"]
  }
]

}
