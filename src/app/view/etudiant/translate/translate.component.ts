import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LoginService} from '../../../controller/service/login.service';
import {DictionaryService} from '../../../controller/service/dictionary.service';
import {Dictionary} from '../../../controller/model/dictionary.model';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(private messageService: MessageService,
              private serviceUser: LoginService,
              private confirmationService: ConfirmationService, private dictionnaryService: DictionaryService) {
  }
  get listSynonymes(): Array<any> {
    return this.dictionnaryService.listSynonymes;
  }

  set listSynonymes(value: Array<any>) {
    this.dictionnaryService.listSynonymes = value;
  }
  get Synonymes(): Array<any> {
    return this.dictionnaryService.Synonymes;
  }

  set Synonymes(value: Array<any>) {
    this.dictionnaryService.Synonymes = value;
  }
  public hideTranslateDialog() {
    this.TranslateSynonymeDialog = false;
    this.submittedDict = false;
  }
  ngOnInit(): void {
  }
  get selected(): Dictionary {
    return this.dictionnaryService.selected;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set selected(value: Dictionary) {
    this.dictionnaryService.selected = value;
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

  get submitted(): boolean {
    return this.dictionnaryService.submitted;
  }

  set submitted(value: boolean) {
    this.dictionnaryService.submitted = value;
  }
  get TranslateSynonymeDialog(): boolean {
    return this.dictionnaryService.TranslateSynonymeDialog;
  }

  set TranslateSynonymeDialog(value: boolean) {
    this.dictionnaryService.TranslateSynonymeDialog = value;
  }

}
