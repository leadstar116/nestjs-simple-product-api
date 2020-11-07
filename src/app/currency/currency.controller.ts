import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CurrencyService } from './Currency.service';

@ApiTags('currencies')
@Controller()
export class CurrencyController {
  private CurrencyService: CurrencyService = CurrencyService.getInstance();

  @Get()
  @ApiOperation({ description: 'Get all Currencies' })
  public async getAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.CurrencyService.all());
  }
}
