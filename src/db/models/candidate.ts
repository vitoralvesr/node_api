import { DataTypes, Model, Optional } from 'sequelize';
import IModelBase from '../../interface/IModelBase';
import { sequelize } from '../connection';

interface CandidateAttributes {
  id: number;
  name: string;
  gender: string;
  birthdate: string;
  cpf: string;
  nationality: string;
  resume: string;
};

/*
  tell Sequelize and TypeScript that the property id is optional at creation time
*/
export interface CandidateInput
  extends Optional<CandidateAttributes, 'id'> { };

export interface CandidateOutput
  extends Required<CandidateAttributes>, IModelBase { };

interface CandidateInstance
  extends Model<CandidateAttributes, CandidateInput>,
  CandidateAttributes,
  IModelBase { };

const Candidate = sequelize.define<CandidateInstance>(
  'candidate',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cpf: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nationality: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }
);

export default Candidate;
