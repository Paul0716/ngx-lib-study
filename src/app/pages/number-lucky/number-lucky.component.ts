import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { data } from './data';
import { Pairs } from './interfaces/numberPairs';
import { pairsStatus } from './enum/numberStatus';

@Component({
  selector: 'app-number-lucky',
  templateUrl: './number-lucky.component.html',
  styleUrls: ['./number-lucky.component.css']
})
export class NumberLuckyComponent implements OnInit {

  checkForm: FormGroup;
  matchList: Pairs[];

  constructor(private fb: FormBuilder, private appSvc: AppService) { }

  ngOnInit() {

    this.checkForm = this.fb.group({
      mobile: ['', [Validators.required] ]
    });
  }

  /**
   * 輸入框focus之後做的動作
   *
   * @param {any} inputField
   * @memberof NumberLuckyComponent
   */
  inputFocus(inputField) {
    this.appSvc.toggleSideNav(false);
  }

  /**
   * 列出所有配對號碼狀態
   *
   * @memberof NumberLuckyComponent
   */
  listAllPairsStatus() {
    const testMobile = '09' + this.checkForm.get('mobile').value;
    const pairs = testMobile.split('').map( (o, i) => testMobile.substring(i, i + 2) );
    let result = [];
    for (const pair of pairs) {
      result = result.concat(data.filter( o => o.number === pair && pair.length === 2));
    }
    result.map( o => {
      switch (o.status) {
        case pairsStatus.Good:
          o.color = 'primary';
          break;
        case pairsStatus.Bad:
          o.color = 'warn';
          break;
        default:
          break;
      }
      return o;
    });
    this.matchList = result;
  }

}
