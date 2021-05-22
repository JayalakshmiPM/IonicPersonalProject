import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.page.html',
  styleUrls: ['./screen5.page.scss'],
})
export class Screen5Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  back()
  {
    this.router.navigateByUrl('/');
  }

}
