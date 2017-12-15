import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumComponent {
  loadedFeature = 'album';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
