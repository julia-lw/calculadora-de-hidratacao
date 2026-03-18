import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hidratacao',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './hidratacao.html',
  styleUrl: './hidratacao.css',
})
export class Hidratacao {
  peso: number = 0;
  hidratacao: String = '';
  calcularHidratacao() {
    if (this.peso > 0) {
      this.resultado = this.peso/35;
      if (this.atividade = 'sedentário') {
        this.hidratacao = "";
      } else if (this.resultado = 'moderado') {
        this.hidratacao = "";
      }
      else if (this.resultado = 'intenso') {
        this.hidratacao = "";
      } else {
        this.hidratacao = "";
      }
    }
  }
}
