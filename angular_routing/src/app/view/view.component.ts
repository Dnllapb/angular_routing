import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id:string="";
  constructor (private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(paramas => {
      this.id = paramas["id"];
    });
  }

}
