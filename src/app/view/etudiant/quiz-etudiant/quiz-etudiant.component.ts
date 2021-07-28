import { Component, OnInit } from '@angular/core';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';
import {Reponse} from '../../../controller/model/reponse.model';
import {Question} from '../../../controller/model/question.model';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {TypeDeQuestion} from '../../../controller/model/type-de-question.model';
import {LoginService} from '../../../controller/service/login.service';

@Component({
  selector: 'app-quiz-etudiant',
  templateUrl: './quiz-etudiant.component.html',
  styleUrls: ['./quiz-etudiant.component.scss']
})
export class QuizEtudiantComponent implements OnInit {

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

      if(this.selected.typeDeQuestion.ref == 't1')
      {
          this.service.findMyAnswer(this.selectedValue).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {
                  this.myAnswer = data;
          for (let i = 0 ; i < this.correctAnswers.length ; i++)
          {
              // tslint:disable-next-line:triple-equals
              if (this.correctAnswers[i].id == this.selectedValue)
              {
                  this.noteQst = this.selected.pointReponseJuste;
                  this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
              }
              else {
                  this.noteQst = this.selected.pointReponsefausse;
                  this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
              }
          }
          this.service.findAllReponseEtudiant().subscribe(
              data => {
                  this.reponsesEtudiant = data;
                  console.log('length dyal re = ' + this.reponsesEtudiant.length);

                  this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
                  this.reponseEtudiant.note = this.noteQst;
                  this.reponseEtudiant.reponse = this.myAnswer;
                  this.reponseEtudiant.ref = 're' + (this.reponsesEtudiant.length + 1);
                  this.reponseEtudiant.id = this.reponsesEtudiant.length + 1;
                  console.log(this.reponseEtudiant);
                  this.service.insertReponseEtudiant(this.reponseEtudiant).subscribe(
                      // tslint:disable-next-line:no-shadowed-variable
                      data => {
                      }
                  );
              }
          );
              }
          );
      }
      else if (this.selected.typeDeQuestion.ref == 't2')
      {
          this.noteCheckbox = 0;
          for (let i = 0 ; i < this.correctAnswers.length ; i++)
          {
              for (let j = 0; j < this.selectedValueCheckbox.length ; j++)
              {
                  // tslint:disable-next-line:triple-equals
                  if (this.correctAnswers[i].ref == this.selectedValueCheckbox[j].ref)
                  {
                      this.noteCheckbox = this.noteCheckbox + 1;
                  }
              }
          }
          console.log('noteCheckbox = ' + this.noteCheckbox);
          if(this.noteCheckbox == this.correctAnswers.length && this.selectedValueCheckbox.length == this.correctAnswers.length)
          {
              this.noteQst = this.selected.pointReponseJuste;
              this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          }
          else
          {
              this.noteQst = this.selected.pointReponsefausse;
              this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          }
          console.log('note question = ' + this.noteQst);
          for (let j = 0; j < this.selectedValueCheckbox.length ; j++)
          {
              this.service.findAllReponseEtudiant().subscribe(
                  data => {
                      this.reponsesEtudiant = data;

                      this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
                      this.reponseEtudiant.note = (this.noteQst / this.selectedValueCheckbox.length);
                      this.reponseEtudiant.reponse = this.selectedValueCheckbox[j];
                      this.reponseEtudiant.ref = 're' + (this.reponsesEtudiant.length + 1 + j);
                      this.reponseEtudiant.id = this.reponseEtudiant.id + (this.reponsesEtudiant.length + 1);
                      console.log(this.reponseEtudiant);
                      this.service.insertReponseEtudiant(this.reponseEtudiant).subscribe(
                          // tslint:disable-next-line:no-shadowed-variable
                          data => {
                              this.numeroCheckBox = this.numeroCheckBox + 1;
                          }
                      );
                  }
              );
          }
          /*if(this.selectedValueCheckbox.length > 0)
          {
              console.log(this.selectedValueCheckbox[0]);
              this.service.findMyReponseEtudiant(this.quizEtudiant, this.selectedValueCheckbox[0]).subscribe(
                  data => {
                      console.log('lqiiitha');
                      this.selectedValueCheckbox = null;
                  },error => console.log('makainch')
              );
          }*/
      }

      this.numQuestion = this.numQuestion + 1;
      this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
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
      this.service.updateQuizEtudiant().subscribe(
          data => {
          }
      );
    }
      // tslint:disable-next-line:prefer-for-of
    this.service.findAllReponseEtudiant().subscribe(
        data => {
          this.reponsesEtudiant = data;
        }
    );
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
    this.service.findAllQuizEtudiant().subscribe(
        data => {
          this.quizsEtudiant = data;
          this.quizEtudiant.quiz = this.selectedQuiz;
          this.quizEtudiant.etudiant = this.login.etudiant;
          this.quizEtudiant.resultat = null;
          this.quizEtudiant.note = 0;
          this.quizEtudiant.id = (this.quizsEtudiant.length + 1);
          this.quizEtudiant.dateFin = null;
          this.quizEtudiant.dateDebut = null;
          this.quizEtudiant.ref = 'qe' + (this.quizsEtudiant.length + 1);

          this.service.insertQuizEtudiant().subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {

              }
          );
        }
    );
    this.numeroQuestion = this.numQuestion + 1;

    console.log('numero = ' + this.numQuestion);
    console.log('quiz = ' + this.selectedQuiz.ref);
    this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
        data => {
          this.selected = data;
          console.log(this.selected);
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
                    console.log(this.reponses)
                }
            );
            this.service.findCorrectAnswers(this.selected.id).subscribe(
                data => {
                    this.correctAnswers = data;
                    console.log(this.correctAnswers)
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
      }
  }

  ngOnInit(): void {
    /*this.service.findEtudiant().subscribe(
        data => {
          this.etudiant = data;
        }
    );*/
      this.numQuestion = 1;
      this.etudiant = this.login.etudiant;
      this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
        data => {
          this.items = data;
        }
    );
  }

}
