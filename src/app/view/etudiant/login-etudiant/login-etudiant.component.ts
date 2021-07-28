import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {Prof} from '../../../controller/model/prof.model';
import {Admin} from '../../../controller/model/admin.model';
import {Etudiant} from '../../../controller/model/etudiant.model';

@Component({
  selector: 'app-login-etudiant',
  templateUrl: './login-etudiant.component.html',
  styleUrls: ['./login-etudiant.component.scss']
})
export class LoginEtudiantComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: LoginService) {

  }
  private _role: string;
  private _login: string;
  private _password: string;
  private _correct: boolean;

  get model(): any[] {
    return this.service.model;
  }

  set model(value: any[]) {
    this.service.model = value;
  }

  get correct(): boolean {
    return this._correct;
  }

  set correct(value: boolean) {
    this._correct = value;
  }


  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get prof(): Prof {
    return this.service.prof;
  }

  set prof(value: Prof) {
    this.service.prof = value;
  }

  get admin(): Admin {
    return this.service.admin;
  }

  set admin(value: Admin) {
    this.service.admin = value;
  }

  get etudiant(): Etudiant {
    return this.service.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.service.etudiant = value;
  }

  public findEtudiant()
  {

    this.service.findEtudiant(this.login, this.password).subscribe(
        data => {
          this.etudiant = data;
          this.admin = null;
          this.prof = null;
          console.log(this.etudiant);
          this.correct = true;
          this.model = [
            {label: 'Courses ', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages/etudiantparcours']},
            {label: 'FAQ ', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/faq-student']},
            {label: 'News ', icon: 'pi pi-fw pi-clock', routerLink: ['/pages/news-student']},
            {label: 'LogOut ', icon: 'pi pi-fw pi-sign-out', routerLink: ['']},
            ];
        },
            error =>
        {
          document.getElementById('log-pass').style.visibility = 'visible';
          this.correct = false;
        });
  }

  public choose()
  {
    document.getElementById('log-pass').style.visibility = 'hidden';
  }

  ngOnInit(): void {
  }

}
