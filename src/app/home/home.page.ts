import { Component, ViewEncapsulation } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

    
  sounds = {
    sound1: new Tone.Player("./mp3/kick_01.wav").toMaster(),
    sound2: new Tone.Player("./mp3/hat_01.wav").toMaster(),
    sound3: new Tone.Player("./mp3/clap_01.wav").toMaster(),
    sound4: new Tone.Player("./mp3/achord_01.wav").toMaster(),
    sound5: new Tone.Player("./mp3/achord_02.wav").toMaster(),
    sound6: new Tone.Player("./mp3/achord_03.wav").toMaster(),
    sound7: new Tone.Player("./mp3/vox_01.wav").toMaster(),
    sound8: new Tone.Player("./mp3/vox_02.wav").toMaster(),
    sound9: new Tone.Player("./mp3/vox_03.wav").toMaster(),
    sound10: new Tone.Player("./mp3/anote_01.wav").toMaster(),
    sound11: new Tone.Player("./mp3/anote_02.wav").toMaster(),
    sound12: new Tone.Player("./mp3/anote_03.wav").toMaster()
  }


  pad1() { Tone.context.resume().then(() => { this.sounds.sound1.start() }) }
  pad2() { Tone.context.resume().then(() => { this.sounds.sound2.start() }) }
  pad3() { Tone.context.resume().then(() => { this.sounds.sound3.start() }) }
  pad4() { Tone.context.resume().then(() => { this.sounds.sound4.start() }) }
  pad5() { Tone.context.resume().then(() => { this.sounds.sound5.start() }) }
  pad6() { Tone.context.resume().then(() => { this.sounds.sound6.start() }) }
  pad7() { Tone.context.resume().then(() => { this.sounds.sound7.start() }) }
  pad8() { Tone.context.resume().then(() => { this.sounds.sound8.start() }) }
  pad9() { Tone.context.resume().then(() => { this.sounds.sound9.start() }) }
  pad10() { Tone.context.resume().then(() => { this.sounds.sound10.start() }) }
  pad11() { Tone.context.resume().then(() => { this.sounds.sound11.start() }) }
  pad12() { Tone.context.resume().then(() => { this.sounds.sound12.start() }) }

  constructor() { 
  }
  
}
