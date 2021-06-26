import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { AlertService } from '@core/services'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
} from '@angular/material'

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  message: any

  setAutoHide: boolean = true
  autoHide: number = 5000
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(
    private alertService: AlertService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const config = new MatSnackBarConfig()
    config.verticalPosition = this.verticalPosition
    config.horizontalPosition = this.horizontalPosition
    config.duration = this.setAutoHide ? this.autoHide : 0

    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message
      if (this.message) {
        if (this.message.type === 'success') {
          config.panelClass = ['success-snackbar']
        } else if (this.message.type === 'error') {
          config.panelClass = ['error-snackbar']
        }
        this.snackBar.open(this.message.text, 'Close', config)
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
