//import { Question } from './model.question';

export class Question {
    constructor(public question:string, public answers:Array<string>, public correct_answer:number){}
}
export class Quiz {
    constructor(public id:number, public name:string, public questions:Array<Question>){}
}