import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Question, Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizNumber: string;
  quizList: Quiz[];
  curQuiz: Quiz;
  curQuestionNumber:number;
  curQuestion:Question;
  started:boolean;
  selectedAnswer:number;
  correctAnswers:number;
  graded:boolean;
  constructor(private quizService:QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.graded = false;
    this.correctAnswers = 0;
    this.curQuestionNumber = -1;
    this.started = false;
    this.quizList = [new Quiz(-1, "N/A", [new Question("N/A", ["aa", "bb", "cc", "dd"], 0)])]
    this.route.params.subscribe((params: Params) => {this.quizNumber = params['quizNumber']});
    this.quizService.loadQuiz().subscribe(data=>{this.quizList=data},()=>{});
  }

  getGrade() {
    // Returns the grade, with two decimal points
    return (this.correctAnswers / this.curQuiz.questions.length).toFixed(2);
  }

  getNextQuestion() {
    if (this.selectedAnswer == this.curQuestion.correct_answer) {
      this.correctAnswers += 1;
    }
    if (this.curQuestionNumber >= this.curQuiz.questions.length - 1) {
      alert(`${this.getGrade()}%`);
      return
    }
    if(this.curQuestionNumber != -1) {
      console.log(`${this.curQuestion.correct_answer} answered - ${this.selectedAnswer}`);
    }
    this.curQuestionNumber += 1;
    this.curQuestion = this.curQuiz.questions[this.curQuestionNumber];
  }
  startQuiz() {
    // Hide the start button
    document.getElementById("startQuizDisplay").style.display="none"

    // Initialize Quiz
    this.started = true;
    this.curQuiz = this.quizList[this.quizNumber]
    this.curQuestionNumber=0;
    this.curQuestion = this.curQuiz.questions[this.curQuestionNumber];    
  }
}
