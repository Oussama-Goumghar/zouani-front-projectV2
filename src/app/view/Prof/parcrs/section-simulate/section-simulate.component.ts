import { Component, OnInit } from '@angular/core';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/model/cours.model';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {style} from '@angular/animations';
import {position} from 'html2canvas/dist/types/css/property-descriptors/position';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {Quiz} from '../../../../controller/model/quiz.model';
import {QuizService} from '../../../../controller/service/quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-section-simulate',
  templateUrl: './section-simulate.component.html',
  styleUrls: ['./section-simulate.component.scss']
})
export class SectionSimulateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService,  private router: Router, private serviceQuiz: QuizService, private sanitizer: DomSanitizer, private quizService: QuizEtudiantService,  private confirmationService: ConfirmationService, private service: ParcoursService, private http: HttpClient) { }
  value = 0;
  public Section(libelle: string){
    this.service.afficheSection(libelle).subscribe(
        data => {
          this.selectedsection = data;
        }, error => console.log('erreeeeeeeeeeeeeeeeur') );
  }
  get image(): string {
    return this.service.image;
  }
  set contenu(value: string) {
    this.service.contenu = value;
  }
  get contenu(): string {
    return this.service.contenu;
  }
  get selectedQuiz(): Quiz {
    return this.quizService.selectedQuiz;
  }
public quiz(){
  this.serviceQuiz.refQuiz = this.selectedQuiz.ref;
  console.log(this.serviceQuiz.refQuiz);
  this.router.navigate(['/view/quiz-preview']);
}
  set selectedQuiz(value: Quiz) {
    this.quizService.selectedQuiz = value;
  }
  public finish() {
    if (this.selectedcours.id) {
      this.selectedcours.etatCours = 'Finish';
      this.service.updateCours().subscribe(data => {
        this.selectedcours = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Cours Finish',
          life: 3000
        });
      });
    }
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set image(value: string) {
    this.service.image = value;
  }
  URLVideo() {
    this.service.video = '';
    // tslint:disable-next-line:prefer-for-of
    for (let m = 0; m < 24 ; m++)
    {
      this.service.video += this.selectedsection.urlVideo[m];
    }
    this.service.video += 'embed/';
    for (let m = 32; m < 43 ; m++)
    {
      this.service.video += this.selectedsection.urlVideo[m];
    }
    console.log( this.service.video);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.video);
  }
  ngOnInit(): void {
    console.log(this.selectedsection.id );
    console.log(this.selectedsection.urlVideo );
    this.quizService.section.id = this.selectedsection.id;
    this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
  }
  get progress(): number {
    return this.service.progress;
  }
  get selectedsection(): Section {
    return this.service.selectedsection;
  }

  set selectedsection(value: Section) {
    this.service.selectedsection = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set progress(value: number) {
    this.service.progress = value;
  }
  PreviousSection() {
    this.quizService.section.id = this.selectedsection.id;
    this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection2 = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder - 1;
    // tslint:disable-next-line:triple-equals
    if (this.selectedsection.numeroOrder != 0){
      this.service.afficheOneSection2().subscribe( data => { this.selectedsection = data; });
    }else{
      this.selectedsection.numeroOrder = this.itemssection2.length + 1;
      this.NextSection();
    }
  }
  photoURL() {
    this.service.image = '';
    for (let j = 0; j < 66 ; j++)
    {
      this.service.image += this.selectedsection.urlImage[j];
    }
    this.service.image += 'preview';
    console.log(this.selectedsection.id );
    // const blob = UrlFetch(this.image,{headers})
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
  }
  Contenu() {
    this.service.contenu = '';
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.selectedsection.contenu.length ; j++)
    {
      // tslint:disable-next-line:triple-equals
      if ( this.selectedsection.contenu[j] != '-'){
        this.service.contenu += this.selectedsection.contenu[j];
        // tslint:disable-next-line:triple-equals
      }else {
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.contenu[j] == '-') {
          this.service.contenu += '\n';
          this.service.contenu += this.selectedsection.contenu[j];
        }
      }
    }
    console.log(this.service.contenu );
    return this.service.contenu;
  }
  NextSection() {
    this.quizService.section.id = this.selectedsection.id;
    this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
    this.service.affichelistSection().subscribe(
        data => {
          this.itemssection2 = data;
          // tslint:disable-next-line:no-shadowed-variable
        });
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder + 1;
    // tslint:disable-next-line:triple-equals
    if (this.selectedsection.numeroOrder <= this.itemssection2.length ){
      this.service.afficheOneSection2().subscribe( data => { this.selectedsection = data; });
    }else{
      this.selectedsection.numeroOrder = 0;
      this.PreviousSection();
    }
  }
  set selectedcours(value: Cours) {
    this.service.selectedcours = value;
  }
  get selectedcours(): Cours{
    return this.service.selectedcours;
  }
  set itemssection2(value: Array<Section>) {
    this.service.itemssection2 = value;
  }
  get itemssection2(): Array<Section> {
    return this.service.itemssection2;
  }
  get selectessection(): Array<Section> {
    return this.service.selectessection;
  }
  set selectessection(value: Array<Section>) {
    this.service.selectessection = value;
  }
}
