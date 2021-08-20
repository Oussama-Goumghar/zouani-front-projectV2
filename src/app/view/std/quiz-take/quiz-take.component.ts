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
  question1 = '';
  question2 = '';
  debutBlink= 0;
  finBlink= 0;
  answer = '_____';
  isSelected: boolean;
  correctMistakeAnswer: string;

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
    this.noteQuiz = 0;
    this.etudiant = this.login.etudiant;
    this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
        data => {
          this.items = data;
        }
    );

    /*this.service.findQuizBySection(640).subscribe(
        data => {
          this.quizEtudiant.quiz = data;
          this.quizEtudiant.resultat = null;
          this.quizEtudiant.note = 0;
          this.quizEtudiant.dateDebut = null;
          this.quizEtudiant.dateFin = null;
          this.quizEtudiant.etudiant = this.login.etudiant;
          this.service.insertQuizEtudiant().subscribe();
          this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
        }
    );*/
    this.quizEtudiant.quiz = this.selectedQuiz;
    this.quizEtudiant.resultat = null;
    this.quizEtudiant.note = 0;
    this.quizEtudiant.dateDebut = null;
    this.quizEtudiant.dateFin = null;
    this.quizEtudiant.etudiant = this.login.etudiant;
    this.service.insertQuizEtudiant().subscribe();
    this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
    this.start();
  }

  //////////////////Start/////////
  public start()
  {
    if(this.numQuestion > 0)
    {
      if(this.selected.typeDeQuestion.ref == 't4')
      {
        if(this.correctMistakeAnswer == this.correctAnswers[0].lib)
        {
          this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          this.noteQst = this.selected.pointReponseJuste;
        }
        else {
          this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          this.noteQst = this.selected.pointReponsefausse;
        }
      }
      /*this.service.findQuizBySection(640).subscribe(
          data => {
            this.service.findQuizEtudiant(this.login.etudiant, data).subscribe(
                dataQuizEtudiant =>{
                  this.reponseEtudiant.note = this.noteQst;
                  this.reponseEtudiant.quizEtudiant = dataQuizEtudiant;
                  this.service.insertReponseEtudiant(this.reponseEtudiant).subscribe();
                }
            );
          }
      );*/

      this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(
          dataQuizEtudiant =>{
            this.reponseEtudiant.note = this.noteQst;
            this.reponseEtudiant.quizEtudiant = dataQuizEtudiant;
            this.service.insertReponseEtudiant(this.reponseEtudiant).subscribe();
          }
      );
    }
    this.numQuestion = this.numQuestion + 1;
    this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
        data => {
          this.items = data;
          if(this.numQuestion > this.items.length)
          {
            document.getElementById('result').style.visibility= 'visible';
            document.getElementById('bodyRadio').style.visibility= 'hidden';
            document.getElementById('bodyRadio').style.height= '0px';
          }
        }
    );
    if(this.numQuestion > this.items.length && this.numQuestion > 1)
    {
      document.getElementById('result').style.visibility= 'visible';
      document.getElementById('question').style.visibility= 'hidden';
      document.getElementById('question').style.height= '0px';
      document.getElementById('answers').style.visibility= 'hidden';
      document.getElementById('answers').style.height= '0px';
      document.getElementById('mistake').style.visibility= 'hidden';
      document.getElementById('mistake').style.height= '0px';
      this.quizEtudiant.note = this.noteQuiz;
      if(this.noteQuiz >= this.selectedQuiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'validé';
      }
      else {
        this.quizEtudiant.resultat = 'non validé';
      }
      this.quizEtudiant.note = this.noteQuiz;
      //this.service.updateQuizEtudiant().subscribe();
    }
    this.button = 'Don\'t know';
    this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
        data => {
          this.selected = data;
          this.service.findReponses(this.selected.id).subscribe(
              dataAnswers => {
                this.reponses = dataAnswers;
              }
          );
          this.service.findCorrectAnswers(this.selected.id).subscribe(
              data => {
                this.correctAnswers = data;
              }
          );
          if(this.selected.typeDeQuestion.ref == 't1')
          {
            this.question1 = '';
            this.question2 = '';
            this.answer = '_____';
            document.getElementById('myAnswer').style.color = 'black';
            document.getElementById('mistake').style.visibility = 'hidden';
            document.getElementById('mistake').style.height = '0px';
            document.getElementById('question').style.visibility = 'visible';
            document.getElementById('question').style.height = 'auto';
            document.getElementById('answers').style.visibility = 'visible';
            document.getElementById('answers').style.height = 'auto';
            this.isSelected = false;
            for(let i = 0 ; i < this.selected.libelle.length ; i++)
            {
              if(this.selected.libelle[i] == '.' && this.selected.libelle[i+1] == '.' && this.selected.libelle[i+2] == '.')
              {
                this.debutBlink = i;
                for (let j = i + 2 ; i < this.selected.libelle.length ; j++)
                {
                  if(this.selected.libelle[j] != '.')
                  {
                    this.finBlink = j;
                    break;
                  }
                }
                break;
              }
            }
            for(let i = 0 ; i < this.debutBlink ; i++)
            {
              this.question1 = this.question1 + this.selected.libelle[i];

            }
            for(let i = this.finBlink ; i < this.selected.libelle.length ; i++)
            {
              this.question2 = this.question2 + this.selected.libelle[i];
            }
          }
          else if(this.selected.typeDeQuestion.ref == 't4')
          {
            this.correctMistakeAnswer = null;
            document.getElementById('mistake').style.visibility = 'visible';
            document.getElementById('mistake').style.height = 'auto';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
          }
        }
    );
  }

  public selectionChanged(event: any,reponse: Reponse): void
  {
    if(this.selected.typeDeQuestion.ref == 't1')
    {
      this.question1 = '';
      this.question2 = '';
      this.answer = reponse.lib;
      this.button = 'Next';
      this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
          data => {
            this.selected = data;
            for(let i = 0 ; i < this.selected.libelle.length ; i++)
            {
              if(this.selected.libelle[i] == '.' && this.selected.libelle[i+1] == '.' && this.selected.libelle[i+2] == '.')
              {
                this.debutBlink = i;
                for (let j = i + 2 ; i < this.selected.libelle.length ; j++)
                {
                  if(this.selected.libelle[j] != '.')
                  {
                    this.finBlink = j;
                    break;
                  }
                }
                break;
              }
            }
            for(let i = 0 ; i < this.debutBlink ; i++)
            {
              this.question1 = this.question1 + this.selected.libelle[i];
            }
            for(let i = this.finBlink ; i < this.selected.libelle.length ; i++)
            {
              this.question2 = this.question2 + this.selected.libelle[i];
            }
          }
      );
      if(this.correctAnswers[0].id == reponse.id)
      {
        document.getElementById('myAnswer').style.color = '#1af045';
        if (!this.isSelected) {
          this.noteQst = this.selected.pointReponseJuste;
          this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          this.reponseEtudiant.reponse = reponse;
          this.isSelected = true;
        }
      }
      else {
        document.getElementById('myAnswer').style.color = 'red';
        if (!this.isSelected) {
          this.noteQst = this.selected.pointReponsefausse;
          this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          this.isSelected = true;
        }
      }
    }

  }

  correctMistake()
  {
    if(this.correctMistakeAnswer.length > 0)
    {
      this.button = 'Next';
    }
    else {
      this.button = 'Don\'t know';
    }
  }

}
