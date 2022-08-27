import { Controller, Get } from '@nestjs/common';

import { SubwayService } from './subway.service';

@Controller('subway')
export class SubwayController {
  constructor(private readonly subwayService: SubwayService) {}

  @Get('/test')
  async test() {
    return this.subwayService.test();
  }
}
