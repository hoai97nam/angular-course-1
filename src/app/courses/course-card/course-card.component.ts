import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, OnChanges {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService) {
        console.log('course-card' + this.coursesService.id);
        
    }   

    ngOnInit() {

    }
    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes);
    }

    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

    onTitleChange(value: string){
        this.course.description = value
    }




}
