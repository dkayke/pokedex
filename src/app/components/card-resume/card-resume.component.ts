import { Component, Input } from '@angular/core';
import { CardItem } from 'src/app/models/cards';

@Component({
  selector: 'app-card-resume',
  templateUrl: './card-resume.component.html',
  styleUrls: ['./card-resume.component.scss']
})
export class CardResumeComponent {

  constructor() { }

  @Input() card: CardItem;
}
