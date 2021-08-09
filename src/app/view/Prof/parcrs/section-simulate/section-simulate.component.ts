import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Section} from '../../../../controller/model/section.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ParcoursService} from '../../../../controller/service/parcours.service';
import {Cours} from '../../../../controller/model/cours.model';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {style} from '@angular/animations';
import {position} from 'html2canvas/dist/types/css/property-descriptors/position';
import {ChooseViewComponent} from '../choose-view/choose-view.component';

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

  srcImg: string;
  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private sanitizer: DomSanitizer, private confirmationService: ConfirmationService, private service: ParcoursService, private http: HttpClient) { }
  value = 0;
  srcvideo = 'https://www.youtube.com/embed/JGwWNGJdvx8';
  get image(): string {
    return this.service.image;
  }
  get contenu(): string {
    return this.service.contenu;
  }

  set contenu(value: string) {
    this.service.contenu = value;
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
