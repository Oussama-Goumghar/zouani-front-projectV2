import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {WebSocketService} from '../../../controller/service/web-socket.service';
import {ChatMessageDto} from '../../../controller/model/chatMessageDto';
import {LoginService} from '../../../controller/service/login.service';
import {EtudiantService} from '../../../controller/service/etudiant.service';
import {Etudiant} from '../../../controller/model/etudiant.model';
import {WebSocketstudentService} from '../../../controller/service/web-socketstudent.service';
import {ProfService} from '../../../controller/service/prof.service';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit, OnDestroy {
  // chatstudents = this.servicelogin.etudiant.chatstudent;
  // profchat: ChatMessageDto[];
  today = Date.now();
  constructor(public webSocketService: WebSocketstudentService, public servicelogin: LoginService , public serviceprof: ProfService) {
  }

  ngOnInit(): void {
    this.webSocketService.findbynumero(this.servicelogin.etudiant.prof.id);
    // this.servicelogin.etudiant.prof.students[0] = null;
    // this.servicelogin.etudiant.prof.students[0].chatMessageDto = null;
    // this.webSocketService.findstudentlist(this.servicelogin.etudiant.prof.id);
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(this.servicelogin.etudiant.nom, sendForm.value.message, true);
    console.log(this.servicelogin.etudiant.prof.chatMessageDto);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
}
