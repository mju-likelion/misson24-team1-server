import { readFile } from 'fs';

import { EntityRepository, Repository } from 'typeorm';

import { Subway } from './subway.entity';

@EntityRepository(Subway)
export class SubwayRepository extends Repository<Subway> {
  async test() {
    readFile('src/subway/testing.json', 'utf8', (error, jsonFile) => {
      if (error) return console.log(error);

      const jsonData = JSON.parse(jsonFile);
      jsonData.forEach(async element => {
        const a = this.create(element);
        console.log(a);
        await this.save(a);
      });
    });
  }
}
