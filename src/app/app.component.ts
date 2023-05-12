import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Imagenes-NASA';
  langs: string[] = [];

  constructor(transalate: TranslateService) {
    transalate.use(navigator.language);
    transalate.addLangs(['en-EN', 'es-ES']);
    transalate.setDefaultLang('en-EN');
    this.langs = transalate.getLangs();
  }
}
