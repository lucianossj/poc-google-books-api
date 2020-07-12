import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VolumeModel } from '../search-card/search-card/models/volume.model';
import { Observable } from 'rxjs';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public search: Observable<VolumeModel>;

  constructor() { }

  ngOnInit(): void {
  }

  public searchedVolumes(search: Observable<VolumeModel>): void {
    this.search = search;
  }

}
