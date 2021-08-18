import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../controller/service/quiz.service';
import {ConfirmationService, MessageService, TreeNode} from 'primeng/api';
import {Router} from '@angular/router';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {Question} from '../../../controller/model/question.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {Reponse} from '../../../controller/model/reponse.model';
import {TypeDeQuestion} from '../../../controller/model/type-de-question.model';
import {Section} from '../../../controller/model/section.model';

@Component({
  selector: 'app-quiz-update',
  templateUrl: './quiz-update.component.html',
  styleUrls: ['./quiz-update.component.scss']
})
export class QuizUpdateComponent implements OnInit {

  constructor(private service: QuizService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private serviceParcours: ParcoursService) { }
  cols: any[];
  num: number = 0;
  numQuestion: number = -1;
  nodes: TreeNode[];
  question2: Question;
  numeroQuestion : string = '';
  deleteNumber: number;
  isUpdate= 'false';
  ref: string;
  oldAnswers: Array<Reponse>;
  reponseExiste = 'false';
  answerExiste = 'false';
  private _answer : Reponse;


    get answer(): Reponse {
        if(this._answer == null)
        {
            this._answer = new Reponse();
        }
        return this._answer;
    }

    set answer(value: Reponse) {
        this._answer = value;
    }

    get questionNumero(): number {
    return this.service.questionNumero;
  }

  set questionNumero(value: number) {
    this.service.questionNumero = value;
  }

  get reponseNumero(): number {
    return this.service.reponseNumero;
  }

  set reponseNumero(value: number) {
    this.service.reponseNumero = value;
  }

  get question(): Question {
    return this.service.question;
  }

  set question(value: Question) {
    this.service.question = value;
  }
  get questions(): Array<Question> {
    return this.service.questions;
  }
  get selected(): Quiz {
    return this.service.selected;
  }

  set selected(value: Quiz) {
    this.service.selected = value;
  }
  get reponse(): Reponse {

    return this.service.reponse;
  }
  get refQuiz(): string {
    return this.service.refQuiz;
  }

