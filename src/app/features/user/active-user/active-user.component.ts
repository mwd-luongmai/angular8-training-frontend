import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit, AfterViewInit, OnDestroy {

  loading: boolean = false
  isActivated: boolean = false
  userId: string
  activeSub: Subscription


  constructor(
    private userService: UserService, 
    private activeRoute: ActivatedRoute
    ) { }

  ngAfterViewInit(): void {
    if(this.userId){
      this.activeSub = this.userService.active(this.userId).subscribe(
        () => {
          this.loading = false
          this.isActivated = true
        },
        error => {
          this.loading = false
          this.isActivated = false
        }
      )
    }
  }

  ngOnInit() {
    this.loading = true
    this.userId = this.activeRoute.snapshot.paramMap.get('id')
  }

  ngOnDestroy(): void {
    if(this.activeSub){
      this.activeSub.unsubscribe()
    }
  }
}
