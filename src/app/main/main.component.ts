import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  quizList: Quiz[];
  constructor(private quizService:QuizService, private router:Router) {
    this.quizService.loadQuiz().subscribe(data=>{this.quizList=data},()=>{});
  }

  ngOnInit(): void {}

  quizChange(quizValue) {
    if (quizValue == "") {
      this.router.navigate(['/welcome']);
    } else {
      this.router.navigate([`/quiz`, {"quizNumber":quizValue}]);

    }
    
  }
}
