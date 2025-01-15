import { Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, PresentationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
