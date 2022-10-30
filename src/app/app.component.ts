import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './courses/courses.service';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, AfterContentChecked {


  courses: Course[];
  // courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private cofig: AppConfig,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe(
      (data) => {
        this.courses = data;
      }
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }
  ngOnChanges(changes): void {
    console.log(changes)
  }

  // ngDoCheck(): void {

  //   // this.cd.markForCheck();
  //   console.log('ngDoCheck');
    
  // }

  onEditDesc() {
    const course = this.courses[0]
    const newCourse = {...course, description: 'new value!'}
    this.courses[1].category = 'ADVANCED'
  }

  save(course: Course) {
    // this.coursesService.saveCourse(course).subscribe(()=>console.log('saved'));
  }

}
