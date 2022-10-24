import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterContentInit {

  @Input() course: Course;
  @Input() courseId: string;
  @Input() noImgTpl: TemplateRef<any>;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();
  @ContentChild('sombrero') sombrero;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.sombrero);
    
  }

  isImageVisible(){
    return this.course?.iconUrl
  }

  courseSelected() {
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }
}
