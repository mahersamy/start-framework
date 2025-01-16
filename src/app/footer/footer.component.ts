import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faNetworkWired} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faNetworkWired=faNetworkWired;


}
