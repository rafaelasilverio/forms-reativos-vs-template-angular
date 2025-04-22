import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  usuario = {
    nome: '',
    email: '',
    tipoConta: '',
    dataNascimento: '',
    receberNewsletter: false,
  };

  aoEnviar() {
    alert(
      `Formulário enviado (template-driven): ${this.usuario.nome} teve seu cadastro bem sucedido!`
    );
  }
}
