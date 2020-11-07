import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from 'nest-router'
import { ProductModule } from './app/product/product.module';
import { CurrencyModule } from './app/currency/currency.module';

const routes: Routes = [
  {
    path: '/',
    children: [
      {
        path: '/products',
        module: ProductModule
      },
      {
        path: '/currencies',
        module: CurrencyModule
      },
    ]
  }
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot(),
    ProductModule,
    CurrencyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
