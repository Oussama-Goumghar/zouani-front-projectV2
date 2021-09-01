import { Component, OnInit } from '@angular/core';
import {QuizEtudiantService} from '../../../controller/service/quiz-etudiant.service';
import {LoginService} from '../../../controller/service/login.service';
import {Reponse} from '../../../controller/model/reponse.model';
import {ReponseEtudiant} from '../../../controller/model/reponse-etudiant.model';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {Quiz} from '../../../controller/model/quiz.model';
import {Question} from '../../../controller/model/question.model';
import {QuizEtudiant} from '../../../controller/model/quiz-etudiant.model';
import {VocabularyService} from '../../../controller/service/vocabulary.service';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
import {Router} from '@angular/router';
import {DictionaryService} from '../../../controller/service/dictionary.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ParcoursService} from '../../../controller/service/parcours.service';
import {HttpClient} from '@angular/common/http';
import {Dictionary} from '../../../controller/model/dictionary.model';
import {EtudiantCours} from '../../../controller/model/etudiant-cours.model';
import {Section} from '../../../controller/model/section.model';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.scss']
})
export class QuizTakeComponent implements OnInit {

  constructor(private service: QuizEtudiantService, private login: LoginService, private messageService: MessageService, private router: Router, private dictionnaryService: DictionaryService, private sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private parcoursservice: ParcoursService, private http: HttpClient, private  vocab: VocabularyService) {
  }

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
  private _numeroQuestion: number;
  question1 = '';
  question2 = '';
  debutBlink = 0;
  finBlink = 0;
  answer = '_____';
  answerCorrect = '';
  isSelected: boolean;
  correctMistakeAnswer: string;
  private _disable: boolean;
  myAnswerCorrectMistake: string;
  trueAnswerCorrectMistake: string;
  image: string;
  ref: string;
  private _myanswers: Array<string>;
  private _correctanswers: Array<string>;
  private _questionanswers: Array<string>;
  private _numberofword: Array<string>;
  word = '';
  correctMistakeNumber: number;
  j: number;
  private _answerCorrectOrFalse: Array<boolean>;
  isChecked: boolean;
  translate: string;
  question= '';
  wordDictionnary: string;
  filteredDict: any[];
  nodes: TreeNode[];
  menu: MenuItem[];

  get answerCorrectOrFalse(): Array<boolean> {
    if(this._answerCorrectOrFalse == null)
    {
      this._answerCorrectOrFalse = new Array<boolean>();
    }
    return this._answerCorrectOrFalse;
  }

  set answerCorrectOrFalse(value: Array<boolean>) {
    this._answerCorrectOrFalse = value;
  }

  get myanswers(): Array<string> {
    if (this._myanswers == null) {
      this._myanswers = new Array<string>();
    }
    return this._myanswers;
  }

  set myanswers(value: Array<string>) {
    this._myanswers = value;
  }


  get correctanswers(): Array<string> {
    if (this._correctanswers == null) {
      this._correctanswers = new Array<string>();
    }
    return this._correctanswers;
  }

  set correctanswers(value: Array<string>) {
    this._correctanswers = value;
  }

  get questionanswers(): Array<string> {
    if (this._questionanswers == null) {
      this._questionanswers = new Array<string>();
    }
    return this._questionanswers;
  }

  set questionanswers(value: Array<string>) {
    this._questionanswers = value;
  }


  get numberofword(): Array<string> {
    return this._numberofword;
  }

  set numberofword(value: Array<string>) {
    if (this._numberofword == null) {
      this._numberofword = new Array<string>();
    }
    this._numberofword = value;
  }

  get disable(): boolean {
    return this._disable;
  }

