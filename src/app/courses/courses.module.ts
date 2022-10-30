import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from './courses.service';
import { FilterByCategortyPipe } from './filter-by-category.pipe';



@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategortyPipe
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategortyPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
