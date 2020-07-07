import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';
import {IWord} from '../model/IWord';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: IWord;

  constructor(private dict: DictionaryService) {
  }

  ngOnInit(): void {
  }

  search(keyword: string): IWord {
    const meanFound = this.dict.search(keyword);
    return this.word = {
      key: keyword,
      meaning: meanFound
    };
  }
}