  set refQuiz(value: string) {
    this.service.refQuiz = value;
  }
  get reponses(): Array<Reponse> {
    if (this.service.question.reponses == null){
      this.service.question.reponses = new Array<Reponse>();
    }
    return this.service.question.reponses;
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
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  public deleteCard(index: number) {
    return this.service.deleteCard(index);
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
  get sections(): Array<Section> {
    return this.service.sections;
  }


  ngOnInit(): void {
    this.service.findType().subscribe(
        data => {
          this.service.types = data;
        }, error1 => {
          console.log('can\'t bring data from database');
        }
    );
    // this.service.findSections().subscribe(data => this.service.sections = data);
    this.insertToTree();
    /*


    */
    this.initCol();
    this.question = new Question();
      this.service.findQuizSection(this.selectedsection.id).subscribe(
          data => {
              this.selected = data;
              this.service.findQuestionByQuiz(this.selected).subscribe(
                  dataquestion => {
                      this.selected.questions = dataquestion;
                      this.question.numero = dataquestion.length + 1;
                  }
              );
          }
      );
    this.question.numero = this.selected.questions.length + 1;
    this.reponse.numero = 1;
    this.reponse.etatReponse = 'true';
    this.question.pointReponseJuste = 1;
    this.question.pointReponsefausse = 0;
  }

  insertToTree()
  {
      this.service.findQuizSection(this.selectedsection.id).subscribe(
          data => {
              this.selected = data;
              this.ref = this.selected.ref;
              this.service.findQuestionByQuiz(this.selected).subscribe(
                  dataquestion => {
                      this.selected.questions = dataquestion;
                      this.questionNumero = dataquestion.length + 1;
                      for (let i = 0 ; i < this.selected.questions.length ; i++)
                      {
                          this.service.findAnswersByQuestion(this.selected.questions[i]).subscribe(
                              dataanswers => {
                                  this.selected.questions[i].reponses = dataanswers;
                                  this.nodes = [];
                                  for(let i = 0 ; i < this.selected.questions.length ; i++)
                                  {
                                      if(this.selected.questions[i].reponses.length == 1)
                                      {
                                          this.nodes.push(
                                              {
                                                  key: this.selected.questions[i].id.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                                                  children: [
                                                      {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                                                  ]
                                              },
                                          );
                                      }
                                      else if(this.selected.questions[i].reponses.length == 2)
                                      {
                                          this.nodes.push(
                                              {
                                                  key: this.selected.questions[i].id.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                                                  children: [
                                                      {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                                                  ]
                                              },
                                          );
                                      }
                                      else if(this.selected.questions[i].reponses.length == 3)
                                      {
                                          this.nodes.push(
                                              {
                                                  key: this.selected.questions[i].id.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                                                  children: [
                                                      {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[2].etatReponse + ' )',  type: 'url'},
                                                  ]
                                              },
                                          );
                                      }
                                      else if(this.selected.questions[i].reponses.length == 4)
                                      {
                                          this.nodes.push(
                                              {
                                                  key: this.selected.questions[i].id.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                                                  children: [
                                                      {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[2].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[3].lib + '\t (' + this.selected.questions[i].reponses[3].etatReponse + ' )',  type: 'url'}
                                                  ]
                                              },
                                          );
                                      }
                                      else if(this.selected.questions[i].reponses.length == 5)
                                      {
                                          this.nodes.push(
                                              {
                                                  key: this.selected.questions[i].id.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
                                                  children: [
                                                      {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[2].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[3].lib + '\t (' + this.selected.questions[i].reponses[3].etatReponse + ' )',  type: 'url'},
                                                      {label: this.selected.questions[i].reponses[4].lib + '\t (' + this.selected.questions[i].reponses[4].etatReponse + ' )',  type: 'url'}
                                                  ]
                                              },
                                          );
                                      }
                                  }
                              }
                          );
                      }
                  }
              );
          }
      );

  }
  defaultchecked() {
    return this.service.defaultchecked();
  }


  checked(event) {
    return this.service.checked(event);
  }

  public checkedFalse(event: any) {
    return this.service.checkedFalse(event);
  }

  public choixSelected(): void {
    this.service.choixSelected();
  }

  public quizSelected(): void {
    this.service.quizSelected();
  }

  public clone(question: Question)
  {
    let myClone = new Question();
    myClone.reponses = question.reponses;
    myClone.libelle = question.libelle;
    myClone.numero = question.numero;
    myClone.id = question.id;
    myClone.quiz = this.selected;
    myClone.ref = question.ref;
    myClone.pointReponsefausse = question.pointReponsefausse;
    myClone.pointReponseJuste = question.pointReponseJuste;
    myClone.typeDeQuestion = question.typeDeQuestion;
    return myClone;
  }


  update(key: string)
  {
      this.reponse.numero = this.reponseNumero;
    this.numeroQuestion = key;
      this.service.findQuestionById(key).subscribe(
          data => {
              this.question = data;
              this.reponses.length = 0;
              this.service.findAnswersByQuestionId(key).subscribe(
                  dataAnswers => {
                      this.oldAnswers = dataAnswers;
                      for(var i = 0 ; i < dataAnswers.length ; i++)
                      {
                          this.reponses.push(dataAnswers[i]);
                      }
                      this.reponseNumero = dataAnswers.length + 1;
                  }
              );
          }
      );

    this.isUpdate = 'true';
  }

  deleteQuestion(key: string)
  {
    /*this.deleteNumber = Number(key);
    this.selected.questions.splice(this.deleteNumber,1);
    for(let i = this.deleteNumber ; i < this.selected.questions.length ; i++)
    {
      this.selected.questions[i].numero = this.selected.questions[i].numero - 1;
    }
    this.nodes = [];
    for(let i = 0 ; i < this.selected.questions.length ; i++)
    {
      if(this.selected.questions[i].reponses.length == 1)
      {
        this.nodes.push(
            {
              key: i.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
              children: [
                {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
              ]
            },
        );
      }
      else if(this.selected.questions[i].reponses.length == 2)
      {
        this.nodes.push(
            {
              key: i.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
              children: [
                {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
              ]
            },
        );
      }
      else if(this.selected.questions[i].reponses.length == 3)
      {
        this.nodes.push(
            {
              key: i.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
              children: [
                {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[2].etatReponse + ' )',  type: 'url'},
              ]
            },
        );
      }
      else if(this.selected.questions[i].reponses.length == 4)
      {
        this.nodes.push(
            {
              key: i.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
              children: [
                {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[2].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[3].lib + '\t (' + this.selected.questions[i].reponses[3].etatReponse + ' )',  type: 'url'}
              ]
            },
        );
      }
      else if(this.selected.questions[i].reponses.length == 5)
      {
        this.nodes.push(
            {
              key: i.toString() ,label: 'Question ' + this.selected.questions[i].numero + ' : ' + this.selected.questions[i].libelle + ' ( ' + this.selected.questions[i].typeDeQuestion.lib + ' ) ',
              children: [
                {label: this.selected.questions[i].reponses[0].lib + '\t (' + this.selected.questions[i].reponses[0].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[1].lib + '\t (' + this.selected.questions[i].reponses[1].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[2].lib + '\t (' + this.selected.questions[i].reponses[2].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[3].lib + '\t (' + this.selected.questions[i].reponses[3].etatReponse + ' )',  type: 'url'},
                {label: this.selected.questions[i].reponses[4].lib + '\t (' + this.selected.questions[i].reponses[4].etatReponse + ' )',  type: 'url'}
              ]
            },
        );
      }
    }*/
      this.service.deleteQuestion(key).subscribe(
          data => {
              this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Question deleted',
                  life: 3000
              });
              this.insertToTree();
          }
      );
    this.questionNumero = this.selected.questions.length + 1;
    this.reponseNumero = 1;
    this.question.numero = this.questionNumero;
    this.reponse.numero = this.reponseNumero;
    this.reponse.etatReponse = 'true';
  }

  public addFormule() {

    if(this.isUpdate == 'false')
    {
        console.log(this.selected);
        this.question.quiz = this.selected;
        this.service.saveQuetion().subscribe(
            data => {
                this.insertToTree();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Question Created',
                    life: 3000
                });
            }
        );
      //this.selected.questions.push(this.clone(this.question));

      //console.log(this.selected.questions);
      this.question = new Question();
      this.questionNumero = this.questionNumero + 1;
      this.reponseNumero = 1;
      this.question.numero = this.questionNumero;
      this.reponse.numero = this.reponseNumero;
      this.reponse.etatReponse = 'true';
      this.question.pointReponseJuste = 1;
      this.question.pointReponsefausse = 0;
    }

    else
    {
      this.service.updateQuestion().subscribe(
          data => {
              this.insertToTree();
              this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Question Created',
                  life: 3000
              });
          }
      );
      for(let i = 0 ; i < this.oldAnswers.length ; i++)
      {
          this.reponseExiste = 'false';
          for(let j = 0 ; j < this.reponses.length ; j++)
          {
              if(this.oldAnswers[i] == this.reponses[j])
              {
                  this.reponseExiste = 'true';
              }
          }
          if(this.reponseExiste == 'false') {
              this.service.deleteAnswer(this.oldAnswers[i].id).subscribe();
          }
      }
        for(let i = 0 ; i < this.reponses.length ; i++)
        {
            this.answerExiste = 'false';
            for(let j = 0 ; j < this.oldAnswers.length ; j++)
            {
                if(this.oldAnswers[j] == this.reponses[i])
                {
                    this.answerExiste = 'true';
                }
            }
            if(this.answerExiste == 'false') {
                this.answer.numero = this.reponses[i].numero;
                this.answer.etatReponse = this.reponses[i].etatReponse;
                this.answer.lib = this.reponses[i].lib;
                this.service.findQuestionById(this.numeroQuestion).subscribe(
                    data => {
                        this.answer.question = data;
                        this.service.saveAnswer(this.answer).subscribe();

                    }
                );
            }
        }
        this.insertToTree();
      this.question = new Question();
      this.questionNumero = this.selected.questions.length + 1;
      this.reponseNumero = 1;
      this.question.numero = this.questionNumero;
      this.reponse.numero = this.reponseNumero;
      this.question.pointReponseJuste = 1;
      this.question.pointReponsefausse = 0;
      this.reponse.etatReponse = 'true';
      this.isUpdate = 'false';
    }


  }

  get selectedsection(): Section {
    return this.service.sectionSelected;
  }

  /*set sectionSelected(value: Section) {
      this.service.sectionSelected = value;
  }*/

    deleteQuiz()
    {
        this.service.deleteQuiz(this.ref).subscribe(
            data=>{
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Quiz Created',
                    life: 3000
                });
                this.router.navigate(['/pages/parcours']);
            }
        );
    }
    saveQuiz()
    {
        console.log(this.selected);
        this.selected.ref = 'quiz-' + 640;
        this.selected.section.id =  640;
        console.log(this.selected.section.id);
        this.service.refQuiz = this.service.selected.ref;
        this.service.save().subscribe(
            data => {
                console.log('save hada');
                this.items.push({...data});
                console.log(this.questions);
                console.log(this.items);
                this.question = null;
                this.selected = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Quiz Created',
                    life: 3000
                });
            });
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

  public save() {
        console.log(this.selectedsection);
        this.selected.section = this.selectedsection;
        this.deleteQuiz();
        //this.delay(10000).then(any => {this.saveQuiz()});
  }

  public updateQuiz(){
        this.service.updateQuiz().subscribe(
            data => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Quiz detail updated',
                    life: 3000
                });
            }
        );
  }



  public edit() {
    if (this.question.id) {
      this.questions[this.service.findIndexById(this.question.id)] = this.question;
      this.service.edit().subscribe(data => {
        this.question = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Question Updated',
          life: 3000
        });
      });
      this.question = new Question();
    }
  }





  public addReponse() {
    return this.service.addReponse();
  }
  delete(reponse: Reponse) {
    this.service.delete(reponse );
  }
  public openConfig(){
    this.createDialog = true;
  }


  shuffle(reponses: Array<Reponse>) {
    return this.service.shuffle(reponses);
  }

  public itemChecked(event: any) {
    return this.service.itemChecked(event);
  }
  private initCol() {
    this.cols = [
      {field: 'lib', header: 'Libelle Reponse'},
      {field: 'etatReponse', header: 'Correct'},
    ];
  }

  validateForm() {
    return this.service.validateForm();
  }

  openPreview() {
    this.router.navigate(['/view/quiz-preview']);
  }

}
