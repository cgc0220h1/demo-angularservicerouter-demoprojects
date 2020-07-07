import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryService} from '../services/dictionary.service';
import {AuthService} from '../guard/auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];

  constructor(private dict: DictionaryService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.listWord = this.dict.getAll();
  }

}
