
export class Article {
  id: number;
  title: string;
  text: string;

  constructor(obj: any = {}) {
    this.title = obj.title || '';
    this.text = obj.text || '';
  }
}
