import { Injectable } from '@nestjs/common';
import e = require('express');
import { Currency, ConversionRate } from './Currency.interface';
import { currencies } from '../../db/database';
import fetch = require('node-fetch');
import { error } from 'console';

@Injectable()
export class CurrencyService {
  static instance;
  private conversionRates: Array<ConversionRate> = [];

  constructor() {
    this.getLatestConversionRates();
  }

  static getInstance() {
    if(CurrencyService.instance) return CurrencyService.instance;
    CurrencyService.instance = new CurrencyService;
    return CurrencyService.instance;
  }

  find(code: string): Currency{
    return currencies.find(e => e.code == code);
  }

  all() {
    return currencies;
  }

  getConversionRate(currency: string): ConversionRate{
    return this.conversionRates.find(rate => rate.name == currency);
  }

  getLatestConversionRates() {
    const apiUrl = process.env.CURRENCY_API_URL
      + 'latest?access_key=' + process.env.CURRENCY_API_KEY;

    try {
      fetch(apiUrl)
        .then(res => res.json())
        .then(json => {
          // 1 EUR = convertTOUSDRate USD
          const convertToUSDRate = 1 / json.rates['USD'];
          Object.keys(json.rates).map((key) => {
            this.conversionRates.push({
              name: key,
              rate: json.rates[key] * convertToUSDRate
            })
          })
        });
    } catch (e) {
      error(e);
    }
  }
}
