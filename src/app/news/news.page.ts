import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  property = 'articles';
  articles: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?sources=techcrunch').subscribe(response => {
      this.articles = response[this.property];
      console.log(this.articles);
    });
  }

  onLoadNews(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-item']);
  }

}
