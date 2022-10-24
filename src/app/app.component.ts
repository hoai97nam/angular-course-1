import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  courses = COURSES;
  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;

  constructor(){

  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(card => console.log(card))
  }

  onCardEdit() {
    const newCourse = {
      id: 11,
      description: "Using Stack Overflow",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
      longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
      category: 'All level',
      lessonsCount: 10
  }
    this.courses.push(newCourse)
  }

  onCourseSelected(course: Course) {
    console.log(this.cards)
  }

}
