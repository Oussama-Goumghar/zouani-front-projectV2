/* tslint:disable:triple-equals prefer-for-of variable-name align */
import { Component, OnInit } from '@angular/core';
import {Question} from '../../../../controller/model/question.model';
import {Quiz} from '../../../../controller/model/quiz.model';
import {TypeDeQuestion} from '../../../../controller/model/type-de-question.model';
import {Reponse} from '../../../../controller/model/reponse.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../../controller/service/login.service';
import {ReponseEtudiant} from '../../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.scss']
})
export class QuizPreviewComponent implements OnInit {

  /*private _i = 0;
  private _value = 1;
  private _selectedValue: string;
  private _button: string;
  private _noteQuiz = 0;
  private _noteCheckbox: number;




  constructor(private  service: QuizService, private router: Router) { }
  get question(): Question {
    return this.service.question;
  }

  set question(value: Question) {
    this.service.question = value;
  }

  get questions(): Array<Question> {
    if (this.service.questions == null){
      this.service.questions = new Array<Question>();
    }

    return this.service.questions;
  }
  set questions(value: Array<Question>) {
    this.service.questions = value;
  }

  get selected(): Quiz {
    return this.service.selected;
  }
  get typeReponse(): string {
    return this.service.typeReponse;
  }

  set typeReponse(value: string) {
    this.service.typeReponse = value;
  }
  get numQuestion(): number {
    return this.service.numQuestion;
  }

  set numQuestion(value: number) {
    this.service.numQuestion = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selected(value: Quiz) {
    this.service.selected = value;
  }
  get reponse(): Reponse {
    if (this.service.reponse == null){
      this.service.reponse = new Reponse();
    }
    return this.service.reponse;
  }


  get i(): number {
    return this._i;
  }

  set i(value: number) {
    this._i = value;
  }

  get noteCheckbox(): number {
    return this._noteCheckbox;
  }

  set noteCheckbox(value: number) {
    this._noteCheckbox = value;
  }


  get correctAnswers(): Array<Reponse> {
    return this.service.correctAnswers;
  }

  set correctAnswers(value: Array<Reponse>) {
    this.service.correctAnswers = value;
  }
  get selectedValue(): string {
    return this._selectedValue;
  }

  set selectedValue(value: string) {
    this._selectedValue = value;
  }

  get button(): string {
    return this._button;
  }

  set button(value: string) {
    this._button = value;
  }

  get myAnswer(): Reponse {
    return this.service.myAnswer;
  }

  set myAnswer(value: Reponse) {
    this.service.myAnswer = value;
  }

  get noteQuiz(): number {
    return this._noteQuiz;
  }

  set noteQuiz(value: number) {
    this._noteQuiz = value;
  }

  get reponses(): Array<Reponse> {

    return this.service.reponses;
  }
  set reponses(value: Array<Reponse>) {
    this.service.reponses = value;
  }

  get type(): TypeDeQuestion {
    if (this.service.type == null){
      this.service.type = new TypeDeQuestion();
    }
    return this.service.question.typeDeQuestion;
  }

  get types(): Array<TypeDeQuestion> {
    if (this.service.types == null){
      this.service.types = new Array<TypeDeQuestion>();
    }
    return this.service.types;
  }

  public displayTime() {
    return this.service.displayTime();
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get qnprogress(): number {
    return this.service.qnprogress;
  }


  get items(): Array<Quiz> {
    if (this.service.items == null){
      this.service.items = new Array<Quiz>();
    }
    return this.service.items;
  }
  set items(value: Array<Quiz>) {
    this.service.items = value;
  }
  startTimer() {
    this.service.timer = setInterval(() => {
      this.service.seconds++;
    }, 1000);
  }


  get j(): number {
    return this.service.j;
  }

  set j(value: number) {
    this.service.j = value;
  }
  get typeQuestion(): string {
    return this.service.typeQuestion;
  }

  set typeQuestion(value: string) {
    this.service.typeQuestion = value;
  }


  public next()
  {
    this.service.qnprogress ++;
    this.service.findNextQuestion().subscribe(
        data => {
          this.question = data;
          if (data.typeDeQuestion.ref == 't1')
          {
            this.typeReponse = 'radio';
          }
          else if (data.typeDeQuestion.ref == 't2')
          {
            this.typeReponse = 'checkbox';
          }
        }
    );
    this.service.findCorrectAnswers(this.question.id).subscribe(
        data => {
          this.correctAnswers = data;
        }
    );

    if (this.question.typeDeQuestion.ref == 't1')
    {
      this.service.findMyAnswer(this.selectedValue).subscribe(
          data => {
            this.myAnswer = data;
          }
      );
      for (let i = 0 ; i < this.correctAnswers.length ; i++)
      {

        if (this.correctAnswers[i].ref == this.selectedValue)
        {
          this.noteQuiz = this.noteQuiz + this.question.pointReponseJuste;
        }
        else {
          this.noteQuiz = this.noteQuiz + this.question.pointReponsefausse;
        }
      }

    }
    else if (this.question.typeDeQuestion.ref == 't2')
    {
      this.noteCheckbox = 0;
      for (let i = 0 ; i < this.correctAnswers.length ; i++)
      {
        for (let j = 0; j < this.reponses.length ; j++)
        {
          if (this.correctAnswers[i].ref == this.reponses[j].ref)
          {
            this.noteCheckbox = this.noteCheckbox + 1;
          }
        }
      }
      console.log('noteCheckbox = ' + this.noteCheckbox);
      if (this.noteCheckbox == this.correctAnswers.length && this.reponses.length == this.correctAnswers.length)
      {
        this.noteQuiz = this.noteQuiz + this.question.pointReponseJuste;
      }
      else
      {
        this.noteQuiz = this.noteQuiz + this.question.pointReponsefausse;
      }
      for (let j = 0; j < this.reponses.length ; j++)
      {
      }
    }


    if (this.numQuestion == this.questions.length)
    {
      this.button = 'Finish the test';
    }
    else if (this.numQuestion > this.questions.length)
    {
      if (this.noteQuiz >= this.selected.seuilReussite){
        document.getElementById('congratulations3').style.visibility = 'visible';
        document.getElementById('hard-luck3').style.visibility = 'hidden';
      }else {
        document.getElementById('congratulations3').style.visibility = 'hidden';
        document.getElementById('hard-luck3').style.visibility = 'visible';
      }
      document.getElementById('mainCard').style.visibility = 'visible';
      document.getElementById('question').remove();

    }

    this.service.findReponses().subscribe(
        data => {
          this.reponses = data;
        }
    );
  }

  public start()
  {
    this.noteQuiz = 0;
    document.getElementById('start').remove();
    document.getElementById('question').style.visibility = 'visible';
    this.button = 'Next';
    this.service.findFirstQuestion().subscribe(
        data => {
          this.question = data;
          console.log(this.service.question.id);
          this.service.idQst = this.service.question.id;
          if (this.question.typeDeQuestion.ref == 't1')
          {
            this.typeReponse = 'radio';
          }
          else if (this.question.typeDeQuestion.ref == 't2')
          {
            this.typeReponse = 'checkbox';
          }
        }
    );

    this.service.findReponses().subscribe(
        data => {
          this.reponses = data;
        }
    );
    this.service.findCorrectAnswers(this.question.id).subscribe(
        data => {
          this.correctAnswers = data;
        }
    );

  }

  ngOnInit(): void {
    this.service.findAll();
   // this.service.findAllByQuizRef(this.selected.ref).subscribe(data => this.questions = data);
    this.service.findConfig().subscribe( data => this.service.configurations = data);
  //  this.service.findFirstReponse();
    this.service.seconds = 0;
    this.service.qnprogress = 0;
    this.startTimer();
   // this.service.findQuizByRef(this.selected.ref);
    this.service.findQuiz().subscribe(data => this.items = data);
    this.Config();
  }
public Config(){
  if (this.service.configuration.shuffleOptions == true){
    this.service.shuffle(this.question.reponses);
  } if (this.service.configuration.shuffleQuestions == true){
    this.service.shuffleQuestion(this.questions);
  }if (this.service.configuration.allowBack == true){
    document.getElementById('backPage').style.visibility = 'visible';
  }
}
  public viewQuiz(){
    this.router.navigate(['/pages/quiz-create']);
  }
public backPage(){
    -- this.service.numReponses;
   -- this.service.qnprogress;
}

  public selectionChanged(reponse: Reponse): void
  {
    this.selectedValue = reponse.ref;
    for (let i = 0 ; i < this.reponses.length ; i++)
    {
      if (reponse.ref == this.reponses[i].ref)
      {
        document.getElementById('div-' + this.reponses[i].ref).style.backgroundColor = '#2e2e33';
        document.getElementById('div-' + this.reponses[i].ref).style.width = '320px';
        document.getElementById('div-' + this.reponses[i].ref).style.height = '43px';
      }
      else {
        document.getElementById('div-' + this.reponses[i].ref).style.backgroundColor = '#dcdcdc';
        document.getElementById('div-' + this.reponses[i].ref).style.width = '300px';
        document.getElementById('div-' + this.reponses[i].ref).style.height = '40px';
      }
    }
}*/
  constructor(private service: QuizEtudiantService, private login: LoginService, private servicequiz: QuizService) { }

