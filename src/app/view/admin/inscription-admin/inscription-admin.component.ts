import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';


@Component({
  selector: 'app-inscription-admin',
  templateUrl: './inscription-admin.component.html',
  styleUrls: ['./inscription-admin.component.scss']
})
export class InscriptionAdminComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: AdminService) { }

  ngOnInit(): void {
  }

  public save() {
    this.submitted = true;
    this.service.save().subscribe(
        data => {
      this.selected = new Admin();
      console.log('meryem');
          // tslint:disable-next-line:no-unused-expression
      this.selected == null;
    });
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  get items(): Array<Admin> {
    return this.service.items;
  }

  set items(value: Array<Admin>) {
    this.service.items = value;
  }
  get selected(): Admin {
    return this.service.selected;
  }

  set selected(value: Admin) {
    this.service.selected = value;
  }
}
