import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  themeOption: Array<{ name: string, value: string }> = [
    {name: 'Blue', value: 'saga-blue'},
    {name: 'Purple', value: 'md-light-deeppurple'},
  ];

  themeSelected: string = 'saga-blue';

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  switchTheme(theme: any){
    this.themeService.switchTheme(theme.value);
  }

}
