import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VolumeModel } from './search-card/search-card/models/volume.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-south-system';

  public search: Observable<VolumeModel>;

  public searchedVolumes(search: Observable<VolumeModel>): void {
    this.search = search;
  }

}
