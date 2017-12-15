import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Album } from './album.model';
import {environment} from '../../environments/environment.prod';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class AlbumsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/'; // URL to web api
  private albums: Album[] = [];
  private rapperAlbums: Album[] = [];

  albumsChanged = new Subject<Album[]>();

  constructor(private http: Http) {}

  public getAlbums(): Promise<Album[]> {
    console.log('albums ophalen van server');
    return this.http.get(this.serverUrl + '/albums', {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.albums = response.json() as Album[];
        return response.json() as Album[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getAlbum(index: number) {
    return this.albums[index];
  }



  addAlbum(album: Album): Promise<Album> {
    this.albums.push(album);
    this.albumsChanged.next(this.albums.slice());

    console.log('Album toevoegen: ' + album.name);
    return this.http.post(this.serverUrl  + '/albums',
      {
        artist: album.artist,
        name: album.name,
        pictureURL: album.pictureURL,
        tracks: album.tracks,
        length: album.lengthMin,
        rapper: {
          rapperName: album.rapper.rapperName,
          breakthroughTrack: album.rapper.breakthroughTrack,
          dateOfBirth: album.rapper.dateOfBirth
        },
        recordcompany: {
          labelName: album.recordcompany.labelName
        },
        headers: this.headers
      })
      .toPromise()
      .then(response => {
        console.log(response.json() as Album);
        return response.json() as Album;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  updateAlbum(index: number, newAlbum: Album): Promise<Album> {
    const title = this.albums[index].name;

    this.albums[index] = newAlbum;
    this.albumsChanged.next(this.albums.slice());

    console.log('Een Album updaten: ' + title);
    return this.http.put(this.serverUrl + '/albums' + '/' + title, {
        artist: newAlbum.artist,
        name: newAlbum.name,
        pictureURL: newAlbum.pictureURL,
        tracks: newAlbum.tracks,
        length: newAlbum.lengthMin,
        rapper: {
          rapperName: newAlbum.rapper.rapperName,
          breakthroughTrack: newAlbum.rapper.breakthroughTrack,
          dateOfBirth: newAlbum.rapper.dateOfBirth
        },
        recordcompany: {
          labelName: newAlbum.recordcompany.labelName
      },
      headers: this.headers
    })
      .toPromise()
      .then(response => {
        return response.json() as Album;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  deleteAlbum(index: number): Promise<Album> {
    const albumToDelete = this.albums[index];

    this.albums.splice(index, 1);
    this.albumsChanged.next(this.albums.slice());

    console.log('Een album verwijderen: ' + albumToDelete.name);
    return this.http.delete(this.serverUrl + '/albums' + '/' + albumToDelete.name)
      .toPromise()
      .then(response => {
        return response.json() as Album;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public getRapperAlbums(index: number): Promise<Album[]> {
    console.log('' +
      'albums ophalen van server');
    const firstName = this.albums[index].rapper.rapperName;
    console.log(firstName);
    return this.http.get(this.serverUrl + '/rappers' + '/' + firstName, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.rapperAlbums = response.json() as Album[];
        return response.json() as Album[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
}
