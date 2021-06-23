import { Injectable } from '@angular/core';
import { Line, Vertex } from './clases';

@Injectable({
  providedIn: 'root'
})
export class ESService {

  constructor() { }

  /* massiveMatrix: number[][] = []
   massiveVertex = []
   massiveArc = []
   massiveCoordinates: number[][] = []*/

  massiveMatrix: number[][] = []
  massiveVertex: Vertex[] = []
  massiveArc: Line[] = []

  vert: Vertex = {
    x: 0,
    y: 0,
    r: 0,
    s: 0,
    text: "0"
  }

  line: Line = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    v1: 0,
    v2: 0,
    text: "0"
  }

}