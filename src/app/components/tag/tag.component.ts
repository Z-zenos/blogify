import { Component, Input, OnInit } from '@angular/core';

const tags = [
  {
    name: "node.js",
    bgColor: "#43853d",
    color: "white"
  },
  {
    name: "javascript",
    bgColor: "#f7df1e",
    color: "black"
  },
  {
    name: "html",
    bgColor: "#e34f26",
    color: "white"
  },
  {
    name: "ubuntu",
    bgColor: "#e95420",
    color: "white"
  },
  {
    name: "css",
    bgColor: "#1572b6",
    color: "white"
  },
  {
    name: "react.js",
    bgColor: "#61dafb",
    color: "black"
  },
  {
    name: "c",
    bgColor: "#00599c",
    color: "white"
  },
  {
    name: "angular",
    bgColor: "#dd0031",
    color: "white"
  },

]

@Component({
  selector: 'blog-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tagName = "";
  bgColor = "";
  color = "";

  constructor() { }

  ngOnInit(): void {
    const tagFind = tags.find(t => t.name.toLowerCase() === this.tagName.toLowerCase());
    this.bgColor = tagFind?.bgColor ?? "black";
    this.color = tagFind?.color ?? "white";
  }

  hover(e: Event, enter: boolean = true) {
    const tagEl = e.target as HTMLElement;
    tagEl.style.background = enter ? 'white' : this.bgColor;
    tagEl.style.color = enter ? this.bgColor : this.color;
  }
}
