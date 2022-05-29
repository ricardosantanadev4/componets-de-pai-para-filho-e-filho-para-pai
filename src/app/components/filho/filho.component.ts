import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {
  // inputa o valor da variavel textTwo do pai para o filho
  @Input()
  textTwo = '';
  constructor() { }

  ngOnInit(): void {
  }

}
