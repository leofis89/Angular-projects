import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.pug',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    n: Number
    num: Number
    arrNumeros: Array<Number> = [1, 2, 3, 4, 5];

    constructor() { }

    ngOnInit(): void {
    }

}
