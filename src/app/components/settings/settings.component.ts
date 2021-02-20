import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {Setting} from "../../models/setting";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings = {
    socialBonusBase: 0,
    socialBonusFactor: 0,
    salesBonusBase: 0,
    salesBonusFactor: 0,
    customerRatingFactor1: 0,
    customerRatingFactor2: 0,
    customerRatingFactor3: 0,
    customerRatingFactor4: 0,
    customerRatingFactor5: 0,
    evaluationRecordEntryNames: []
  };

  newEntryName = '';

  constructor(private ses: SettingsService) { }

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(){
    for(let name of Object.keys(this.settings)){
      this.ses.getSetting(name).subscribe(res => {
        if(res.status === 200) this.settings[name] = res.body.value;
      });
    }
  }

  saveSettings(){
    for(let [name, value] of Object.entries(this.settings)){
      this.ses.updateSetting(new Setting(name, value)).subscribe(res => {

      });
    }
  }

  addEntryName() {
    if (!this.settings.evaluationRecordEntryNames.includes(this.newEntryName)) {
      this.settings.evaluationRecordEntryNames.push(this.newEntryName);
      this.newEntryName = '';
    }
  }

  removeEntryName(name){
    this.settings.evaluationRecordEntryNames = this.settings.evaluationRecordEntryNames.filter(item => item !== name);
  }
}
