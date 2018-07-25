import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

