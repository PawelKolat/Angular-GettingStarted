import {Component} from '@angular/core';

import {from} from 'rxjs';

@Component({
  selector: 'pm-root',
  template: `
      <div style="text-align:center">
          <h1>{{pageTitle}}</h1>
          Welcome to Mila's and Tata's first components!!
          List:
          <pm-products></pm-products>
      </div>`

})
export class AppComponent {
  pageTitle = 'Love your numbers home page Acme management';
}
