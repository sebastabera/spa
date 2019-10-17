import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  constructor(private activatedRoute:ActivatedRoute,
              _heroesServices:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroesServices.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
