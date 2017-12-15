import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import {AlbumsService} from '../../albums/albums.service';
import {Album} from '../../albums/album.model';


@Component({
  selector: 'app-rapper-list',
  templateUrl: './rapper-list.component.html',
  styleUrls: ['./rapper-list.component.css']
})
export class RapperListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  albums: Album[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }


  ngOnInit() {
    this.albumsService.getAlbums()
      .then(albums => this.albums = albums)
      .catch(error => console.log(error));
    this.subscription = this.albumsService.albumsChanged
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
  }

  onNewAlbum() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {

  }

}
