import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-reativo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css'],
})
export class FormReativoComponent implements OnInit {
  formularioUsuario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formularioUsuario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tipoConta: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      receberNewsletter: [false],
    });
  }

  aoEnviar() {
    alert(
      `Formulário enviado (template-driven): ${this.formularioUsuario.value.nome} teve seu cadastro bem sucedido!`
    );
  }
}