  private selectedValue: number;
  private _selectedValueCheckbox: Array<Reponse>;
  private _type: string;
  private _button: string;
  private _radio: string;
  private _checkbox: string;
  private _noteQst: number;
  private _noteQuiz: number;
  private _noteCheckbox: number;
  private _numeroCheckBox: number;
  private _numeroQuestion : number;


  /*get selectedpreview(): Quiz {
    return this.servicequiz.selected;
  }

  set selectedpreview(value: Quiz) {
    this.servicequiz.selected = value;
  }*/

  get refQuiz(): string {
    return this.servicequiz.refQuiz;
  }

  set refQuiz(value: string) {
    this.servicequiz.refQuiz = value;
  }

  get numeroQuestion(): number {
    return this._numeroQuestion;
  }

  set numeroQuestion(value: number) {
    this._numeroQuestion = value;
  }

  get numeroCheckBox(): number {
    return this._numeroCheckBox;
  }

  set numeroCheckBox(value: number) {
    this._numeroCheckBox = value;
  }

  get noteCheckbox(): number {
    return this._noteCheckbox;
  }

  set noteCheckbox(value: number) {
    this._noteCheckbox = value;
  }

  get selectedValueCheckbox(): Array<Reponse> {
    if(this._selectedValueCheckbox == null)
    {
      this._selectedValueCheckbox = new Array<Reponse>();
    }
    return this._selectedValueCheckbox;
  }

