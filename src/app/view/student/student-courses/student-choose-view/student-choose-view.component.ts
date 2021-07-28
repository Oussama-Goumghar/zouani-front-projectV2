import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../../controller/model/cours.model';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {Quiz} from '../../../../controller/model/quiz.model';
import {LoginService} from '../../../../controller/service/login.service';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';

@Component({
  selector: 'app-student-choose-view',
  templateUrl: './student-choose-view.component.html',
  styleUrls: ['./student-choose-view.component.scss']
})
export class StudentChooseViewComponent implements OnInit {
  value = 0;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: ParcoursService, private quizService: QuizEtudiantService, private loginService: LoginService) { }
  ngOnInit(): void {
  }
  public FindSection(cour: Cours) {
    this.selectedcours = cour;
    this.service.affichelistSection().subscribe(
        data => {
          this.selectesssection = data;
        });
  }
  get image(): string {
    return this.service.image;
  }

  set image(value: string) {
    this.service.image = value;
  }

  get selectedQuiz(): Quiz {
    return this.quizService.selectedQuiz;
  }

  set selectedQuiz(value: Quiz) {
    this.quizService.selectedQuiz = value;
  }

  get etudiant(): Etudiant {
    return this.loginService.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.loginService.etudiant = value;
  }

  get quizEtudiantList(): QuizEtudiant {
    return this.quizService.quizEtudiantList;
  }

  set quizEtudiantList(value: QuizEtudiant) {
    this.quizService.quizEtudiantList = value;
  }

  get passerQuiz(): string {
    return this.quizService.passerQuiz;
  }

  set passerQuiz(value: string) {
    this.quizService.passerQuiz = value;
  }

  get quizView(): boolean {
    return this.quizService.quizView;
  }

  set quizView(value: boolean) {
    this.quizService.quizView = value;
  }
  public FindSectionOneByOne(cour: Cours) {
    this.selectedcours = cour;
    let i = 0;
    i = i + 1;
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection2 = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.service.image = '';
    this.service.afficheOneSection().subscribe(
        data => {
          this.selectedsection = data;
          for (let j = 0; j < 66 ; j++)
          {
            this.service.image += this.service.selectedsection.urlImage[j];
          }
          this.service.image += 'preview';
          this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
              data => {
                this.selectedQuiz = data;
                //document.getElementById('dict1').style.visibility = 'hidden';
                //document.getElementById('quiz').style.visibility = 'visible';
                  console.log('teeeeeeeeest');
                this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
                    data => {
                      this.quizEtudiantList = data;
                      console.log(this.quizEtudiantList);
                      this.passerQuiz = 'View Quiz';
                      console.log('lqitha');
                      this.quizView = true;
                    },error =>
                    {
                      this.passerQuiz = 'Passer Quiz';
                        console.log('malqithach');
                      this.quizView = false;
                    }
                );
              },error => document.getElementById('quiz').style.visibility = 'hidden'
          );
        });
  }
  set selectesssection(value: Array<Section>) {
    this.service.selectesssection = value;
  }
  public viewType2() {
    this.viewChooseType2 = true;
  }
  get viewChooseType2(): boolean {
    return this.service.viewChooseType2;
  }
// tslint:disable-next-line:adjacent-overload-signatures
  get itemssection2(): Array<Section> {
    return this.service.itemssection2;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get itemscours(): Array<Cours> {
    return this.service.itemscours;
  }
  get selectescours(): Array<Cours> {
    return this.service.selectescours;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemscours(value: Array<Cours>) {
    this.service.itemscours = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set itemssection2(value: Array<Section>) {
    this.service.itemssection2 = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set viewChooseType2(value: boolean) {
    this.service.viewChooseType2 = value;
  }
  get selectedsection(): Section {
    return this.service.selectedsection;
  }

  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }

}
