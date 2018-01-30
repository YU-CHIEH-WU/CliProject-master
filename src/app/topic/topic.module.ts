import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// routing
import { TopicRouting } from './topic-routing.module';

// shared

// feature-part
import { TopicComponent } from './topic.component';
import { IdeaModule } from './idea/idea.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicRouting,
    IdeaModule.forRoot()
  ],
  declarations: [TopicComponent]
})
export class TopicModule { }
