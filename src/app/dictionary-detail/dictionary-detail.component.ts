import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/IWord';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../services/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dict: DictionaryService
  ) {
  }

  ngOnInit(): void {
    const {snapshot} = this.activatedRoute;
    const key = snapshot.paramMap.get('key');
    const meaning = this.dict.search(key);
    this.word = {key, meaning};
  }

}
