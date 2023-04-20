import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProgrammingLanguageService } from 'src/app/services/programming-language.service';



@Component({
  selector: 'blog-game-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit, AfterViewInit {
  @ViewChild("moves", { static: false }) moves?: ElementRef;
  @ViewChild("playArea", { static: false }) playArea?: ElementRef;

  pls: any = {};
  plsLength: number = 0;
  plsRandom: string[] = [];
  flipNum: number = 0;
  move: number = 0;
  numberCardsFlipped: number = 0;

  chain: any = [];
  results: any = [];

  constructor(
    private _programmingLanguageService: ProgrammingLanguageService,
    private cdref: ChangeDetectorRef
  ) {
    this.pls = _programmingLanguageService.getAllProgrammingLanguages();
    this.plsLength = _programmingLanguageService.getTotalPLs();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createRandomPLArray();
    this.cdref.detectChanges();
  }

  reset() {
    this.plsRandom = [];
    this.numberCardsFlipped = this.move = this.flipNum = 0;
    this.chain = this.results = [];
    this.moves!.nativeElement.textContent = 0;
    this.playArea!.nativeElement.classList.remove("memory__play--active");
    this.createRandomPLArray();
  }

  randomUnique(length: number, max: number): number[] {
    const arr = [];
    while (arr.length < length) {
      const r = Math.floor(Math.random() * max);
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
  }

  shuffle(arr: string[]) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
  }

  createRandomPLArray() {
    const randLetterArr = this.randomUnique(5, 26);
    console.log("random arr: ", randLetterArr);


    randLetterArr.forEach(i => {
      const letter: string = String.fromCharCode(65 + i);
      const length = this.pls[letter].length;
      const plByLetter: string[] = [];
      const randarr = this.randomUnique(5, length);
      randarr.forEach(e => {
        plByLetter.push(this.pls[letter][e]);
      });

      this.plsRandom.push(...plByLetter);
    });

    this.shuffle(this.plsRandom);
  }

  selectFontSizeByTextLength(text: string): number {
    const textLength = text.length;
    if (textLength >= 15) {
      return 8;
    }
    else if (textLength >= 10) {
      return 10;
    }
    else if (textLength >= 7) {
      return 12;
    }
    else {
      return 16;
    }
  }

  compare() {
    console.log(this.chain);

    let succeed = true;
    for (let i = 0; i < this.chain.length - 1; i++) {
      if (this.chain[i].title[0].toLowerCase() !== this.chain[i + 1].title[0].toLowerCase())
        succeed = false;
    }

    console.log("card flipped: ", this.numberCardsFlipped);


    if (!succeed) {
      this.chain.forEach((c: any) => c.el.classList.remove('card__active'));
      this.chain = [];
      this.flipNum = 0;
      this.numberCardsFlipped = 0;
    }
    else {
      if (this.chain.length === 5) {
        this.chain.forEach((card: any) => card.el.querySelector(".card__side--back").style.background = "black");
        this.results.push(this.chain.map((c: any) => c.title));
        this.chain = [];
        this.numberCardsFlipped += 5;
        this.flipNum = 0;
      }

      if (this.numberCardsFlipped === 25) {
        this.playArea?.nativeElement.classList.toggle("memory__play--active");
      }
    }
  }

  flipCard(e: Event) {
    const side = e.target as HTMLElement;
    let parent;
    if (side.classList.contains('card__side')) {
      ++this.flipNum;
      this.moves!.nativeElement.textContent = ++this.move;
      parent = side.parentElement;
      parent?.classList.add('card__active');
      this.chain.push({
        title: parent?.textContent?.trim().slice(2),
        el: parent
      });
    }

    if (this.flipNum >= 2) {
      console.log(this.chain);
      setTimeout(() => {
        this.compare();
      }, 1000);
    }
  }
}
