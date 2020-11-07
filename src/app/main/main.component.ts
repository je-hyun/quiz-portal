import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  quizChange(quizValue) {
    if (quizValue == "") {
      this.router.navigate(['/welcome']);
    } else {
      this.router.navigate([`/quiz`, {"quizNumber":quizValue}]);
      
    }
    
  }
}
