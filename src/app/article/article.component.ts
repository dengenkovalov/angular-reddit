import {Component, HostBinding, Input} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  // @ts-ignore
  @Input() article: Article;

  voteUp() {
    // @ts-ignore
    this.article.voteUp();
    return false;
  }

  voteDown() {
    // @ts-ignore
    this.article.voteDown();
    return false;
  }
}
