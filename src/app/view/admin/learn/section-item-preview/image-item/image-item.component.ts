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
  constructor(private messageService: MessageService) { }
  image:string="https://drive.google.com/uc?export=view&id=1k_v1w04p_9JkbPZdPwjTGRY-00IktME4"

  ngOnInit(): void {
    console.log(this.current.imageUrl);
  }

  checkResponse() {
    document.getElementById("diveShow").style.visibility="visible"
    document.getElementById("imageDiv").style.filter="blur(0px)"
    document.getElementById("imageDiv").style.webkitFilter="blur(0px)"


    this.messageService.clear()
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'})
  }
}
