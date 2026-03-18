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
  atividade: string = 'sedentario';
  hidratacao: string = '';
  resultado = number = 0;
  calcularHidratacao() {
    if (this.peso > 0) {
      let base = this.peso/35;
      if (this.atividade === 'sedentário') {
        this.resultado = base*1.0;
      } else if (this.atividade === 'moderado') {
        this.resultado = base*1.2;
      }
      else if (this.atividade === 'intenso') {
        this.resultado = base*1.5;
      }
      let garrafas = Math.ceil(this.resultado/0.5);
    }
  }
}