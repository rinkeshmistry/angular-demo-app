import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-page',
  template: `
    <div class="card-css">
      <h2>The content load from inline template component</h2>
    </div>
  `,
  styles:[
    `
      .card-css {
          display: block;
      }
    `
  ]
})
export class InlineTemplatePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
