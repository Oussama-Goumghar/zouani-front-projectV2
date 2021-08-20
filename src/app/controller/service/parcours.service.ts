/* tslint:disable:adjacent-overload-signatures */
import { Injectable } from '@angular/core';
import {Parcours} from '../model/parcours.model';
import { HttpClient } from '@angular/common/http';
import {Cours} from '../model/cours.model';
import {Section} from '../model/section.model';
import {CategorieSection} from '../model/categorie-section.model';
import {SuperCategorieSection} from '../model/super-categorie-section.model';
import {Centre} from '../model/centre.model';
import {Observable} from 'rxjs';
import {Vocabulary} from '../model/vocabulary.model';
import {EtudiantCours} from "../model/etudiant-cours.model";



@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private _selectedparcours: Parcours;
  private _selectedEtudiantCours: EtudiantCours;
  private _itemsEtudiantCours: Array<EtudiantCours>;
  private _selecteddparcours: Parcours;
  private _itemsparcours: Array<Parcours>;
  private _itemsvocab: Array<Vocabulary>;
  private _selectesparcours: Array<Parcours>;
  private _selectescours: Array<Cours>;
  private _selectesscours: Array<Cours>;
  private _selectessection: Array<Section>;
  private _selectesssection: Array<Section>;
  private _selectedcours: Cours;
  private _itemscours: Array<Cours>;
  private _selectedsection: Section;
  private _itemscategoriesection: Array<CategorieSection>;
  private _selectedcategoriesection: CategorieSection;
  private _itemssupercategoriesection: Array<SuperCategorieSection>;
  private _selectedsupercategoriesection: SuperCategorieSection;
  private _itemssection: Array<Section>;
  private _itemssection2: Array<Section>;
  private _selectedcentre: Centre;
  private _itemscentre: Array<Centre>;
  private _itemsscentre: Array<Centre>;
  private _index: number;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _viewChooseType: boolean;
  private _viewChooseType2: boolean;
  private _submitted: boolean;
  private _createDialogCours: boolean;
  private _editDialogCours: boolean;
  private _viewDialogCours: boolean;
  private _submittedCours: boolean;
  private _createDialogSection: boolean;
  private _editDialogSection: boolean;
  private _viewDialogSection: boolean;
  private _submittedSection: boolean;
  private _progress: number;
  private _a: number;
  private _timer;
  private _image = '';
  private _contenu = '';
  private _image2 = '';
  private _image3 = '';
  private _video = '';
  private _img = '';
  constructor(private http: HttpClient ) {  }


  get selectedEtudiantCours(): EtudiantCours {
    if( this._selectedEtudiantCours == null){
      this._selectedEtudiantCours = new EtudiantCours();
    }
    return this._selectedEtudiantCours;
  }

  set selectedEtudiantCours(value: EtudiantCours) {
    this._selectedEtudiantCours = value;
  }

  get itemsEtudiantCours(): Array<EtudiantCours> {
    if ( this._itemsEtudiantCours == null){
      this._itemsEtudiantCours = new Array<EtudiantCours>();
    }
    return this._itemsEtudiantCours;
  }

  set itemsEtudiantCours(value: Array<EtudiantCours>) {
    this._itemsEtudiantCours = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get itemsvocab(): Array<Vocabulary> {
    if (this._itemsvocab == null) {
      this._itemsvocab = new Array<Vocabulary>();
    }
    return this._itemsvocab;
  }

  set itemsvocab(value: Array<Vocabulary>) {
    this._itemsvocab = value;
  }

  get video(): string {
    return this._video;
  }

  set video(value: string) {
    this._video = value;
  }

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  get image3(): string {
    return this._image3;
  }

  get viewChooseType2(): boolean {
    return this._viewChooseType2;
  }

  set viewChooseType2(value: boolean) {
    this._viewChooseType2 = value;
  }

  set image3(value: string) {
    this._image3 = value;
  }

  get image2(): string {
    return this._image2;
  }

  set image2(value: string) {
    this._image2 = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get selecteddparcours(): Parcours {
    if (this._selecteddparcours == null){
      this._selecteddparcours = new Parcours();
    }
    return this._selecteddparcours;
  }

  set selecteddparcours(value: Parcours) {
    this._selecteddparcours = value;
  }

  get itemssection2(): Array<Section> {
    if (this._itemssection2 == null){
      this._itemssection2 = new Array<Section>();
    }
    return this._itemssection2;
  }

  set itemssection2(value: Array<Section>) {
    this._itemssection2 = value;
  }

  get timer() {
    return this._timer;
  }

  set timer(value) {
    this._timer = value;
  }

  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get progress(): number {
    return this._progress;
  }

  set progress(value: number) {
    this._progress = value;
  }

  get viewChooseType(): boolean {
    return this._viewChooseType;
  }

  set viewChooseType(value: boolean) {
    this._viewChooseType = value;
  }

  get selectesscours(): Array<Cours> {
    if (this._selectesscours == null){
      this._selectesscours = new Array<Cours>();
    }
    return this._selectesscours;
  }

  set selectesscours(value: Array<Cours>) {
    this._selectesscours = value;
  }

  get selectesssection(): Array<Section> {
    if (this._selectesssection == null){
      this._selectesssection = new Array<Section>();
    }
    return this._selectesssection;
  }

  set selectesssection(value: Array<Section>) {
    this._selectesssection = value;
  }

  get selectedparcours(): Parcours {
    if (this._selectedparcours == null){
      this._selectedparcours = new Parcours();
    }
    return this._selectedparcours;
  }

  set selectedparcours(value: Parcours) {
    this._selectedparcours = value;
  }

  get itemsparcours(): Array<Parcours> {
    if (this._itemsparcours == null){
      this._itemsparcours = new Array<Parcours>();
    }
    return this._itemsparcours;
  }

  set itemsparcours(value: Array<Parcours>) {
    this._itemsparcours = value;
  }

  get selectesparcours(): Array<Parcours> {
    if (this._selectesparcours == null){
      this._selectesparcours = new Array<Parcours>();
    }
    return this._selectesparcours;
  }

  set selectesparcours(value: Array<Parcours>) {
    this._selectesparcours = value;
  }

  get selectescours(): Array<Cours> {
    if (this._selectescours == null){
      this._selectescours = new Array<Cours>();
    }
    return this._selectescours;
  }

  set selectescours(value: Array<Cours>) {
    this._selectescours = value;
  }

  get selectessection(): Array<Section> {
    if (this._selectessection == null){
      this._selectessection = new Array<Section>();
    }
    return this._selectessection;
  }

  set selectessection(value: Array<Section>) {
    this._selectessection = value;
  }

  get selectedcours(): Cours {
    if (this._selectedcours == null){
      this._selectedcours = new Cours();
    }
    return this._selectedcours;
  }

  set selectedcours(value: Cours) {
    this._selectedcours = value;
  }

  get itemscours(): Array<Cours> {
    if (this._itemscours == null){
      this._itemscours = new Array<Cours>();
    }
    return this._itemscours;
  }

  set itemscours(value: Array<Cours>) {
    this._itemscours = value;
  }

  get selectedsection(): Section {
    if (this._selectedsection == null){
      this._selectedsection = new Section();
    }
    return this._selectedsection;
  }

  set selectedsection(value: Section) {
    this._selectedsection = value;
  }

  get itemscategoriesection(): Array<CategorieSection> {
    if (this._itemscategoriesection == null){
      this._itemscategoriesection = new Array<CategorieSection>();
    }
    return this._itemscategoriesection;
  }

  set itemscategoriesection(value: Array<CategorieSection>) {
    this._itemscategoriesection = value;
  }

  get selectedcategoriesection(): CategorieSection {
    if (this._selectedcategoriesection == null){
      this._selectedcategoriesection = new CategorieSection();
    }
    return this._selectedcategoriesection;
  }

  set selectedcategoriesection(value: CategorieSection) {
    this._selectedcategoriesection = value;
  }

  get itemssupercategoriesection(): Array<SuperCategorieSection> {
    return this._itemssupercategoriesection;
  }

  set itemssupercategoriesection(value: Array<SuperCategorieSection>) {
    this._itemssupercategoriesection = value;
  }

  get selectedsupercategoriesection(): SuperCategorieSection {
    return this._selectedsupercategoriesection;
  }

  set selectedsupercategoriesection(value: SuperCategorieSection) {
    this._selectedsupercategoriesection = value;
  }

  get itemssection(): Array<Section> {
    if (this._itemssection == null){
      this._itemssection = new Array<Section>();
    }
    return this._itemssection;
  }

  set itemssection(value: Array<Section>) {
    this._itemssection = value;
  }

  get selectedcentre(): Centre {
    return this._selectedcentre;
  }

  set selectedcentre(value: Centre) {
    this._selectedcentre = value;
  }
  get itemsscentre(): Array<Centre> {
    if (this._itemsscentre == null){
      this._itemsscentre = new Array<Centre>();
    }
    return this._itemsscentre;
  }

  set itemsscentre(value: Array<Centre>) {
    this._itemsscentre = value;
  }
  get itemscentre(): Array<Centre> {
    if (this._itemscentre == null){
      this._itemscentre = new Array<Centre>();
    }
    return this._itemscentre;
  }

  set itemscentre(value: Array<Centre>) {
    this._itemscentre = value;
  }

  get createDialogSection(): boolean {
    return this._createDialogSection;
  }

  set createDialogSection(value: boolean) {
    this._createDialogSection = value;
  }

  get editDialogSection(): boolean {
    return this._editDialogSection;
  }

  set editDialogSection(value: boolean) {
    this._editDialogSection = value;
  }

  get viewDialogSection(): boolean {
    return this._viewDialogSection;
  }

  set viewDialogSection(value: boolean) {
    this._viewDialogSection = value;
  }

  get submittedSection(): boolean {
    return this._submittedSection;
  }

  set submittedSection(value: boolean) {
    this._submittedSection = value;
  }

  get createDialogCours(): boolean {
    return this._createDialogCours;
  }

  set createDialogCours(value: boolean) {
    this._createDialogCours = value;
  }

  get editDialogCours(): boolean {
    return this._editDialogCours;
  }

  set editDialogCours(value: boolean) {
    this._editDialogCours = value;
  }

  get viewDialogCours(): boolean {
    return this._viewDialogCours;
  }

  set viewDialogCours(value: boolean) {
    this._viewDialogCours = value;
  }

  get submittedCours(): boolean {
    return this._submittedCours;
  }

  set submittedCours(value: boolean) {
    this._submittedCours = value;
  }

  public deleteMultipleParcoursByid(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/parcours/delete-multiple-by-id' , this.selectesparcours);
  }
  public deleteMultipleCoursByid(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/cours/delete-multiple-by-id' , this.selectescours);
  }
  public deleteMultipleSectionByid(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/section/delete-multiple-by-id' , this.selectessection);
  }
  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }
  public updateCours(): Observable<Cours> {
    return this.http.put<Cours>('http://localhost:8036/learn/cours/', this.selectedcours);
  }
  public SaveCours(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/cours/', this.selectedcours);
  }
  public AjoutSection(id: number): Observable<number> {
    return this.http.get<number>('http://localhost:8036/learn/cours/id/' + id);
  }
  public updateSection(): Observable<Section> {
    return this.http.put<Section>('http://localhost:8036/learn/section/', this.selectedsection);

  }
  public updateParcours(): Observable<Parcours>  {
    return this.http.put<Parcours>('http://localhost:8036/learn/parcours/', this.selectedparcours);
  }
  public save(): Observable<number> {
    if (this.selecteddparcours.id == null){
      return this.http.post<number>('http://localhost:8036/learn/parcours/', this.selecteddparcours); }
  }
  public saveSection(): Observable<number> {
    if (this.selectedsection.id == null){
      return this.http.post<number>('http://localhost:8036/learn/section/', this.selectedsection); }
  }
  public saveEtudiantCours(): Observable<number> {
      return this.http.post<number>('http://localhost:8036/learn/etudiantCours/', this.selectedEtudiantCours);
  }
  public findAllEtudiantCours(): Observable<Array<EtudiantCours>> {
    return this.http.get<Array<EtudiantCours>>('http://localhost:8036/learn/etudiantCours/');
  }
  public init(): Observable<Array<Parcours>> {
    return this.http.get< Array<Parcours> >('http://localhost:8036/learn/parcours/');

  }
  public FindAllParcours(): Observable<Array<Parcours>> {
    return this.http.get< Array<Parcours> >('http://localhost:8036/learn/parcours/');

  }
  public findAllCentre(): Observable<Array<Centre>> {
    return this.http.get< Array<Centre> >('http://localhost:8036/learn/centre/');
  }
  public findAllCours(): Observable<Array<Cours>> {
    return this.http.get< Array<Cours> >('http://localhost:8036/learn/cours/');
  }
  public findEtudiantCours(): Observable<EtudiantCours> {
    // tslint:disable-next-line:max-line-length
    return this.http.get< EtudiantCours >('http://localhost:8036/learn/etudiantCours/id/' + this.selectedEtudiantCours.cours.id + '/ids/' + this.selectedEtudiantCours.etudiant.id);
  }
  public findAllSection(): Observable<Array<Section>> {
    return this.http.get< Array<Section> >('http://localhost:8036/learn/section/');
  }
  public findAllCategorieSection(): Observable< Array<CategorieSection> > {
    return this.http.get< Array<CategorieSection> >('http://localhost:8036/learn/categoriesection/');

  }
  public findAllSuperCategorieSection(): Observable< Array<SuperCategorieSection> > {
    return this.http.get< Array<SuperCategorieSection> >('http://localhost:8036/learn/supercategoriesection/');
  }
  public deleteSection(): Observable<number> {
    return this.http.delete<number>('http://localhost:8036/learn/section/id/' + this.selectedsection.id);
  }
  public deleteCours(): Observable<number>{
    return this.http.delete<number >('http://localhost:8036/learn/cours/id/' + this.selectedcours.id );

  }
  public deleteParcours(): Observable<number>{
    return  this.http.delete<number>('http://localhost:8036/learn/parcours/id/' + this.selectedparcours.id);
  }

  public findSectionIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.itemssection.length; i++) {
      if (this.itemssection[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteSectionIndexById(id: number) {
    this.itemssection.splice(this.findSectionIndexById(id), 1);
  }

  public deleteMultipleSectionIndexById() {
    for (const item of this.selectessection){
      this.deleteSectionIndexById(item.id);
    }
  }
  public findCoursIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.itemscours.length; i++) {
      if (this.itemscours[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteCoursIndexById(id: number) {
    this.itemscours.splice(this.findCoursIndexById(id), 1);
  }

  public deleteMultipleCoursIndexById() {
    for (const item of this.selectescours){
      this.deleteCoursIndexById(item.id);
    }
  }
  public findParcoursIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.itemsparcours.length; i++) {
      if (this.itemsparcours[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteParcoursIndexById(id: number) {
    this.itemsparcours.splice(this.findParcoursIndexById(id), 1);
  }

  public deleteMultipleParcoursIndexById() {
    for (const item of this.selectesparcours){
      this.deleteParcoursIndexById(item.id);
    }
  }
  public clone(parcours: Parcours): Parcours {
    const clone = new Parcours();
    clone.id = parcours.id;
    clone.code = parcours.code;
    clone.libelle = parcours.libelle;
    clone.numeroOrder = parcours.numeroOrder;
    clone.nombreCours = parcours.nombreCours;
    clone.description = parcours.description;
    clone.dateCreation = parcours.dateCreation;
    clone.datePublication = parcours.datePublication;
    clone.coursList = parcours.coursList;
    clone.centre = parcours.centre;
    return clone;
  }
  public clonecours(cours: Cours): Cours {
    const myClone = new  Cours();
    myClone.id = cours.id;
    myClone.code = cours.code;
    myClone.libelle = cours.libelle;
    myClone.numeroOrder = cours.numeroOrder;
    myClone.description = cours.description;
    myClone.image = cours.image;
    myClone.nombreLinkFinalise = cours.nombreLinkFinalise;
    myClone.nombreLinkEnCours = cours.nombreLinkEnCours;
    myClone.nombreSectionEnCours = cours.nombreSectionEnCours;
    myClone.nombreSectionFinalise = cours.nombreSectionFinalise;
    myClone.sectionList = cours.sectionList;
    myClone.parcours = cours.parcours;
    return myClone;
  }

  public clonesection(section: Section): Section{
    const myClone = new  Section();
    myClone.id = section.id;
    myClone.code = section.code;
    myClone.libelle = section.libelle;
    myClone.urlImage = section.urlImage;
    myClone.urlImage2 = section.urlImage2;
    myClone.urlImage3 = section.urlImage3;
    myClone.urlVideo = section.urlVideo;
    myClone.cours = section.cours;
    myClone.categorieSection = section.categorieSection;
    myClone.indicationProf = section.indicationProf;
    myClone.questions = section.questions;
    myClone.contenu = section.contenu;
    myClone.url = section.url;
    myClone.content = section.content;
    return myClone;
  }
  public FindCoursByParcours(): Observable<Array<Cours>> {
    return this.http.get<Array<Cours>>('http://localhost:8036/learn/cours/parcours/id/5' );
  }
  public afficheCours(): Observable<Array<Cours>> {
    return this.http.get<Array<Cours>>('http://localhost:8036/learn/cours/order/id/' + this.selectedparcours.id );
  }

  affichelistSection(): Observable<Array<Section>> {
    return this.http.get<Array<Section>>('http://localhost:8036/learn/section/order/id/' + this.selectedcours.id  );
  }
  afficheOneSection2(): Observable<Section> {
    this.selectedsection.numeroOrder = this.selectedsection.numeroOrder++;
    // tslint:disable-next-line:max-line-length
    return this.http.get<Section>('http://localhost:8036/learn/section/cours/id/' + this.selectedcours.id + '/numeroOrder/' + this.selectedsection.numeroOrder   );
  }
  afficheSection( libelle: string): Observable<Section> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Section>('http://localhost:8036/learn/section/cours/id/' + this.selectedcours.id + '/categorie/libelle/' + libelle );
  }
  afficheOneSection(): Observable<Section> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Section>('http://localhost:8036/learn/section/cours/id/' + this.selectedcours.id + '/numeroOrder/1'  );
  }
  public findSectionByLibelle(libel: string): Observable<Array<Section>> {
    return this.http.get<Array<Section>>('http://localhost:8036/learn/section/libelle/' + libel );
  }
  public findCoursByLibelle(libel: string): Observable<Array<Cours>> {
    return this.http.get<Array<Cours>>('http://localhost:8036/learn/cours/libelle/' + libel );
  }

  public findParcoursByLibelle(libel: string): Observable<Array<Parcours>> {
    return this.http.get<Array<Parcours>>('http://localhost:8036/learn/parcours/libelle/' + libel );
  }
  public findCategorieSectionByLibelle(libel: string): Observable<Array<CategorieSection>> {
    return this.http.get<Array<CategorieSection>>('http://localhost:8036/learn/categoriesection/libelle/' + libel );
  }

  public findSuperCategorieSectionByLibelle(libel: string): Observable<Array<SuperCategorieSection>> {
    return this.http.get<Array<SuperCategorieSection>>('http://localhost:8036/learn/supercategoriesection/libelle/' + libel );
  }

  public findCoursByid(id: number): Observable<Array<Cours>> {
    return  this.http.get<Array<Cours>>('http://localhost:8036/learn/cours/cours/id/' + id );
  }

  public findSectionByid(id: number): Observable<Section> {
    return this.http.get<Section>('http://localhost:8036/learn/section/section/id/' + id );
  }

}
