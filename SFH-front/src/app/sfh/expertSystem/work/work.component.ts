import { Component, OnInit } from '@angular/core';
import { EsScriptService } from '../../es-script.service';
import { DataScript, DataScriptData, Line, Vertex } from '../clases';
import { ESService } from '../es.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  massive$

  constructor(
    private es: ESService,
    private ess: EsScriptService
  ) { }
  matrix = this.es.massiveMatrix
  vertex = this.es.massiveVertex
  lines = this.es.massiveArc
  CurrentVertes = this.es.vert
  CurrentLines: Line[] = []
  vert = this.es.vert
  scriptJsonParse: string
  input = 0



  ngOnInit(): void {
    this.lines = []
    var massive$ = this.ess.ScriptGet()
      .subscribe((res: DataScript[]) => {
        // this.vertex=JSON.parse(JSON.parse(res[0].script).vertex)
        console.log(JSON.parse(res[0].script))
        for (var i = 0; i < JSON.parse(JSON.parse(res[0].script).vertex).length; i++) {
          var vert = new Vertex()
          vert = JSON.parse(JSON.parse(res[0].script).vertex)[i]
          this.vertex.push(vert)
        }

        for (var i = 0; i < JSON.parse(JSON.parse(res[0].script).lines).length; i++) {
          var line = new Line()
          line = JSON.parse(JSON.parse(res[0].script).lines)[i]

          this.lines.push(line)
        }


        for (var i = 0; i < JSON.parse(JSON.parse(res[0].script).matrix).length; i++) {
          var matrix = []
          matrix = JSON.parse(JSON.parse(res[0].script).matrix)[i]

          this.matrix.push(matrix)
        }
      })


    console.log(this.vertex)
    console.log(this.lines)
    console.log(this.matrix)

    //Узнать вершину в которую не входит ни одна дуга, но из которой есть по крайней мере одна дуга,
    //которая НЕ ведёт в вершину N


  }


  click() {

    //шаг 1 
    this.CurrentLines = []
    this.input = 1
    var flagy = 0
    var flagx = 0
    var indexCurrentVertex = 0;
    for (var i = 0; i < this.matrix.length; i++) {
      for (var j = 0; j < this.matrix.length; j++) {
        if (typeof this.matrix[j][i] !== 'undefined') {
          flagy += this.matrix[j][i]
        }
      }
      if (flagy == 0) {
        for (var j = 0; j < this.matrix.length; j++) {
          if (typeof this.matrix[i][j] !== 'undefined') {
            flagx += this.matrix[i][j]
          }
        }

        if (flagx != 0) {
          this.CurrentVertes = this.vertex[i]
          indexCurrentVertex = i
        }
      }
    }
    console.log(this.CurrentVertes)
    this.CurrentLines = []
    var CurrentLines = this.CurrentLines
    for (var i = 0; i < this.lines.length; i++) {
      if (this.lines[i].v1 == indexCurrentVertex) {
        CurrentLines.push(this.lines[i])
      }
    }
    console.log(CurrentLines)
    console.log(this.lines)

  }

  clickTo(CurrentLine: Line) {
    this.CurrentVertes = this.vertex[CurrentLine.v2]
    var indexCurrentVertex = CurrentLine.v2
    this.CurrentLines = []
    var CurrentLines = this.CurrentLines
    for (var i = 0; i < this.lines.length; i++) {
      if (this.lines[i].v1 == indexCurrentVertex) {
        CurrentLines.push(this.lines[i])
      }
    }


  }


}

