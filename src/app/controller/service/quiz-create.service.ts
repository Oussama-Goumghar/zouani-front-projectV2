import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Quiz} from '../model/quiz.model';
import {Question} from '../model/question.model';
import {Reponse} from '../model/reponse.model';
import {TypeDeQuestion} from '../model/type-de-question.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizCreateService {

  private url = environment.baseUrl;
  private _selected: Quiz;
  private _items: Array<Quiz>;
  private _question: Question;
  private _questions: Array<Question>;
  private _reponse: Reponse;
  private _reponses: Array<Reponse>;
  private _types: Array<TypeDeQuestion>;
  private _type: TypeDeQuestion;


  get selected(): Quiz {
    if (this._selected == null){
      this._selected = new Quiz();
    }
    return this._selected;
  }

  set selected(value: Quiz) {
    this._selected = value;
  }

  get items(): Array<Quiz> {
    if (this._items == null){
      this._items = new Array<Quiz>();
    }
    return this._items;
  }

  set items(value: Array<Quiz>) {
    this._items = value;
  }

  get question(): Question {
    if (this._question == null){
      this._question = new Question();
    }
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }

  get questions(): Array<Question> {
    if (this._questions == null){
      this._questions = new Array<Question>();
    }
    return this._questions;
  }

  set questions(value: Array<Question>) {
    this._questions = value;
  }

  get reponse(): Reponse {
    if (this._reponse == null){
      this._reponse = new Reponse();
    }
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }

  get reponses(): Array<Reponse> {
    if (this._reponses == null){
      this._reponses = new Array<Reponse>();
    }
    return this._reponses;
  }

  set reponses(value: Array<Reponse>) {
    this._reponses = value;
  }


  get types(): Array<TypeDeQuestion> {
    if (this._types == null){
      this._types = new Array<TypeDeQuestion>();
    }
    return this._types;
  }

  set types(value: Array<TypeDeQuestion>) {
    this._types = value;
  }

  get type(): TypeDeQuestion {
    if (this._type == null){
      this._type = new TypeDeQuestion();
    }
    return this._type;
  }

  set type(value: TypeDeQuestion) {
    this._type = value;
  }

  public findAllTypes(): Observable<Array<TypeDeQuestion>>
  {
    return this.http.get<Array<TypeDeQuestion>>(this.url + 'TypeDeQuestion/');
  }

  public saveQuiz(selected: Quiz): Observable<Quiz>
  {
    return this.http.post<Quiz>(this.url + 'quiz/' , selected);
  }

  public saveQuestion(question: Question): Observable<Quiz>
  {
    return this.http.post<Quiz>(this.url + 'question/' , question);
  }

  public saveReponse(reponse: Reponse): Observable<Quiz>
  {
    return this.http.post<Quiz>(this.url + 'reponse/' , reponse);
  }
  constructor(private http: HttpClient) { }
}
