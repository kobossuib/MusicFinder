import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, FormComponent],
  templateUrl: './app.component.html',
  styles: 'styles.css'
})
export class AppComponent {
  title = 'angular-17-app';
}
