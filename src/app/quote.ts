export class Quote {
  showDetails: boolean;
  constructor(public name: string, public content: string, public author: string){
    this.showDetails = false;
  }
}
