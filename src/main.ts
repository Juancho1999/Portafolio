import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideToastr({
      timeOut: 3000, // Duración del mensaje (en milisegundos)
      positionClass: 'toast-top-center', // Cambia la posición del mensaje
      closeButton: true, // Agrega un botón para cerrar el Toastr
    }),
    importProvidersFrom(
      BrowserAnimationsModule, 
      HttpClientModule, 
      ToastrModule.forRoot()  // Asegúrate de incluir ToastrModule aquí también
    ),
  ],
})
  .catch((err) => console.error(err));
