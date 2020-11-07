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
  gradeMessage:string;
  constructor(private quizService:QuizService, private route: ActivatedRoute) { }

  initQuiz(): void {
    this.gradeMessage="";
    this.graded = false;
    this.correctAnswers = 0;
    this.curQuestionNumber = -1;
    this.started = false;
    this.quizList = [new Quiz(-1, "N/A", [new Question("N/A", ["aa", "bb", "cc", "dd"], 0)])]
    this.route.params.subscribe((params: Params) => {this.quizNumber = params['quizNumber']});
    this.quizService.loadQuiz().subscribe(data=>{this.quizList=data},()=>{});

  }
  ngOnInit(): void {
    this.subscribeRouteChange();
    this.initQuiz();
  }

  getGrade() {
    // Returns the grade, with two decimal points
    this.gradeMessage = `Your grade is ${((this.correctAnswers / this.curQuiz.questions.length) * 100).toFixed(2)}%.`;
    this.graded = true;
  }

  submitQuiz() {
    let confirmed = confirm("Are you sure you want to submit?")
    if (confirmed) {
      if (this.selectedAnswer == this.curQuestion.correct_answer) {
        this.correctAnswers += 1;
      }
      this.getGrade();
    }
    
  }

  getNextQuestion() {
    if (this.curQuestionNumber >= this.curQuiz.questions.length - 1) {
      this.submitQuiz();
      return
    }
    if (this.selectedAnswer == this.curQuestion.correct_answer) {
      this.correctAnswers += 1;
    }
    
    if(this.curQuestionNumber != -1) {
      console.log(`${this.curQuestion.correct_answer} answered - ${this.selectedAnswer}`);
    }
    this.curQuestionNumber += 1;
    this.curQuestion = this.curQuiz.questions[this.curQuestionNumber];

    this.selectedAnswer = null;
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

  subscribeRouteChange() {
    this.route.params.subscribe((params = {}) => {
        console.log("route changed");
        this.initQuiz();
    });
}
}
