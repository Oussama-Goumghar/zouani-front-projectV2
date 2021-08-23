import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
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
import {ChooseViewComponent} from '../choose-view/choose-view.component';
import {Dictionary} from '../../../../controller/model/dictionary.model';
import {DictionaryService} from '../../../../controller/service/dictionary.service';

@Pipe({ name: 'safe' })
export class SafePipe1 implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-section-simulate',
  templateUrl: './section-simulate.component.html',
  styleUrls: ['./section-simulate.component.scss']
})
export class SectionSimulateComponent implements OnInit {
  nodes: TreeNode[];
  menu: MenuItem[];
  srcImg: string;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private dictionnaryService: DictionaryService,  private router: Router, private serviceQuiz: QuizService, private sanitizer: DomSanitizer, private quizService: QuizEtudiantService,  private confirmationService: ConfirmationService, private service: ParcoursService, private http: HttpClient) { }
  value = 0;
  word: string;
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
  get itemsDict(): Array<Dictionary> {
    return this.dictionnaryService.itemsDict;
  }

  set itemsDict(value: Array<Dictionary>) {
    this.dictionnaryService.itemsDict = value;
  }

  set selectedDict(value: Dictionary) {
    this.dictionnaryService.selectedDict = value;
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
  public openCreateDict() {
    this.submittedDict = false;
    this.createDialogDict = true;
    this.selectedDict = new Dictionary();
  }
  public findByWord(){
    this.dictionnaryService.FindByWord(this.word).subscribe(
        data => {
          this.selectedDict = data;
          document.getElementById('dictionary').style.visibility = 'visible';
        }, error => console.log('erreeeeeeeeeeeeeeeeur') );
    document.getElementById('dictionary').style.visibility = 'visible';
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set selectedQuiz(value: Quiz) {
    this.quizService.selectedQuiz = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set image(value: string) {
    this.service.image = value;
  }
  ngOnInit(): void {
    // this.service.image = '';
    //  for (let j = 0; j < 76 ; j++)
    //  {
    /*this.service.image = this.selectedsection.urlImage;
    //  }
    //  this.service.image += 'preview';
    console.log('ana image ' + this.service.image + this.selectedsection.urlImage);
    this.srcImg = this.service.image;
   // this.photoURL();
    console.log(this.selectedsection.urlVideo );
   // this.srcImg = this.photoURL();
   // this.srcImg = this.service.image;
    console.log(this.srcImg);*/
    this.quizService.section.id = this.selectedsection.id;
    this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
    this.menu = [
      {label: 'Categorie', icon: 'pi pi-fw pi-home', command: (event) => {
          this.service.affichelistSection().subscribe(
              data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
              });
          document.getElementById('word').style.visibility = 'hidden';
          document.getElementById('word').style.height = '0px';

          document.getElementById('categoriess').style.visibility = 'visible';

          document.getElementById('categoriess').style.width = '100%';
          document.getElementById('categoriess').style.height = '300px';
        }},
    ];
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
  URLVideo() {
    this.service.video = '';
    // tslint:disable-next-line:prefer-for-of
   // for (let m = 0; m < 24 ; m++)
    // {
    this.service.video = this.selectedsection.urlVideo;
   // }
 //   for (let m = 32; m < 43 ; m++)
 //   {
  //  }
    console.log( this.service.video);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.video);
    return this.service.video;
  }
  photoURL() {
    this.service.image = '';
  //  for (let j = 0; j < 76 ; j++)
  //  {
    this.service.image = this.selectedsection.urlImage;
  //  }
  //  this.service.image += 'preview';
    console.log(this.service.image);
    this.srcImg = this.service.image;
    return this.srcImg;
    // const blob = UrlFetch(this.image,{headers})
  //  return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
   // return this.service.image;
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
  // tslint:disable-next-line:adjacent-overload-signatures
  get selectedDict(): Dictionary {
    return this.dictionnaryService.selectedDict;
  }
  get selectessection(): Array<Section> {
    return this.service.selectessection;
  }
  set selectessection(value: Array<Section>) {
    this.service.selectessection = value;
  }
}
