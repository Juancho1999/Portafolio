import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://portafolio-y8jgnqsv5-juans-projects-fd1bd95b.vercel.app/send-mail'; // Cambia esto a tu endpoint real

  constructor(private http: HttpClient) { }

  sendContactForm(data: any): Observable<any> {
    // Configura las cabeceras para asegurar que los datos se envíen como JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Realiza la solicitud POST con las cabeceras configuradas
    return this.http.post<any>(this.apiUrl, data, { headers: headers });
  }
}