import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@angular/core';
@Component({
  selector: 'app-star',
  imports: [FontAwesomeModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
faStar=faStar;
@Input() black=true;
}
