export class Quote {
  showDetails: boolean;
  constructor(public name: string, public content: string, public author: string, public vote: number){
    this.showDetails = false;
  }
}
