export class Vertex {
   x: number;
   y: number;
   r: number;
   s: number;
   text: string;
}

export class Line {
   x1: number;
   y1: number;
   x2: number;
   y2: number;
   v1: number;
   v2: number;
   text: string;
}

export interface Vertex {
   x: number;
   y: number;
   r: number;
   s: number;
   text: string;
}

export interface Line {
   x1: number;
   y1: number;
   x2: number;
   y2: number;
   v1: number;
   v2: number;
   text: string;
}

export interface DataScript {
   Firm_ID: string;
   datetime: string;
   script:string;
   isUsed: boolean;
   comments: string
}

export interface DataScriptData{
   matrix: string;
   vertex: string;
   lines: string;
}