import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService, ExchangeResponse } from '../../services/currency.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {
  exchangeForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  result: ExchangeResponse | null = null;

  // Lista de monedas más comunes
  currencies = [
    { code: 'USD', name: 'Dólar Estadounidense' },
    { code: 'EUR', name: 'Euro' },
    { code: 'PEN', name: 'Sol Peruano' },
    { code: 'GBP', name: 'Libra Esterlina' },
    { code: 'JPY', name: 'Yen Japonés' },
    { code: 'CAD', name: 'Dólar Canadiense' },
    { code: 'AUD', name: 'Dólar Australiano' },
    { code: 'CHF', name: 'Franco Suizo' },
    { code: 'CNY', name: 'Yuan Chino' },
    { code: 'MXN', name: 'Peso Mexicano' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.exchangeForm = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.min(0.01)]],
      monedaOrigen: ['USD', Validators.required],
      monedaDestino: ['PEN', Validators.required]
    });
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() { return this.exchangeForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // Detener si el formulario es inválido
    if (this.exchangeForm.invalid) {
      return;
    }

    // Validar que las monedas no sean iguales
    if (this.f['monedaOrigen'].value === this.f['monedaDestino'].value) {
      this.error = 'La moneda de origen y destino no pueden ser iguales';
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = null;

    const exchangeRequest = {
      monto: parseFloat(this.f['monto'].value),
      monedaOrigen: this.f['monedaOrigen'].value,
      monedaDestino: this.f['monedaDestino'].value
    };

    this.currencyService.processExchange(exchangeRequest)
      .subscribe({
        next: (response) => {
          this.result = response;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al procesar el intercambio. Verifique que las monedas sean válidas.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
  }

  swapCurrencies(): void {
    const origen = this.f['monedaOrigen'].value;
    const destino = this.f['monedaDestino'].value;

    this.f['monedaOrigen'].setValue(destino);
    this.f['monedaDestino'].setValue(origen);
  }

  resetForm(): void {
    this.exchangeForm.reset({
      monto: '',
      monedaOrigen: 'USD',
      monedaDestino: 'PEN'
    });
    this.result = null;
    this.error = '';
    this.submitted = false;
  }
}
