
export class Rapper {
  public _id: string;
  public name: string;
  public breakthroughTrack: string;
  public dateOfBirth: string;

  constructor(name: string, breakthroughTrack: string, dateOfBirth: string) {
    this.name = name;
    this.breakthroughTrack = breakthroughTrack;
    this.dateOfBirth = dateOfBirth;
  }
}
