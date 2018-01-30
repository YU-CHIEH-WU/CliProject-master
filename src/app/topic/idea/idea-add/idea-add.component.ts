import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdeaService, Idea } from '../../../service/topic/idea/idea.service';

@Component({
  selector: 'app-idea-add',
  templateUrl: './idea-add.component.html',
  styleUrls: ['./idea-add.component.scss']
})
export class IdeaAddComponent implements OnInit {

  constructor(private _router: Router, private _ideaService: IdeaService) { }
  idea: Idea = new Idea();
  ngOnInit() {
  }
  doAdd(): void {
    const now = new Date();
    this.idea.id = now.getTime();
    this.idea.created_at = now;
    this._ideaService.addToIdeaList(this.idea);
    this._router.navigateByUrl('/topic/idea/list');
  }
  doBack(): void {
    this._router.navigateByUrl('/topic/idea/list');
  }
}