  set selectedValueCheckbox(value: Array<Reponse>) {
    this._selectedValueCheckbox = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this.service.reponsesEtudiant;
  }

  set reponsesEtudiant(value: Array<ReponseEtudiant>) {
    this.service.reponsesEtudiant = value;
  }

  get myAnswer(): Reponse {
    return this.service.myAnswer;
  }

  set myAnswer(value: Reponse) {
    this.service.myAnswer = value;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this.service.reponseEtudiant;
  }

  set reponseEtudiant(value: ReponseEtudiant) {
    this.service.reponseEtudiant = value;
  }

  get noteQst(): number {
    return this._noteQst;
  }

  set noteQst(value: number) {
    this._noteQst = value;
  }

  get noteQuiz(): number {
    return this._noteQuiz;
  }

  set noteQuiz(value: number) {
    this._noteQuiz = value;
  }

  get correctAnswers(): Array<Reponse> {
    return this.service.correctAnswers;
  }

  set correctAnswers(value: Array<Reponse>) {
    this.service.correctAnswers = value;
  }

  get checkbox(): string {
    return this._checkbox;
  }

  set checkbox(value: string) {
    this._checkbox = value;
  }

  get radio(): string {
    return this._radio;
  }

  set radio(value: string) {
    this._radio = value;
  }

  get button(): string {
    return this._button;
  }

  set button(value: string) {
    this._button = value;
  }

  get etudiant(): Etudiant {
    return this.service.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
  }

  get quiz(): Quiz {
    return this.service.quiz;
  }

  set quiz(value: Quiz) {
    this.service.quiz = value;
  }

  get items(): Array<Question> {
    return this.service.items;
  }

  set items(value: Array<Question>) {
    this.service.items = value;
  }

  get selected(): Question {
    return this.service.selected;
  }

  set selected(value: Question) {
    this.service.selected = value;
  }

  get reponses(): Array<Reponse> {
    return this.service.reponses;
  }

  set reponses(value: Array<Reponse>) {
    this.service.reponses = value;
  }

  get numReponses(): number {
    return this.service.numReponses;
  }

  set numReponses(value: number) {
    this.service.numReponses = value;
  }

  get numQuestion(): number {
    return this.service.numQuestion;
  }

  set numQuestion(value: number) {
    this.service.numQuestion = value;
  }

  get quizsEtudiant(): Array<QuizEtudiant> {
    return this.service.quizsEtudiant;
  }

  set quizsEtudiant(value: Array<QuizEtudiant>) {
    this.service.quizsEtudiant = value;
  }

  get quizEtudiant(): QuizEtudiant {
    return this.service.quizEtudiant;
  }

  set quizEtudiant(value: QuizEtudiant) {
    this.service.quizEtudiant = value;
  }

  get selectedQuiz(): Quiz {
    return this.service.selectedQuiz;
  }

  set selectedQuiz(value: Quiz) {
    this.service.selectedQuiz = value;
  }

