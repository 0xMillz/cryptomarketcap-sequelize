import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Asset extends Model<Asset> {
  @Column({
    unique: true,
    type: DataType.STRING,
    allowNull: false,
  })
  id: string;

  @Column({
    unique: true,
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  price: string;
}
