import {Rapper} from '../shared/rapper.model';
import {Recordcompany} from '../shared/recordcompany.model';

export class Album {
  public _id: string;
  public artist: string;
  public name: string;
  public pictureURL: string;
  public tracks: number;
  public lengthMin: number;
  public rappers: Rapper[];
  public recordcompanies: Recordcompany[];

  constructor(
    title: string, name: string, pictureURL: string, tracks: number, lengthMin: number, rappers: Rapper[], recordcompanies: Recordcompany[]
  ) {
    this.artist = title;
    this.name = name;
    this.pictureURL = pictureURL;
    this.tracks = tracks;
    this.lengthMin = lengthMin;
    this.rappers = rappers;
    this.recordcompanies = recordcompanies;
  }
}
