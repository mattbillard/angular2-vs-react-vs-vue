import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let articles = [
      {id: 11, title: 'Mr. Nice',  text: 'Text for Mr. Nice'},
      {id: 12, title: 'Narco',     text: 'Text for Narco'},
      {id: 13, title: 'Bombasto',  text: 'Text for Bombasto'},
      {id: 14, title: 'Celeritas', text: 'Text for Celeritas'},
      {id: 15, title: 'Magneta',   text: 'Text for Magneta'},
      {id: 16, title: 'RubberMan', text: 'Text for RubberMan'},
      {id: 17, title: 'Dynama',    text: 'Text for Dynama'},
      {id: 18, title: 'Dr IQ',     text: 'Text for Dr IQ'},
      {id: 19, title: 'Magma',     text: 'Text for Magma'},
      {id: 20, title: 'Tornado',   text: 'Text for Tornado'},
    ];
    return {articles};
  }
}
