import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IdeaService } from '../..//service/topic/idea/idea.service';

import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaAddComponent } from './idea-add/idea-add.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IdeaListComponent, IdeaAddComponent, IdeaDetailComponent]
})
export class IdeaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IdeaModule,
      providers: [IdeaService]
    };
  }
}
