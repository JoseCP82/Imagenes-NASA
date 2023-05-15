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

  constructor(translate: TranslateService) {
    translate.use(navigator.language);
    translate.addLangs(['en-EN', 'es-ES']);
    translate.setDefaultLang('en-EN');
    this.langs = translate.getLangs();
  }
}
