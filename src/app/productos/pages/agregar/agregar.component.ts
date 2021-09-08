import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  colorQueQuiero: string = '#660099';
  texto1: string = 'Daniel'

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  tieneError( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = 'Don Daniel';
  }

}
