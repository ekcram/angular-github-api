import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Search {};

@Injectable()

export class GithubService {
  
  public endpoint = 'https://api.github.com/users';
  public endpoint2 = 'https://api.github.com/search/repositories'
  public endpoint3 = 'https://api.github.com/repos/'

  constructor(private http: HttpClient) {
  
  }

  getUserData(username:any): Observable<Search[]>{
    return this.http.get<Search[]>(`${this.endpoint}/${username}`);
  }

  getSearch(search:any): Observable<Search[]>{
    return this.http.get<Search[]>(`${this.endpoint}/${search}/repos`);
  }

  searchByRepoName(reponame:any):Observable<Search[]>{
    return this.http.get<Search[]>(`${this.endpoint2}?q=/${reponame}`);
  }

  getRepoLanguages(username:any,reponame:any): Observable<Search[]>{
    return this.http.get<Search[]>(`${this.endpoint3}/${username}/${reponame}/languages`);
  }


  //https://api.github.com/repos/ekcram/devtea/languages
  
  //https://api.github.com/search/repositories?q=devtea+language:vue&sort=star&order=desc

  //https://api.github.com/search/repositories?q=devtea

  //https://api.github.com/search/repositories?q=devtea+user:ekcram


}
