import { Entity } from '../../common/domain/entity';

export type CustomerConstructorProps = {
  id?: string;
  cpf: string;
  name: string;
};

export class Customer extends Entity {
  id: string;
  cpf: string;
  name: string;

  constructor(props: CustomerConstructorProps) {
    super();
    this.id = props.id;
    this.cpf = props.cpf;
    this.name = props.name;
  }

  static create(command: { cpf: string; name: string }) {
    return new Customer(command);
  }

  toJSON() {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name
    };
  }
}