  set disable(value: boolean) {
    this._disable = value;
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
    if (this._selectedValueCheckbox == null) {
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

  get selectedDict(): Dictionary {
    return this.dictionnaryService.selectedDict;
  }

  set selectedDict(value: Dictionary) {
    this.dictionnaryService.selectedDict = value;
  }

  get itemsDict(): Array<Dictionary> {
    return this.dictionnaryService.itemsDict;
  }

  set itemsDict(value: Array<Dictionary>) {
    this.dictionnaryService.itemsDict = value;
  }

  get submittedDict(): boolean {
    return this.dictionnaryService.submittedDict;
  }
  set submittedDict(value: boolean) {
    this.dictionnaryService.submittedDict = value;
  }

  get createDialogDict(): boolean {
    return this.dictionnaryService.createDialogDict;
  }

  set createDialogDict(value: boolean) {
    this.dictionnaryService.createDialogDict = value;
  }

  set itemssection2(value: Array<Section>) {
    this.parcoursservice.itemssection2 = value;
  }
  get itemssection2(): Array<Section> {
    return this.parcoursservice.itemssection2;
  }

  get selectedsection(): Section {
    return this.parcoursservice.selectedsection;
  }
  get section(): Section {
    return this.service.section;
  }

  set section(value: Section) {
    this.service.section = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selectedsection(value: Section) {
    this.parcoursservice.selectedsection = value;
  }

  get quizEtudiantList(): QuizEtudiant {
    return this.service.quizEtudiantList;
  }

  set quizEtudiantList(value: QuizEtudiant) {
    this.service.quizEtudiantList = value;
  }

  get passerQuiz(): string {
    return this.service.passerQuiz;
  }

  set passerQuiz(value: string) {
    this.service.passerQuiz = value;
  }

  get quizView(): boolean {
    return this.service.quizView;
  }

  set quizView(value: boolean) {
    this.service.quizView = value;
  }

  get selectedDictionnary(): Dictionary {
    return this.dictionnaryService.selected;
  }

  set selectedDictionnary(value: Dictionary) {
    this.dictionnaryService.selected = value;
  }

  get submittedDictEdit(): boolean {
    return this.dictionnaryService.submittedDictEdit;
  }

  set submittedDictEdit(value: boolean) {
    this.dictionnaryService.submittedDictEdit = value;
  }

  get editDialogDict(): boolean {
    return this.dictionnaryService.editDialogDict;
  }

  set editDialogDict(value: boolean) {
    this.dictionnaryService.editDialogDict = value;
  }

  ngOnInit(): void {
    this.quizEtudiant = new QuizEtudiant();
    this.numQuestion = 0;
    this.noteQuiz = 0;
    this.etudiant = this.login.etudiant;
    this.service.findAllQuestions(this.selectedQuiz.ref).subscribe(
        data => {
          this.items = data;
        }
    );
    this.quizEtudiant.quiz = this.selectedQuiz;
    this.quizEtudiant.resultat = null;
    this.quizEtudiant.note = 0;
    this.quizEtudiant.dateDebut = null;
    this.quizEtudiant.dateFin = null;
    this.quizEtudiant.etudiant = this.login.etudiant;
    this.service.insertQuizEtudiant().subscribe();
    this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
    this.start();
    this.dictionnaryService.FindAllWord().subscribe(
        data => {
          this.itemsDict = data;
        });
    this.menu = [
      { icon: 'pi pi-list', command: (event) => {
          this.parcoursservice.affichelistSection().subscribe(
              data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
              });
          document.getElementById('word').style.visibility = 'hidden';
          document.getElementById('word').style.height = '0px';

          document.getElementById('categoriess').style.visibility = 'visible';

          document.getElementById('categoriess').style.width = '100%';
          document.getElementById('categoriess').style.height = '100%';
          document.getElementById('categ').style.height = '100%';
          document.getElementById('chat').style.visibility = 'hidden';
        }}, {icon: 'pi pi-fw pi-comments', command: (event) => {
          document.getElementById('categoriess').style.visibility = 'hidden';
          document.getElementById('categoriess').style.height = '0px';
          document.getElementById('word').style.visibility = 'hidden';
          document.getElementById('word').style.height = '0px';
          document.getElementById('chat').style.visibility = 'visible';
        }},
      { icon: 'pi pi-book', style: {width: '50%'}, command: (event) => {
          this.dictionnaryService.FindAllWord().subscribe(
              data => {
                this.itemsDict = data;
              });
          document.getElementById('categoriess').style.visibility = 'hidden';
          document.getElementById('categoriess').style.height = '0px';
          document.getElementById('word').style.visibility = 'visible';
          document.getElementById('word').style.width = '100%';
          document.getElementById('word').style.height = '100%';
          document.getElementById('wrd').style.height = '100%';
          document.getElementById('chat').style.visibility = 'hidden';
        }},
    ];
  }

  //////////////////Start/////////
  public start() {
    this.trueAnswerCorrectMistake = '';
    this.myAnswerCorrectMistake = '';
    this.answerCorrect = '';
    this.disable = false;
    this.isChecked = false;
    this.answerCorrectOrFalse = new Array<boolean>();
    document.getElementById('translate-correct-mistake').style.visibility = 'hidden';
    document.getElementById('myAnswer').style.textDecoration = 'none';
    document.getElementById('tooltiptext').style.visibility = 'hidden';
    if (this.numQuestion > 0) {
      if (this.selected.typeDeQuestion.ref == 't4') {
        if (this.correctMistakeAnswer == this.correctAnswers[0].lib) {
          this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          this.noteQst = this.selected.pointReponseJuste;
        } else {
          this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          this.noteQst = this.selected.pointReponsefausse;
        }
      }

      this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(
          dataQuizEtudiant => {
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
          if (this.numQuestion > this.items.length) {
            document.getElementById('result').style.visibility = 'visible';
            document.getElementById('bodyRadio').style.visibility = 'hidden';
            document.getElementById('bodyRadio').style.height = '0px';
          }
        }
    );
    if (this.numQuestion > this.items.length && this.numQuestion > 1) {
      this.myanswers = new Array<string>();
      this.correctanswers = new Array<string>();
      this.questionanswers = new Array<string>();
      for (let i = 0; i < this.myanswers.length; i++) {
        if (this.myanswers[i] == this.correctanswers[i] && this.myanswers[i] == this.questionanswers[i]) {
          this.answerCorrectOrFalse.push(true);
          document.getElementById('span-output-' + i).style.color = '#0a80bb';
          document.getElementById('span-output-' + i).style.textDecoration = 'none';
          document.getElementById('span-correct-' + i).style.visibility = 'hidden';
        } else if (this.myanswers[i] == this.correctanswers[i] && this.myanswers[i] != this.questionanswers[i]) {
          this.answerCorrectOrFalse.push(true);
          document.getElementById('span-output-' + i).style.color = '#1af045';
          document.getElementById('span-output-' + i).style.textDecoration = 'none';
          document.getElementById('span-correct-' + i).style.visibility = 'hidden';
        } else {
          this.answerCorrectOrFalse.push(false);
          document.getElementById('span-output-' + i).style.color = 'red';
          document.getElementById('span-output-' + i).style.textDecoration = 'line-through';
          document.getElementById('span-correct-' + i).style.visibility = 'visible';
        }
      }
      console.log(this.answerCorrectOrFalse);
      document.getElementById('result').style.visibility = 'visible';
      document.getElementById('question').style.visibility = 'hidden';
      document.getElementById('question').style.height = '0px';
      document.getElementById('answers').style.visibility = 'hidden';
      document.getElementById('answers').style.height = '0px';
      document.getElementById('mistake').style.visibility = 'hidden';
      document.getElementById('mistake').style.height = '0px';
      document.getElementById('header').style.visibility = 'hidden';
      document.getElementById('float-input-correct-mistake').style.visibility = 'hidden';
      document.getElementById('div-output').style.visibility = 'hidden';
      document.getElementById('output-correct-mistake').style.visibility = 'hidden';

      this.isChecked = false;
      this.service.findQuizEtudiant(this.etudiant, this.selectedQuiz).subscribe(
          data => {
            this.quizEtudiant = data;
            this.quizEtudiant.note = this.noteQuiz;
            if (this.noteQuiz >= this.selectedQuiz.seuilReussite) {
              this.quizEtudiant.resultat = 'validé';
              this.image = 'https://media.istockphoto.com/vectors/congratulations-greeting-sign-congrats-graduated-vector-id1148641884?k=6&m=1148641884&s=170667a&w=0&h=su9WLQGWgcHmCjBwkVLEg6hWDH0eQLcmynVYfHQOFl0=';
            } else {
              this.quizEtudiant.resultat = 'non validé';
              this.image = 'data:image/png;base64,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'
            }
            this.quizEtudiant.note = this.noteQuiz;
            this.quizEtudiant.id = this.quizEtudiant.id;
            this.service.updateQuizEtudiant().subscribe();
          }
      );
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
          if (this.selected.typeDeQuestion.ref == 't1') {
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
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
            for (let i = 0; i < this.selected.libelle.length; i++) {
              if (this.selected.libelle[i] == '.' && this.selected.libelle[i + 1] == '.' && this.selected.libelle[i + 2] == '.') {
                this.debutBlink = i;
                for (let j = i + 2; i < this.selected.libelle.length; j++) {
                  if (this.selected.libelle[j] != '.') {
                    this.finBlink = j;
                    break;
                  }
                }
                break;
              }
            }
            for (let i = 0; i < this.debutBlink; i++) {
              this.question1 = this.question1 + this.selected.libelle[i];

            }
            for (let i = this.finBlink; i < this.selected.libelle.length; i++) {
              this.question2 = this.question2 + this.selected.libelle[i];
            }
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
          } else if (this.selected.typeDeQuestion.ref == 't4') {
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.correctMistakeAnswer = null;
            document.getElementById('mistake').style.visibility = 'visible';
            document.getElementById('mistake').style.height = 'auto';
            document.getElementById('question').style.visibility = 'hidden';
            document.getElementById('question').style.height = '0px';
            document.getElementById('answers').style.visibility = 'hidden';
            document.getElementById('answers').style.height = '0px';
            document.getElementById('float-input-correct-mistake').style.visibility = 'visible';
            document.getElementById('div-output').style.visibility = 'hidden';
            document.getElementById('output-correct-mistake').style.visibility = 'hidden';
            this.answerCorrectOrFalse = new Array<boolean>();
            for(let i = 0 ; i < this.myanswers.length ; i++)
            {
              this.answerCorrectOrFalse.push(true);
            }
            this.isChecked = false;
          }
        }
    );
  }


/////////////////////// radio ///////////////
  public selectionChanged(event: any, reponse: Reponse): void {
    if (this.selected.typeDeQuestion.ref == 't1') {
      this.question1 = '';
      this.question2 = '';
      this.question = '';
      this.answer = reponse.lib;
      this.button = 'Next';
      this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
          data => {
            this.selected = data;
            for (let i = 0; i < this.selected.libelle.length; i++) {
              if (this.selected.libelle[i] == '.' && this.selected.libelle[i + 1] == '.' && this.selected.libelle[i + 2] == '.') {
                this.debutBlink = i;
                for (let j = i + 2; i < this.selected.libelle.length; j++) {
                  if (this.selected.libelle[j] != '.') {
                    this.finBlink = j;
                    break;
                  }
                }
                break;
              }
            }
            for (let i = 0; i < this.debutBlink; i++) {
              this.question1 = this.question1 + this.selected.libelle[i];
              this.question = this.question + this.selected.libelle[i];
            }
            this.question + this.correctAnswers[0].lib;
            for (let i = this.finBlink; i < this.selected.libelle.length; i++) {
              this.question2 = this.question2 + this.selected.libelle[i];
              this.question = this.question + this.selected.libelle[i];
            }
          }
      );
      if (this.correctAnswers[0].id == reponse.id) {
        document.getElementById('myAnswer').style.color = '#1af045';
        if (!this.isSelected) {
          this.noteQst = this.selected.pointReponseJuste;
          this.noteQuiz = this.noteQuiz + this.selected.pointReponseJuste;
          this.isSelected = true;
        }
      } else {
        document.getElementById('myAnswer').style.color = 'red';
        document.getElementById('myAnswer').style.textDecoration = 'line-through';
        document.getElementById('tooltiptext').style.visibility = 'visible';
        this.answerCorrect = this.correctAnswers[0].lib;
        if (!this.isSelected) {
          this.noteQst = this.selected.pointReponsefausse;
          this.noteQuiz = this.noteQuiz + this.selected.pointReponsefausse;
          this.isSelected = true;
        }
      }
      this.reponseEtudiant.reponse = reponse;
      this.reponseEtudiant.answer = null;
      this.disable = true;
    }
    /*this.question = this.question + this.question1 ;
    this.question = this.question + this.correctAnswers[0].lib ;
    this.question = this.question + this.question2 ;
    this.service.translate(this.question).subscribe(
        data => {
          this.translate = data;
    }
    );
    */
    document.getElementById('output-correct-mistake').style.visibility = 'hidden';
  }

  ///////////////// correct mistake /////////
  checkCorrectMistake() {
    this.check();
    this.check();
  }



  check() {
    this.j = -1;
    this.word = '';
    this.myanswers = new Array<string>();
    this.correctanswers = new Array<string>();
    this.questionanswers = new Array<string>();
    this.numberofword = new Array<string>();
    this.correctMistakeNumber = 0;
    if (this.selected.typeDeQuestion.ref == 't4') {
      this.correctMistakeAnswer = this.selected.libelle;
      if (this.correctMistakeAnswer == this.correctAnswers[0].lib) {
        this.trueAnswerCorrectMistake = this.correctMistakeAnswer;
      } else {
        this.trueAnswerCorrectMistake = this.correctAnswers[0].lib;
        this.myAnswerCorrectMistake = this.correctMistakeAnswer;
      }
      /////////////////////// my answer ///////////
      for (let i = this.correctMistakeNumber; i < this.correctMistakeAnswer.length; i++) {
        if (this.correctMistakeAnswer[i] == ' ') {
          this.correctMistakeNumber = i;
          this.myanswers.push(this.word);
          this.j = this.j + 1;
          this.numberofword.push(this.j.toString());
          this.word = '';
          continue;
        } else {
          this.word = this.word + this.correctMistakeAnswer[i];
        }
        if (i == this.correctMistakeAnswer.length - 1) {
          this.myanswers.push(this.word);
          this.j = this.j + 1;
          this.numberofword.push(this.j.toString());
          this.word = '';
          continue;
        }
      }
      this.correctMistakeNumber = 0;
      this.word = '';


      /////////////////////// correct answer ///////////
      for (let i = this.correctMistakeNumber; i < this.correctAnswers[0].lib.length; i++) {
        if (this.correctAnswers[0].lib[i] == ' ') {
          this.correctMistakeNumber = i;
          this.correctanswers.push(this.word);
          this.word = '';
          continue;
        } else {
          this.word = this.word + this.correctAnswers[0].lib[i];
        }
        if (i == this.correctAnswers[0].lib.length - 1) {
          this.correctanswers.push(this.word);
          this.word = '';
          continue;
        }
      }
      this.correctMistakeNumber = 0;
      this.word = '';


      /////////////////////// question ///////////
      this.service.findQuestion(this.selectedQuiz.ref, this.numQuestion).subscribe(
          data => {
            for (let i = this.correctMistakeNumber; i < data.libelle.length; i++) {
              if (data.libelle[i] == ' ') {
                this.correctMistakeNumber = i;
                this.questionanswers.push(this.word);
                this.word = '';
                continue;
              } else {
                this.word = this.word + data.libelle[i];
              }
              if (i == data.libelle.length - 1) {
                this.questionanswers.push(this.word);
                this.word = '';
                continue;
              }
            }
            this.isChecked = true;
            for (let i = 0; i < this.myanswers.length; i++) {
              if (this.myanswers[i] == this.correctanswers[i] && this.myanswers[i] == this.questionanswers[i]) {
                this.answerCorrectOrFalse.push(true);
                document.getElementById('span-output-' + i).style.color = '#0a80bb';
                document.getElementById('span-output-' + i).style.textDecoration = 'none';
                document.getElementById('span-correct-' + i).style.visibility = 'hidden';
              } else if (this.myanswers[i] == this.correctanswers[i] && this.myanswers[i] != this.questionanswers[i]) {
                this.answerCorrectOrFalse.push(true);
                document.getElementById('span-output-' + i).style.color = '#1af045';
                document.getElementById('span-output-' + i).style.textDecoration = 'none';
                document.getElementById('span-correct-' + i).style.visibility = 'hidden';
              } else {
                this.answerCorrectOrFalse.push(false);
                document.getElementById('span-output-' + i).style.color = 'red';
                document.getElementById('span-output-' + i).style.textDecoration = 'line-through';
                document.getElementById('span-correct-' + i).style.visibility = 'visible';
              }
            }
          }
      );
    }
    this.service.translate(this.correctAnswers[0].lib).subscribe(
        data => {
          this.translate = data;
        }
    );
    this.disable = true;
    this.reponseEtudiant.reponse = null;
    this.reponseEtudiant.answer = this.correctMistakeAnswer;
    document.getElementById('translate-correct-mistake').style.visibility = 'visible';
    document.getElementById('float-input-correct-mistake').style.visibility = 'hidden';
    document.getElementById('div-output').style.visibility = 'visible';
    document.getElementById('div-output').style.marginTop = '-100px';
  }



  correctMistake() {
    if (this.correctMistakeAnswer == this.selected.libelle) {
      this.button = 'Don\'t know';
    } else if (this.correctMistakeAnswer != this.selected.libelle && this.selected.libelle.length > 0) {
      this.button = 'Next';
    }
  }

  public findByWord(){
    this.dictionnaryService.FindByWord(this.wordDictionnary).subscribe(
        data=>{
          this.selectedDict = data;
          //document.getElementById('dictionary').style.visibility = 'visible';
        },error => console.log('erreeeeeeeeeeeeeeeeur') );
    //document.getElementById('dictionary').style.visibility = 'visible';
  }

  filterDict(event) {
    const filtered: any[] = [];
    const query = event.query;

    // tslint:disable-next-line:prefer-for-of
    for(let i = 0; i < this.itemsDict.length; i++) {
      const dict = this.itemsDict[i];
      // tslint:disable-next-line:triple-equals
      if (dict.word.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(dict);
      }
    }

    this.filteredDict = filtered;
  }

  public openCreateDict() {
    this.submittedDict = false;
    this.createDialogDict = true;
    this.selectedDict = new Dictionary();
  }

  public Section(libelle: string){
    this.parcoursservice.afficheSection(libelle).subscribe(
        data=> {
          this.selectedsection = data;
          this.service.findQuizBySectionId(this.selectedsection).subscribe(
              data => {
                this.selectedQuiz = data;
                this.service.findQuizEtudiant(this.login.etudiant, this.selectedQuiz).subscribe(
                    data => {
                      this.quizEtudiantList = data;
                      console.log(this.quizEtudiantList);
                      this.passerQuiz = 'View Quiz';
                      this.quizView = true;
                    },error =>
                    {
                      this.passerQuiz = 'Passer Quiz';
                      this.quizView = false;
                    }
                );
              },
          );
        },error => console.log('erreeeeeeeeeeeeeeeeur') );
    this.router.navigate(['/pages/etudiantsimulatesections']);
  }

  public dictEdit(dict: Dictionary){
    this.selectedDictionnary = dict;
    if(this.selectedDictionnary.word != null){
      this.submittedDictEdit = false;
      this.editDialogDict = true;
    }
  }

  public sound(word: string){
    const text = encodeURIComponent(word);
    const url = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text + '&tl=En-gb';
    const audio = new Audio(url);
    audio.play();
  }


}
