import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../servicios/contact.service';// Importa el servicio desde la carpeta services
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService] //servicio de contacto
})

export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService  // Inyección de ToastrService
  ) {}

  onSubmit(contactForm: NgForm): void {
    if (this.formData.name && this.formData.email && this.formData.phone && this.formData.message) {
      this.contactService.sendContactForm(this.formData).subscribe(
        (response) => {
          this.toastr.success('El correo fue enviado exitosamente.', 'Éxito', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
            closeButton: true,
          });
          // Vaciar el formulario y restablecer su estado
          this.resetForm(contactForm);
        },
        (error) => {
          this.toastr.error('Ocurrió un error al enviar el correo.', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
            closeButton: true,
          });
          // Vaciar el formulario y restablecer su estado incluso en caso de error
          this.resetForm(contactForm);
        }
      );
    }
  }
  
  // Método para resetear el formulario y su estado
  resetForm(contactForm: NgForm): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    contactForm.resetForm(); // Restablece el estado del formulario
  }
}