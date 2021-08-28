import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SectionItemModel} from '../../../../../controller/model/section-item.model';
import * as url from 'url';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  @Input() current:SectionItemModel=null
  image:string="https://drive.google.com/uc?export=view&id=1k_v1w04p_9JkbPZdPwjTGRY-00IktME4"
  selected:boolean=false
  cureentResponse:string=""

  constructor(private messageService: MessageService) { }


  ngOnInit(): void {
    console.log(this.current.imageUrl);
  }

  checkResponse() {
    this.selected=true
    document.getElementById("imageDiv").style.filter="blur(0px)"
    document.getElementById("imageDiv").style.webkitFilter="blur(0px)"
    this.messageService.clear()

    if (this.cureentResponse === '') {
      this.messageService.add({severity: 'warn', summary: 'HEY??', detail: 'You didn\'t write anything '});
    }else {
      if (this.cureentResponse == this.current.response) {
        this.messageService.add({severity: 'success', summary: 'GOOD', detail: 'your answer is correct'});
      } else {
        this.messageService.add({severity:'error', summary:'OOPS!!', detail:'your answer is incorrect'});
      }
    }
  }

  reloadComponent() {
    document.getElementById("imageDiv").style.filter="blur(8px)"
    document.getElementById("imageDiv").style.webkitFilter="blur(8px)"
    this.messageService.clear()
    this.selected=false
    this.cureentResponse=""
  }

}
