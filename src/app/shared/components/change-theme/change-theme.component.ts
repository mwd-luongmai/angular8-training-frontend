import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss'],
})
export class ChangeThemeComponent implements OnInit {
  themes = [
    { id: 'default-theme', name: 'Default Theme' },
    { id: 'dark-theme', name: 'Dark Theme' },
    { id: 'light-theme', name: 'Light Theme' },
  ]
  selectedTheme = this.themes[0]

  @Output() themeChange = new EventEmitter<string>()

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit() {}

  onSetTheme(theme) {
    this.selectedTheme = theme
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.selectedTheme.id)
    this.themeChange.emit(this.selectedTheme.id)
  }
}
