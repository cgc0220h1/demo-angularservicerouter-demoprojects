import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {IWord} from '../../model/IWord';
import {DictionaryService} from '../../services/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dict: DictionaryService
  ) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dict.search(key);
      this.word = {key, meaning};
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
