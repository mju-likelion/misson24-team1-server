import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SubwayRepository } from './subway-repository';

@Injectable()
export class SubwayService {
  constructor(
    @InjectRepository(SubwayRepository)
    private subwayRepository: SubwayRepository,
  ) {}

  test() {
    return this.subwayRepository.createData();
  }
}
