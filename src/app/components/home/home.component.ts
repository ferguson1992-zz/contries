import { Component } from '@angular/core';
import { ContriesService } from '../services/contries.service';
import { __metadata } from 'tslib';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contries:any[] = [];
  addFilter:boolean = false;
  languages:any[] = [];
  regions:any[] = [];
  lang:string = '';
  region:string = '';
  copyContries:any[] = []
  constructor(private _contriesService:ContriesService) {
    this.getContries();
  }

  getContries() {
    this._contriesService.getContries()
      .subscribe((_res:any) => {
        this.contries = _res;
        this.copyContries = _res;
      });
  }

  getLanguages(_data:any) {
    _data.map(_contry => {
      _contry.languages.map(_lang => this.languages.push(_lang.name));
      this.languages = this.languages.filter((_value, _index, _self) => _self.indexOf(_value) === _index);
      this.languages.sort();
    })
  }

  getRegions(_data:any) {
    _data.map(_contry => {
      if(!this.regions.includes(_contry.region)) this.regions.push(_contry.region);
    });
  }

  filter() {
    this.addFilter = !this.addFilter;
    this.getLanguages(this.contries);
    this.getRegions(this.contries);
  }

  async saveFilter() {
    let contries = [];
    this.contries = this.copyContries;
    if(this.lang === '' && this.region === '') return
    else if(this.lang !== '' && this.region === '') {
      contries = this.filterLang();
    } else if(this.lang === '' && this.region !== '') {
      contries = this.contries.filter(_contry => _contry.region === this.region);
    } else {
      contries = this.filterLang();
      contries = contries.filter(_contry => _contry.region === this.region);
    }
    this.contries = contries;
  }

  filterLang() {
    let response = [];
    this.contries.map(_contry => {
      _contry.languages.map(_lang => {
        if(_lang.name === this.lang) response.push(_contry);
      });
    });
    return response;
  }

}
