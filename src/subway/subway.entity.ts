import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subway extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inout_tag: string;

  @Column()
  week_tag: string;

  @Column()
  subwayename: string;

  @Column()
  station_cd: string;

  @Column()
  station_nm: string;

  @Column()
  fr_code: string;

  @Column()
  lefttime: string;
}
