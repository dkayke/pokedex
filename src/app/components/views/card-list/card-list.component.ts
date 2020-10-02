import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Cards, { CardItem } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { CustomPaginator } from 'src/assets/utils/customers.utils'

type EventPaginator = {
  previousPageIndex: number,
  pageIndex: number,
  pageSize: number,
  length: number
}

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class CardListComponent implements OnInit {

  constructor(
    private cardService: CardsService,
    private router: Router
  ) { }

  cards: CardItem[] = [];
  static pageIndex: number;

  ngOnInit(): void {
    if (!CardListComponent.pageIndex) {
      CardListComponent.pageIndex = 1;
    }

    this.cardService.all(CardListComponent.pageIndex).subscribe((response: Cards) => {
      this.cards = response.cards;
    })
  }

  get pageIndex() {
    return CardListComponent.pageIndex;
  }

  navigate(event: EventPaginator) {
    console.log(event)
    this.cardService.all(event.pageIndex + 1).subscribe((response: Cards) => {
      CardListComponent.pageIndex = event.pageIndex + 1;
      this.cards = response.cards;
    })
  }

  detail(id: string): void {
    console.log(id);
    this.router.navigate([`/cards/${id}`]);
  }

}
