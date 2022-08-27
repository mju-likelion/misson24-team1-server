import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SubwayRepository } from './subway-repository';

@Injectable()
export class SubwayService {
  constructor(
    @InjectRepository(SubwayRepository)
    private subwayRepository: SubwayRepository,
  ) {}

  test() {
    return this.subwayRepository.test();
  }

  async subway(departure) {
    console.log('departure:', departure);
    const datas = await this.subwayRepository
      .createQueryBuilder('subway')
      .where('subway.station_nm = (:departure)', { departure: departure.departure })
      .limit(2)
      .offset(0)
      .execute();
    // const data = this.subwayRepository.find({
    //   where: { station_nm: departure.departure },
    //   take: 0,
    //   skip: 2,
    // });
    console.log('datas:', datas);
    if (!datas) {
      throw new HttpException({ error: { message: '데이터가 없습니다' } }, 404);
    }
    return datas;
  }
}
