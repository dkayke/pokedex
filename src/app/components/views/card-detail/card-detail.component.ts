import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, CardItem } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  constructor(
    private cardService: CardsService,
    private route: ActivatedRoute) { }

  card: CardItem;
  hasError: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.cardService.find(id).subscribe(
      (response: Card) => { this.card = response.card; },
      () => { this.hasError = true }
    );
  }

}
