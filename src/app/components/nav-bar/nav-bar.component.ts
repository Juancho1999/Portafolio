import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  closeMenu(): void {
    const navCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
