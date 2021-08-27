import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const NEWS_API_URL = environment.newsApiUrl;
const NEWS_API_KEY = environment.newsApiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) { }
  getData(url){
    return this.http.get(`${NEWS_API_URL}/${url}&apiKey=${NEWS_API_KEY}`);
  }
}
