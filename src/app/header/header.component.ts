import { Component, OnInit, HostListener } from '@angular/core';
import {UiStyleToggleService} from "../theme-services/ui-style-toggle.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private uiStyleToggleService: UiStyleToggleService) { }
  toggleTheme() {
    this.uiStyleToggleService.toggle();
  }
  @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
        if (event.keyCode === 13) {
          this.uiStyleToggleService.toggle();
        }
    }

  ngOnInit(): void {
  }

}
