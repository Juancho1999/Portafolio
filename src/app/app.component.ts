
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
}