  ///////////////////////////// Next() //////////////////////
  public next()
  {
    this.numeroCheckBox = 0;

    this.numQuestion = this.numQuestion + 1;
    this.service.findQuestion(this.refQuiz, this.numQuestion).subscribe(
        data => {
          this.selected = data;
          if(this.selected.typeDeQuestion.ref == 't1')
          {
            this.type = 'radio';
          }
          else if(this.selected.typeDeQuestion.ref == 't2')
          {
            this.type = 'checkbox';
          }
          this.service.findReponses(this.selected.id).subscribe(
              data => {
                this.reponses = data;
              }
          );
        }
    );
    // tslint:disable-next-line:triple-equals
    if (this.numQuestion == this.items.length)
    {
      this.button = 'Finish the test';
    }
    else if (this.numQuestion > this.items.length)
    {
      document.getElementById('finish').style.visibility = 'visible';
      document.getElementById('btn-next').style.visibility = 'hidden';
      document.getElementById('question').remove();

      this.quizEtudiant.note = this.noteQuiz;
      if (this.noteQuiz >= this.selectedQuiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'validé';
        document.getElementById('congratulations').style.visibility = 'visible';
        document.getElementById('hard-luck').style.visibility = 'hidden';
      }
      else if (this.noteQuiz < this.selectedQuiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'non validé';
        document.getElementById('congratulations').style.visibility = 'hidden';
        document.getElementById('hard-luck').style.visibility = 'visible';
      }
    }
    // tslint:disable-next-line:prefer-for-of
  }

  ///////////////////////////// Start() ///////////////////
  public start()
  {
    this.noteQuiz = 0;
    document.getElementById('start').remove();
    document.getElementById('question').style.visibility = 'visible';
    document.getElementById('quiz').style.backgroundColor = 'white';
    document.getElementById('btn-next').style.visibility = 'visible';
    this.button = 'Next';
    this.numeroQuestion = this.numQuestion + 1;
    console.log(this.refQuiz);
    this.service.findQuestion(this.refQuiz, this.numQuestion).subscribe(
        data => {
          this.selected = data;
          if(this.selected.typeDeQuestion.ref == 't1')
          {
            this.type = 'radio';
          }
          else if(this.selected.typeDeQuestion.ref == 't2')
          {
            this.type = 'checkbox';
          }
          this.service.findReponses(this.selected.id).subscribe(
              data => {
                this.reponses = data;
              }
          );
          this.service.findCorrectAnswers(this.selected.id).subscribe(
              data => {
                this.correctAnswers = data;
              }
          );
        }
    );

  }

  public selectionChanged(event: any,reponse: Reponse): void
  {
    if(this.selected.typeDeQuestion.ref == 't1')
    {
      this.selectedValue = reponse.id;
      for(let i=0 ; i < this.reponses.length ; i++)
      {
        if(reponse.id == this.reponses[i].id)
        {
          document.getElementById('div-' + this.reponses[i].id).style.backgroundColor = '#598e8f';
          document.getElementById('div-' + this.reponses[i].id).style.width = '320px';
          document.getElementById('div-' + this.reponses[i].id).style.height = '43px';
        }
        else {
          document.getElementById('div-' + this.reponses[i].id).style.backgroundColor = '#90eef0';
          document.getElementById('div-' + this.reponses[i].id).style.width = '300px';
          document.getElementById('div-' + this.reponses[i].id).style.height = '40px';
        }
      }
    }
    else if (this.selected.typeDeQuestion.ref == 't2')
    {
      if(event.target.checked)
      {
        if(this.selectedValueCheckbox.length > 0)
        {
          this.service.findMyReponseEtudiant(this.quizEtudiant, this.selectedValueCheckbox[0]).subscribe(
              data => {
                this.selectedValueCheckbox = null;
              }
          );
        }
        this.selectedValueCheckbox.push(reponse);
        document.getElementById('div-' + reponse.id).style.backgroundColor = '#598e8f';
        document.getElementById('div-' + reponse.id).style.width = '320px';
        document.getElementById('div-' + reponse.id).style.height = '43px';
      }
      else
      {
        this.selectedValueCheckbox = this.selectedValueCheckbox.filter(m=>m!=reponse);
        document.getElementById('div-' + reponse.id).style.backgroundColor = '#90eef0';
        document.getElementById('div-' + reponse.id).style.width = '300px';
        document.getElementById('div-' + reponse.id).style.height = '40px';
      }
    }
  }

  ngOnInit(): void {
    /*this.service.findEtudiant().subscribe(
        data => {
          this.etudiant = data;
        }
    );*/

    console.log(this.refQuiz);
    this.numQuestion = 1;
    this.etudiant = this.login.etudiant;
    this.service.findAllQuestions(this.refQuiz).subscribe(
        data => {
          this.items = data;
        }
    );
  }
}
