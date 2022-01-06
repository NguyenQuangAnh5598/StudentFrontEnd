export class Student {
  id: number;
  name: string;
  dOB?: any;
  avatar: string;


  constructor(name: string, dOB: string, avatar: string) {
    this.name = name;
    this.dOB = dOB;
    this.avatar = avatar;
  }

}
