import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formulario = new FormGroup({
    gasolina : new FormControl(''),
    alcool : new FormControl(''),
    resultado : new FormControl('')
  });
  
  calcular(){
    let resultado = this.formulario.value.gasolina * 0.70;
    if(resultado < this.formulario.value.alcool){
      this.formulario.controls.resultado.setValue("Gasolina")
    }else{
      this.formulario.controls.resultado.setValue("Álcool")
    }
    
  }
  
}
