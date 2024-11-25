import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions:DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'banana',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],

};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource