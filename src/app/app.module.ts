// angular module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// core module & routing
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BugComponent } from './bug/bug.component';

// feature module
import { CodewarModule } from './codewar/codewar.module';
import { TopicModule } from './topic/topic.module';

// shared service
import { MaterializeService } from './service/shared/materialize/materialize.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BugComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule.forRoot(),
    TopicModule,
    CodewarModule
  ],
  providers: [HttpClientModule, MaterializeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
