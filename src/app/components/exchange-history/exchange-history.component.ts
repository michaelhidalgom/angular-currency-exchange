import { Component, OnInit } from '@angular/core';
import { CurrencyService, ExchangeResponse } from '../../services/currency.service';

@Component({
  selector: 'app-exchange-history',
  templateUrl: './exchange-history.component.html',
  styleUrls: ['./exchange-history.component.css']
})
export class ExchangeHistoryComponent implements OnInit {
  exchanges: ExchangeResponse[] = [];
  loading = false;
  error = '';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.loading = true;
    this.error = '';

    this.currencyService.getExchangeHistory()
      .subscribe({
        next: (data) => {
          this.exchanges = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al cargar el historial de intercambios';
          this.loading = false;
          console.error('Error:', error);
        }
      });
  }

  refreshHistory(): void {
    this.loadHistory();
  }
}
