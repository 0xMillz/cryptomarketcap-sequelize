import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  IsUUID,
  Default,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class Exchange extends Model<Partial<Exchange>> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  uri: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  host: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  socket: boolean;
}
