import {Rapper} from '../shared/rapper.model';
import {RecordCompany} from '../shared/recordcompany.model';

export class Album {
  public _id: string;
  public artist: string;
  public name: string;
  public pictureURL: string;
  public tracks: number;
  public lengthMin: number;
  public rapper: Rapper;
  public recordcompany: RecordCompany;

  constructor(
    title: string, name: string, pictureURL: string, tracks: number, lengthMin: number, rapper: Rapper, recordcompany: RecordCompany)
  {
    this.artist = title;
    this.name = name;
    this.pictureURL = pictureURL;
    this.tracks = tracks;
    this.lengthMin = lengthMin;
    this.rapper = rapper;
    this.recordcompany = recordcompany;
  }
}
