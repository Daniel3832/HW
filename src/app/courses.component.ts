import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>

        <ul>
            <li *ngFor = "let course of courses">
                {{ course }}
            </li>
        </ul>

        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />

        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    `
})

export class CoursesComponent {
    title = "Angular";
    courses;
    imageUrl = "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
    colSpan = 2;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
