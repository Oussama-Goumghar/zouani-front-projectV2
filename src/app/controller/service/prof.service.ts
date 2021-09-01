/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Prof} from '../model/prof.model';
import {CategorieProf} from '../model/categorie-prof.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionCours} from '../model/session-cours.model';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private url = environment.baseUrl + 'prof/';
  private _selectedProf: Prof;
  private _itemsCategorieProf: Array<CategorieProf>;
  private _submitted: boolean;
  constructor(private http: HttpClient) { }
  public save(): Observable<number> {
    return this.http.post<number>('http://localhost:8036/learn/prof/', this.selectedProf);
  }


  public savechatmsgs(prof: Prof): Observable<number>{
    return this.http.post<number>('http://localhost:8036/learn/prof/', prof);
  }

  public findbyid(num: number): Observable<Prof>{
    return this.http.get<Prof>('http://localhost:8036/learn/prof/id/' + num);
  }
  get selectedProf(): Prof {
    if (this._selectedProf == null){
      this._selectedProf = new Prof();
    }
    return this._selectedProf;
  }

  set selectedProf(value: Prof) {
    this._selectedProf = value;
  }

  public findAllCategorieProf(): Observable<Array<CategorieProf>> {
    return this.http.get< Array<CategorieProf> >('http://localhost:8036/learn/categorieprof/');
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get itemsCategorieProf(): Array<CategorieProf> {
    if ( this._itemsCategorieProf == null){
      this._itemsCategorieProf = new Array<CategorieProf>();
    }
    return this._itemsCategorieProf;
  }

  set itemsCategorieProf(value: Array<CategorieProf>) {
    this._itemsCategorieProf = value;
  }


  }


