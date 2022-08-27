import { readFile } from 'fs';

import { EntityRepository, Repository } from 'typeorm';

import { Subway } from './subway.entity';

@EntityRepository(Subway)
export class SubwayRepository extends Repository<Subway> {
  async createData() {
    readFile('../testing.json', 'utf8', (error, jsonFile) => {
      if (error) return console.error(error);

      const jsonData = JSON.parse(jsonFile);
      jsonData.forEach(element => {
        console.log(element);
      });
    });
  }
}
