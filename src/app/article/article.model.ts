export class Article {
  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes ++;
  }

  voteDown(): void {
    this.votes --;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];

      return  domainAndPath.split('/')[0];
    } catch (err) {
      return '';
    }
  }
}
