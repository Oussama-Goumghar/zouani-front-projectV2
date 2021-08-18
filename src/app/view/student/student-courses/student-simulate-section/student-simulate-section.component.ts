/* tslint:disable:no-shadowed-variable whitespace */
import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Section} from '../../../../controller/model/section.model';
import {Cours} from '../../../../controller/model/cours.model';
import {ConfirmationService, MenuItem, MessageService, TreeNode} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {HttpClient} from '@angular/common/http';
import {QuizEtudiantService} from '../../../../controller/service/quiz-etudiant.service';
import {Quiz} from '../../../../controller/model/quiz.model';
import {LoginService} from '../../../../controller/service/login.service';
import {Etudiant} from '../../../../controller/model/etudiant.model';
import {QuizEtudiant} from '../../../../controller/model/quiz-etudiant.model';
import {DictionaryService} from '../../../../controller/service/dictionary.service';
import {Dictionary} from '../../../../controller/model/dictionary.model';
import {Router} from '@angular/router';
import {VocabularyService} from '../../../../controller/service/vocabulary.service';
import {EtudiantCours} from '../../../../controller/model/etudiant-cours.model';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}


@Component({
    selector: 'app-student-simulate-section',
    templateUrl: './student-simulate-section.component.html',
    styleUrls: ['./student-simulate-section.component.scss']
})
export class StudentSimulateSectionComponent implements OnInit {
    nodes: TreeNode[];
    menu: MenuItem[];
    srcImg: string;

    // tslint:disable-next-line:max-line-lengthg max-line-length
    constructor(private messageService: MessageService, private router: Router, private dictionnaryService: DictionaryService, private sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private service: ParcoursService, private http: HttpClient, private quizService: QuizEtudiantService, private loginService: LoginService, private  vocab: VocabularyService) { }
    value = 0;
    word: string;

    get itemsDict(): Array<Dictionary> {
        return this.dictionnaryService.itemsDict;
    }

    set itemsDict(value: Array<Dictionary>) {
        this.dictionnaryService.itemsDict = value;
    }
    get image(): string {
        return this.service.image;
    }

    set image(value: string) {
        this.service.image = value;
    }
    public findByWord(){
        this.dictionnaryService.FindByWord(this.word).subscribe(
            data=>{
                this.selectedDict = data;
                document.getElementById('dictionary').style.visibility = 'visible';
            },error => console.log('erreeeeeeeeeeeeeeeeur') );
        document.getElementById('dictionary').style.visibility = 'visible';
    }
    public Section(libelle: string){
        this.service.afficheSection(libelle).subscribe(
            data=>{
                this.selectedsection = data;
                this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
                    data => {
                        this.selectedQuiz = data;
                        this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
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
    }
    get selectedDict(): Dictionary {
        return this.dictionnaryService.selectedDict;
    }
    get selectedEtudiantCours(): EtudiantCours {
        return this.service.selectedEtudiantCours;
    }

    set selectedEtudiantCours(value: EtudiantCours) {
        this.service.selectedEtudiantCours = value;
    }
    public finish() {
        this.selectedEtudiantCours.etudiant.id = this.loginService.etudiant.id;
        console.log(this.selectedEtudiantCours.etudiant.id);
        this.selectedEtudiantCours.cours.id = this.selectedcours.id;
        console.log(this.selectedEtudiantCours.cours.id);
        this.service.saveEtudiantCours().subscribe(data => {
                // @ts-ignore
                this.itemsEtudiantCours.push({...data});
            });
        this.router.navigate(['/pages/etudiantcours']);
    }
    get itemsEtudiantCours(): Array<EtudiantCours> {
        return this.service.itemsEtudiantCours;
    }

    set itemsEtudiantCours(value: Array<EtudiantCours>) {
        this.service.itemsEtudiantCours = value;
    }
    set selectedDict(value: Dictionary) {
        this.dictionnaryService.selectedDict = value;
    }
    public openCreateDict() {
        this.submittedDict = false;
        this.createDialogDict = true;
        this.selectedDict = new Dictionary();
    }
    ngOnInit(): void {
        // this.photoURL();
        this.quizService.section.id = this.selectedsection.id;
        this.quizService.findQuizSection().subscribe( data => this.selectedQuiz = data);
        this.vocab.findAllVocabSection().subscribe(data => {this.vocab.nombreVocab = data.length;
        });
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

                    document.getElementById('categoriess').style.width = '210px';
                    document.getElementById('categoriess').style.height = '300px';
                }},
            {label: 'Word', icon: 'pi pi-fw pi-search', command: (event) => {
                    this.dictionnaryService.FindAllWord().subscribe(
                        data => {
                            this.itemsDict = data;
                        });
                    document.getElementById('categoriess').style.visibility = 'hidden';
                    document.getElementById('categoriess').style.height = '0px';
                    document.getElementById('word').style.visibility = 'visible';
                    document.getElementById('word').style.width = '200px';
                    document.getElementById('word').style.height = '300px';
                }},
        ];
    }
    public findCoursEtudiant(cours: Cours) {
        this.selectedEtudiantCours.cours.id = cours.id;
        this.service.findEtudiantCours().subscribe(
           data => this.selectedEtudiantCours = data
       );
    }
    get submittedDict(): boolean {
        return this.dictionnaryService.submittedDict;
    }
    set submittedDict(value: boolean) {
        this.dictionnaryService.submittedDict = value;
    }
    Vocab(id: number) {
        console.log(id);
        this.vocab.numVocabulary = 1;
        this.vocab.idSection = id;
        console.log('id section ',  this.vocab.idSection );
        this.vocab.findAllVocabSection().subscribe(data => {this.vocab.nombreVocab = data.length;
        });
        console.log(this.vocab.nombreVocab);
        this.router.navigate(['/view/quiz-vocabulary']);
    }
    get createDialogDict(): boolean {
        return this.dictionnaryService.createDialogDict;
    }

