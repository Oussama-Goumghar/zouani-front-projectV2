import { Component, OnInit } from '@angular/core';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Reponse} from '../../../controller/model/reponse.model';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {Question} from '../../../controller/model/question.model';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.scss']
})
export class QuizTakeComponent implements OnInit {

  constructor(private service: QuizEtudiantService, private login: LoginService) { }

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
  question = '';
  debutBlink= 0;
  finBlink= 0;
  answer = '_____';

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

  ngOnInit(): void {
    this.numQuestion = 0;
    this.etudiant = this.login.etudiant;
    this.service.findAllQuestions('quiz1').subscribe(
        data => {
          this.items = data;
        }
    );
    this.start();
  }

  //////////////////Start/////////
  public start()
  {
    this.numQuestion = this.numQuestion + 1;
    this.question = '';
    this.answer = '_____';
    this.button = 'Don\'t know';
    this.service.findQuestion('quiz1', this.numQuestion).subscribe(
        data => {
          this.selected = data;
          this.service.findReponses(this.selected.id).subscribe(
              dataAnswers => {
                this.reponses = dataAnswers;
                console.log(this.reponses);
              }
          );
          for(let i = 0 ; i < this.selected.libelle.length ; i++)
          {
            if(this.selected.libelle[i] == '.' && this.selected.libelle[i+1] == '.' && this.selected.libelle[i+2] == '.')
            {
              this.debutBlink = i;
              console.log('ha lbdya fi : ' + this.debutBlink);
              for (let j = i + 2 ; i < this.selected.libelle.length ; j++)
              {
                if(this.selected.libelle[j] != '.')
                {

                  this.finBlink = j;
                  console.log('ha la5ar fi : ' + this.finBlink);
                  break;
                }
              }
              console.log('ha la5aaaaaaaar fi : ' + this.finBlink);
              break;
            }
          }
          for(let i = 0 ; i < this.debutBlink ; i++)
          {
            this.question = this.question + this.selected.libelle[i];
          }
          this.question = this.question + this.answer;
          for(let i = this.finBlink ; i < this.selected.libelle.length ; i++)
          {
            this.question = this.question + this.selected.libelle[i];
          }
        }
    );
  }

  public selectionChanged(event: any,reponse: Reponse): void
  {
    this.question = '';
    this.answer = reponse.lib;
    this.button = 'Next';
    this.service.findQuestion('quiz1', this.numQuestion).subscribe(
        data => {
          this.selected = data;
          for(let i = 0 ; i < this.selected.libelle.length ; i++)
          {
            if(this.selected.libelle[i] == '.' && this.selected.libelle[i+1] == '.' && this.selected.libelle[i+2] == '.')
            {
              this.debutBlink = i;
              console.log('ha lbdya fi : ' + this.debutBlink);
              for (let j = i + 2 ; i < this.selected.libelle.length ; j++)
              {
                if(this.selected.libelle[j] != '.')
                {

                  this.finBlink = j;
                  console.log('ha la5ar fi : ' + this.finBlink);
                  break;
                }
              }
              console.log('ha la5aaaaaaaar fi : ' + this.finBlink);
              break;
            }
          }
          for(let i = 0 ; i < this.debutBlink ; i++)
          {
            this.question = this.question + this.selected.libelle[i];
          }
          this.question = this.question + this.answer;
          for(let i = this.finBlink ; i < this.selected.libelle.length ; i++)
          {
            this.question = this.question + this.selected.libelle[i];
          }
        }
    );
    /*this.service.findQuestion('quiz1', this.numQuestion).subscribe(
        data => {
          this.selected = data;
          for(let i = 0 ; i < this.selected.libelle.length ; i++)
          {
            if(this.selected.libelle[i] == '.')
            {
              this
            }
            else {

            }
          }
        }
    );*/
    /*if(this.selected.typeDeQuestion.ref == 't1')
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
      console.log('hada ljawab dyal radio : ' + this.selectedValue);
    }
    else if (this.selected.typeDeQuestion.ref == 't2')
    {
      if(event.target.checked)
      {
        if(this.selectedValueCheckbox.length > 0)
        {
          console.log(this.selectedValueCheckbox[0]);
          this.service.findMyReponseEtudiant(this.quizEtudiant, this.selectedValueCheckbox[0]).subscribe(
              data => {
                console.log('lqiiitha');
                this.selectedValueCheckbox = null;
              },error => console.log('makainch')
          );
        }
        this.selectedValueCheckbox.push(reponse);
        console.log(this.selectedValueCheckbox);
        document.getElementById('div-' + reponse.id).style.backgroundColor = '#598e8f';
        document.getElementById('div-' + reponse.id).style.width = '320px';
        document.getElementById('div-' + reponse.id).style.height = '43px';
      }
      else
      {
        this.selectedValueCheckbox = this.selectedValueCheckbox.filter(m=>m!=reponse);
        console.log(this.selectedValueCheckbox);
        document.getElementById('div-' + reponse.id).style.backgroundColor = '#90eef0';
        document.getElementById('div-' + reponse.id).style.width = '300px';
        document.getElementById('div-' + reponse.id).style.height = '40px';
      }
    }*/
  }

}
