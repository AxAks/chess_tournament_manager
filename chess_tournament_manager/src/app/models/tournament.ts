export class Tournament {
  constructor(
    public name: string,
    public location: string,
    public rounds: number,
    public startDate: string,
    public endDate: string,
    public identifiersList: any,
    public timeControl: string,
    public description: string,
    public roundsList: any,
    public totalResults: any,
    public notPlayedYet: any
  ) {

  }
}