    set createDialogDict(value: boolean) {
        this.dictionnaryService.createDialogDict = value;
    }
    get progress(): number {
        return this.service.progress;
    }
    get selectedsection(): Section {
        return this.service.selectedsection;
    }
    get section(): Section {
        return this.quizService.section;
    }

    set section(value: Section) {
        this.quizService.section = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    set selectedsection(value: Section) {
        this.service.selectedsection = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    set progress(value: number) {
        this.service.progress = value;
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
public categorie(){

    this.dictionnaryService.FindAllWord().subscribe(
        data => {
            this.itemsDict = data;
        });
    document.getElementById('categoriess').style.visibility = 'hidden';
    document.getElementById('categoriess').style.width = '0px';

    document.getElementById('word').style.width = '300px';

}
    PreviousSection() {
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.selectedsection.numeroOrder = this.selectedsection.numeroOrder - 1;
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.numeroOrder != 0){
            this.service.afficheOneSection2().subscribe(
                data => {
                    this.selectedsection = data;
                    this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
                        data => {
                            this.selectedQuiz = data;
                            this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
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
                });
        }else{
            this.selectedsection.numeroOrder = this.itemssection2.length + 1 ;
            this.NextSection();
        }
    }
    photoURL() {
        // this.service.image = '';
        //  for (let j = 0; j < 76 ; j++)
        //  {
        // this.service.image = this.selectedsection.urlImage;
        //  }
        //  this.service.image += 'preview';
        console.log(this.selectedsection.id );
        // const blob = UrlFetch(this.image,{headers})
        //  return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
        // return this.service.image;
        this.service.image = '';
        //  for (let j = 0; j < 76 ; j++)
        //  {
        this.service.image = this.selectedsection.urlImage;
        //  }
        //  this.service.image += 'preview';
        console.log(this.service.image);
        this.srcImg = this.service.image;
        return this.srcImg;

        //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.service.image);
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
    NextSection() {
        this.service.affichelistSection().subscribe(
            data => {
                this.itemssection2 = data;
                // tslint:disable-next-line:no-shadowed-variable
            });
        this.selectedsection.numeroOrder = this.selectedsection.numeroOrder + 1;
        // tslint:disable-next-line:triple-equals
        if (this.selectedsection.numeroOrder <= this.itemssection2.length ){
            this.service.afficheOneSection2().subscribe(
                data => {
                    this.selectedsection = data;
                    this.quizService.findQuizBySectionId(this.selectedsection).subscribe(
                        data => {
                            this.selectedQuiz = data;

                            this.quizService.findQuizEtudiant(this.loginService.etudiant, this.selectedQuiz).subscribe(
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
                });
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
