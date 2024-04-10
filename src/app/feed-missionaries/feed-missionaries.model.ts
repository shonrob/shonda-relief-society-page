export class Meal {
  constructor(
    public _id: string,
    public name: string,
    public date: Date,
    public time: string,
    public phoneNumber: string,
    public address: string
  ) {}
}
