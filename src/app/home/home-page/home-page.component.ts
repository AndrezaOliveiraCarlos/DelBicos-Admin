import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ServicesgridComponent } from '../../servicesgrid/servicesgrid.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselComponent,
    ServicesgridComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
