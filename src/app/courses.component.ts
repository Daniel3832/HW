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

        <button  class="btn btn-primary" [class.active]="isActive">Primary</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Dark</button>
        <div (click)="divClick()">
            <button (click)="onSave($event)">Save</button>
        </div>

        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /><br><br>
        
        <div>
            <p>
                {{ course.title }} <br>
                {{ course.students | number }} <br>
                {{ course.rating | number: '3.3-3'}} <br>
                {{ course.price | currency: 'AUD': false: '3.3-3' }} <br>
                {{ course.releaseDate | date: 'shortDate' }} <br>
            </p>
        </div>

        {{ text | summary:10 }}
    `
})

export class CoursesComponent {
    text = `
    Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.
    The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
    `

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price:190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    



    title = "Angular";
    courses;
    imageUrl = "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
    colSpan = 2;
    isActive = false;
    email = "hell@gmail.com";
    
    onKeyUp() {
        console.log(this.email)
    }

    onSave($event) {
        $event.stopPropagation()
        console.log("saved!", $event)
    }

    divClick() {
        console.log("div clicked")
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
