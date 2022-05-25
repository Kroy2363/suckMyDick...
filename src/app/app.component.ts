import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'Web-Angular';
  vehicles: any = {};
  cols: any [] = [];


  constructor(
    private baseService: BaseService,
    private config: ConfigService
  ){

  }
  ngOnInit(): void {
    this.cols = this.config.cols.vehicles
    this.vehicles = this.baseService.getAll('vehicles')
  }

}



export class NavbarComponent {

}
