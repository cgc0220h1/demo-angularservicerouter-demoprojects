import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'service',
      meaning: 'Dịch vụ'
    },
    {
      key: 'service provider',
      meaning: 'Nhà cung cấp dịch vụ'
    },
    {
      key: 'provide',
      meaning: 'Cung cấp'
    },
    {
      key: 'efficient',
      meaning: 'Hiệu quả'
    },
    {
      key: 'snow',
      meaning: 'Tuyết'
    }
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const wordFound = this.words.find(item => item.key === word.toLocaleLowerCase());
    if (wordFound) {
      return wordFound.meaning;
    }
    return 'Not Found';
  }

  getAll(): Array<IWord> {
    return this.words;
  }
}
