import { Injectable } from '@angular/core';
import {Prof} from '../model/prof.model';
import {Admin} from '../model/admin.model';
import {Etudiant} from '../model/etudiant.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private url = 'http://localhost:8036/learn/';
  private _prof: Prof;
  private _admin: Admin;
  private _etudiant: Etudiant;
  private _model: any[];


  get model(): any[] {
    return this._model;
  }

  set model(value: any[]) {
    this._model = value;
  }

  get prof(): Prof {
    if (this._prof == null){
      this._prof = new Prof();
    }
    return this._prof;
  }

  set prof(value: Prof) {
    this._prof = value;
  }

  get admin(): Admin {
    return this._admin;
  }

  set admin(value: Admin) {
    this._admin = value;
  }

  get etudiant(): Etudiant {
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  public findProf(username: string, password: string): Observable<Prof>
  {
    return this.http.get<Prof>('http://localhost:8036/learn/prof/login/' + username + '/password/' + password);
  }

  public findEtudiant(username: string, password: string): Observable<Etudiant>
  {
    return this.http.get<Etudiant>('http://localhost:8036/learn/etudiant/login/' + username + '/password/' + password);
  }

  public findAdmin(username: string, password: string): Observable<Admin>
  {
    return this.http.get<Admin>('http://localhost:8036/learn/admin/login/' + username + '/password/' + password);
  }

  constructor(private http: HttpClient) { }
}
