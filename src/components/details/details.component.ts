import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() listDetails : any
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

 
  ngOnInit(): void {
  }

}
