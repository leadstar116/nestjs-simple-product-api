import { Injectable } from '@nestjs/common';
import e = require('express');
import { Product } from './product.interface';
import { ConversionRate } from '../currency/currency.interface';
import { products } from '../../db/database';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class ProductService {
  static instance;
  private currencyService = CurrencyService.getInstance();

  static getInstance() {
    if(ProductService.instance) return ProductService.instance;
    ProductService.instance = new ProductService;
    return ProductService.instance;
  }

  find(id: string): Product{
    return products.find(e => e.id == id);
  }

  all(currency: string) {
    const rate: ConversionRate = this.currencyService.getConversionRate(currency);
    if (!rate) {
      throw new Error("Can not find conversion rate!");
    }

    return products.map( product => ({
      ...product,
      price: (product.priceUSD * rate.rate).toFixed(2)
    }));
  }
}
