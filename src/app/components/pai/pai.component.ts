import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {
  textOne = 'Lorem ipsum dolor sit amet. Non fuga sequi quo optio ullam deleniti quasi et reprehenderit vitae sit nihil magnam ex aperiam vero nam minus corrupti. Sit officiis molestiae est distinctio quidem et quae quia aut consequatur quis et ipsa neque.';
  textTwo = 'FUCTURA';
  constructor() { }

  ngOnInit(): void {
  }

}
