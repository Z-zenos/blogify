import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  soundPath = '../../assets/sounds';

  buttonSound = new Audio(`${this.soundPath}/button.mp3`);

  keySounds = [
    new Audio(`${this.soundPath}/key1.mp3`),
    new Audio(`${this.soundPath}/key2.mp3`),
    new Audio(`${this.soundPath}/key3.mp3`),
    new Audio(`${this.soundPath}/key4.mp3`)
  ];

  constructor() { }

  button() {
    this.buttonSound.play();
  }

  typeSound() {
    let i = Math.floor(Math.random() * this.keySounds.length);
    this.keySounds[i].currentTime = 0;
    this.keySounds[i].play();
  }
}
