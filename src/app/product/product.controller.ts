import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller()
export class ProductController {
  private productService: ProductService = ProductService.getInstance();

  @Get()
  @ApiOperation({ description: 'Get all products' })
  public async getAll(@Query('currency') currency: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json(this.productService.all(currency));
  }
}
