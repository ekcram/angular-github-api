import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  repositories: any;
  username: any;
  userData: any;
  repoLanguages: any;
  status = false;
  error: boolean = false;
  reponame!: string;

  ngOnInit() {
    this.username = ''
    this.reponame = ''
  }

  constructor(private githubService: GithubService) { }

  isValid(username: any) {
    if (username == '')
      this.status = false;
    this.repositories = null;
  }

  search() {
    //devuelve los datos del usuario que buscamos
    this.githubService.getUserData(this.username).subscribe(
      (data) => {
        this.status = true;
        this.userData = data;
      },
      (error) => {
        console.log(error);
      }
    )
    //devuelve los datos de los repositorios del usuario que buscamos
    this.githubService.getSearch(this.username).subscribe(
      (result) => {
        this.status = true;
        this.repositories = result;
      },
      (error) => {
        console.error(error);
      })

    this.githubService.searchByRepoName(this.reponame).subscribe(
      (result) => {
        console.log({ result });
        this.status = true;
        this.repositories = result.sort();
      },
      (error) => {
        console.error(error);
      })
  }

}
