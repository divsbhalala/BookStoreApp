import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const books = [
          { id: 1, name: 'Socketing', authors: 'Josh' , numberOfPages: 10, dateOfPub: '2018-01-01' },
          { id: 2, name: 'JAVA Programming', authors: 'Hue' , numberOfPages: 12, dateOfPub: '2018-01-01' },
          { id: 3, name: 'Web Desingin', authors: 'Dankan' , numberOfPages: 13, dateOfPub: '2018-01-01' },
          { id: 4, name: 'Software Testing', authors: 'Divs' , numberOfPages: 14, dateOfPub: '2018-01-01' },
          { id: 5, name: 'Software Testing 1', authors: 'Divs' , numberOfPages: 14, dateOfPub: '2018-01-01' },
          { id: 6, name: 'Socketing', authors: 'Josh' , numberOfPages: 10, dateOfPub: '2018-01-01' },
          { id: 7, name: 'JAVA Programming', authors: 'Hue' , numberOfPages: 12, dateOfPub: '2018-01-01' },
          { id: 8, name: 'Web Desingin', authors: 'Dankan' , numberOfPages: 13, dateOfPub: '2018-01-01' },
          { id: 9, name: 'Software Testing', authors: 'Divs' , numberOfPages: 14, dateOfPub: '2018-01-01' },
          { id: 10, name: 'Artificial Intelligence', authors: 'Josh' , numberOfPages: 10, dateOfPub: '2018-01-01' },
          { id: 11, name: 'Socketing', authors: 'Josh' , numberOfPages: 10, dateOfPub: '2018-01-01' },
          { id: 12, name: 'JAVA Programming', authors: 'Hue' , numberOfPages: 12, dateOfPub: '2018-01-01' },
          { id: 13, name: 'Web Desingin', authors: 'Dankan' , numberOfPages: 13, dateOfPub: '2018-01-01' },
          { id: 14, name: 'Software Testing', authors: 'Divs' , numberOfPages: 14, dateOfPub: '2018-01-01' },
          { id: 15, name: 'Software Testing 1', authors: 'Divs' , numberOfPages: 14, dateOfPub: '2018-01-01' },
          { id: 16, name: 'Socketing', authors: 'Josh' , numberOfPages: 10, dateOfPub: '2018-01-01' },
          { id: 17, name: 'JAVA Programming', authors: 'Hue' , numberOfPages: 12, dateOfPub: '2018-01-01' },
          { id: 18, name: 'Web Desingin', authors: 'Dankan' , numberOfPages: 13, dateOfPub: '2018-01-01' },
          { id: 19, name: 'Software Testing', authors: 'Divs' , numberOfPages: 14, dateOfPub: '2018-01-01' },
      ];
      return { books };
  }
}

