import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Debe de ingresar este campo';

  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log('constructor directive');
    // console.log(el);

    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    const mensaje = changes.mensaje.currentValue;
    this.htmlElement.nativeElement.innerText = mensaje;
  }

  ngOnInit(): void {
    // console.log('NgOnInit directive');
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje():void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
