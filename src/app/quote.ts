export class Quote {
  showDetails: boolean;
  constructor(public name: string, public content: string, public author: string, public vote: number, public timePost: Date){
    this.showDetails = false;
  }
}
