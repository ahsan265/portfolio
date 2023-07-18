import { Component } from '@angular/core';
import { headerData } from './headerData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerData=headerData
}
