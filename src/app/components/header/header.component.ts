import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddButtonService } from 'src/app/services/add-button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(
    private addButtonService: AddButtonService,
    private router: Router
  ) {
    this.subscription = this.addButtonService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleAddTask() {
    this.addButtonService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
