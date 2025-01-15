import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Asegúrate de que este archivo tiene las rutas correctas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Esto proporciona las rutas
  ],
})
  .catch((err) => console.error(err)); // Si ocurre un error, lo mostramos en la consola