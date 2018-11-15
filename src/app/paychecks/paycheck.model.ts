export class Paycheck {
  id: number;
  date: string;
  type: string;
  value: number;

  constructor(id: number,
              date: string,
              type: string,
              value: number) {
    this.id = id;
    this.date = date;
    this.type = type;
    this.value = value;
  }

}
