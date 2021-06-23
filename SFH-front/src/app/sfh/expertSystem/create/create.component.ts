import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ESService} from '../es.service';
import { Line, Vertex } from '../clases';
import { EsScriptService } from '../../es-script.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(
    public es: ESService,
    private escr: EsScriptService
  ) { }

  flag = {
    flag: 0,
  }
  myTextArea:string = ""
  matrix= this.es.massiveMatrix



  ngOnInit(): void {

   this.es.massiveMatrix=[]
  this.es.massiveVertex=[]
   this.es.massiveArc=[]

    var Matrix=this.es.massiveMatrix
    var vertex=this.es.massiveVertex
    var lines = this.es.massiveArc

    var flag = this.flag
    var vert = this.es.vert
    var vert = this.es.vert
    var vertt: Vertex = new Vertex()
    flag.flag=0
    var s_remember = 0

    var canvas = <HTMLCanvasElement>document.getElementById("createcanvas");
    var context = canvas.getContext('2d');


    canvas.onmousedown = function (e) {
      
      flag.flag=0
      context.clearRect(0, 0, canvas.width, canvas.height) //очистить весь канвас

     
      /*for(var i=0; i<arc.length;i++){

      }*/
      

      for (var i = 0; i < vertex.length; i++) {
        if (e.clientX <  vertex[i].x + 30 && e.clientX >vertex[i].x
          && e.clientY < vertex[i].y + 15 && e.clientY > vertex[i].y - 10) {
          flag.flag = 1
          s_remember++
          if(vertex[i].s==0){
            vertex[i].s=s_remember
          }else{
            vertex[i].s=0
          }
        }
    }

    
    if (flag.flag == 0) {
      context.beginPath()
      context.arc(e.clientX - 14, e.clientY - 1, 5, 0, 2 * Math.PI, false)
      var verttt:Vertex = new Vertex()
      verttt.x=e.clientX - 14
      verttt.y=e.clientY - 1
      verttt.r=5
      verttt.s=0
      verttt.text= ""
      vertex.push(verttt)
      Matrix.push([])
      console.log(vertex)
      context.stroke()
    }


    for(var i=0; i<vertex.length;i++){
      if(vertex[i].s==0){
    context.beginPath()
    context.arc(vertex[i].x, vertex[i].y, 5, 0, 2 * Math.PI, false)
    context.stroke()
      }else{
        context.beginPath()
        context.arc(vertex[i].x, vertex[i].y, 5, 0, 2 * Math.PI, false)
        context.fillStyle = 'red';
        context.fill();
        context.stroke()
      }
    }

    for(var i=0; i<lines.length;i++){


    var x1=lines[i].x1, y1=lines[i].y1, x2=lines[i].x2, y2=lines[i].y2, x3=0,y3=0, x4=0,y4=0
    context.beginPath();
    context.moveTo(x1,y1)
    context.lineTo(x2,y2)

    var q,w,k,r,t
    console.log((y2-y1)/(x2-x1))
    w=Math.atan(((y2-y1)/(x2-x1)))/Math.PI*180
    q=Math.sin(w*Math.PI/180+45*Math.PI/180)
    k=Math.sin(w*Math.PI/180-45*Math.PI/180)
    r=Math.cos(w*Math.PI/180+45*Math.PI/180)
    t=Math.cos(w*Math.PI/180-45*Math.PI/180)
    
if(x1>x2 && y1>y2 || x1>x2 && y1>=y2 )
    {x3=x2+(20*q)
    x4=x2-(20*k)
    y3=y2-(20*r)
    y4=y2+(20*t)}
else if (x1<=x2 && y1<y2 || x1<x2 && y1<=y2)
{
    x3=x2-(20*q)
    x4=x2+(20*k)
    y3=y2+(20*r)
    y4=y2-(20*t)
}
else if(x1>=x2 && y1<y2 || x1>x2 && y1<=y2)
{
    x3=x2+(20*q)
    x4=x2-(20*k)
    y3=y2-(20*r)
    y4=y2+(20*t)
}
else if (x1<x2 && y1>=y2 || x1<=x2 && y1>y2)
{
    x3=x2-(20*q)
    x4=x2+(20*k)
    y3=y2+(20*r)
    y4=y2-(20*t)
}
   

    context.moveTo(x2,y2)
    context.lineTo(x3,y3)
    context.moveTo(x2,y2)
    context.lineTo(x4,y4)
    context.stroke();
    }
  }
}

addtext(){
  var sVert: Vertex[] = [] 
  var vertex=this.es.massiveVertex
  var lines = this.es.massiveArc
  var Matrix=this.es.massiveMatrix
  var index1=0
  var index2=0
  var text =""
  for(var i=0;i<vertex.length;i++){
    if(vertex[i].s>=1){
      if(index1==0){
        index1=i
        sVert.push(vertex[i])
      }else{
        if(vertex[index1].s < vertex[i].s){
        index2=i
        sVert.push(vertex[i])
        }else{
          index2 = index1
          index1 = i
          var tempVert: Vertex= new Vertex()
          tempVert=sVert.pop()
          sVert.push(vertex[i])
          sVert.push(tempVert)
        }
      }
    }
  }
  if(sVert.length==1){
    sVert[0].text= this.myTextArea
    console.log(this.myTextArea)
  }
  if(sVert.length==2){
    text=this.myTextArea
    if(Matrix[index1][index2]==1)
    for(var i =0; i<lines.length;i++){
      
      if(lines[i].v1==index1 &&lines[i].v2== index2){
          text=this.myTextArea
          lines[i].text= text
          console.log(lines)
      }
    }
    console.log(this.myTextArea)
  }
}

load(text:string){
  this.myTextArea=text
  this.addtext()
}

addline() {
    var sVert: Vertex[] = [] 
    var vertex=this.es.massiveVertex
    var lines = this.es.massiveArc
    var Matrix=this.es.massiveMatrix
    var index1=0
    var index2=0
    for(var i=0;i<vertex.length;i++){
      if(vertex[i].s>=1){
        if(index1==0){
          index1=i
          sVert.push(vertex[i])
        }else{
          if(vertex[index1].s < vertex[i].s){
          index2=i
          sVert.push(vertex[i])
          }else{
            index2 = index1
            index1 = i
            var tempVert: Vertex= new Vertex()
            tempVert=sVert.pop()
            sVert.push(vertex[i])
            sVert.push(tempVert)
          }
        }
      }
    }
    if(sVert.length ==2){
      var arc: Line = new Line()
      arc.x1=sVert[0].x
      arc.x2=sVert[1].x
      arc.y1=sVert[0].y
      arc.y2=sVert[1].y
      arc.v1=index1
      arc.v2=index2
      lines.push(arc)
    
 
      var canvas = <HTMLCanvasElement>document.getElementById("createcanvas");
      var context = canvas.getContext('2d');
      context.beginPath();
      var x1=arc.x1, y1=arc.y1, x2=arc.x2, y2=arc.y2, x3=0,y3=0, x4=0,y4=0
      context.moveTo(x1,y1)
      context.lineTo(x2,y2)
      var q,w,k,r,t
      w=Math.atan(((y2-y1)/(x2-x1)))/Math.PI*180
      q=Math.sin(w*Math.PI/180+45*Math.PI/180)
      k=Math.sin(w*Math.PI/180-45*Math.PI/180)
      r=Math.cos(w*Math.PI/180+45*Math.PI/180)
      t=Math.cos(w*Math.PI/180-45*Math.PI/180)
      
  if(x1>x2 && y1>y2 || x1>x2 && y1>=y2 )
      {x3=x2+(20*q)
      x4=x2-(20*k)
      y3=y2-(20*r)
      y4=y2+(20*t)}
  else if (x1<=x2 && y1<y2 || x1<x2 && y1<=y2)
  {
      x3=x2-(20*q)
      x4=x2+(20*k)
      y3=y2+(20*r)
      y4=y2-(20*t)
  }
  else if(x1>=x2 && y1<y2 || x1>x2 && y1<=y2)
  {
      x3=x2+(20*q)
      x4=x2-(20*k)
      y3=y2-(20*r)
      y4=y2+(20*t)
  }
  else if (x1<x2 && y1>=y2 || x1<=x2 && y1>y2)
  {
      x3=x2-(20*q)
      x4=x2+(20*k)
      y3=y2+(20*r)
      y4=y2-(20*t)
  }
  
      context.moveTo(x2,y2)
      context.lineTo(x3,y3)
      context.moveTo(x2,y2)
      context.lineTo(x4,y4)
      context.stroke();


      Matrix[index1][index2]=1
      console.log(lines)
      console.log(Matrix)
    }
}


deletevertex(){
  var sVert: Vertex[] = [] 
    var vertex=this.es.massiveVertex
    var lines = this.es.massiveArc
    var Matrix=this.es.massiveMatrix
    var index =0

    for(var i=0;i<vertex.length;i++){
      if(vertex[i].s==1){
        sVert.push(vertex[i])
        index =i
      }
    }
    for(var i =0; i<Matrix[index].length;i++){
        if(Matrix[index][i]==1){
          Matrix[index][i]=0
          Matrix[i][index]=0
          for(var j=0; j<lines.length;j++){
            if(lines[j].v1==index){
              if(lines[j].v2==i){
                lines.splice(j,1)
              }
            }
            if(lines[j].v1==i){
              if(lines[j].v2==index){
                lines.splice(j,1)
              }
            }
          }
      
        }
    }
    vertex.splice(index,1)


}

SendScript(){
  var matrix=JSON.stringify(this.es.massiveMatrix)
  var vertex=JSON.stringify(this.es.massiveVertex)
  var lines=JSON.stringify(this.es.massiveArc)

  var script={
    matrix: matrix,
    vertex: vertex,
    lines: lines
  }

  var scriptJson = JSON.stringify(script)

  var body={
    Firm_ID: "http://127.0.0.1:8000/firms/7/",
    datetime: "2021-06-01T06:00:00Z",
    script: scriptJson,
    isUsed: true,
    comments: "Первый скрипт"
  }
  var bodyJSON= JSON.stringify(body,['Firm_ID','datetime','script','isUsed','comments'])
  this.escr.ScriptPost(bodyJSON)
  .subscribe(res => {
    console.log(res)
  })


  console.log("отправлено")
  
}

}



 /*


selectedmassiveCoordinatesG: number[][] = []

  console.log(this.flagG.flagF)
    console.log(this.selectedmassiveCoordinatesG.length)
    if (this.flagG.flagF == 1 && this.selectedmassiveCoordinatesG.length == 2) {
      var canvas = <HTMLCanvasElement>document.getElementById("createcanvas");
      var context = canvas.getContext('2d');
      context.moveTo(this.selectedmassiveCoordinatesG[0][0], this.selectedmassiveCoordinatesG[0][1])
      context.lineTo(this.selectedmassiveCoordinatesG[1][0], this.selectedmassiveCoordinatesG[1][1])
      context.stroke()
    }


    
    var PmassiveCoordinates: number[][] = []
    var canvas = <HTMLCanvasElement>document.getElementById("createcanvas");
    var context = canvas.getContext('2d');
    var flag = this.flagG.flagF;
    var selectedmassiveCoordinates: number[][] = this.selectedmassiveCoordinatesG
    canvas.onmousedown = function (e) {


      // loc.x, loc.x
      //var loc = windowToCanvas(canvas, e.clientX, e.clientY);

      flag = 0;
      //console.log(PmassiveCoordinates.length)
      for (var i = 0; i < PmassiveCoordinates.length; i++) {
        //+ 5 && e.clientX > PmassiveCoordinates[i][0]-5 && 
        //e.clientY < PmassiveCoordinates[i][1] + 5 && 
        //e.clientY > PmassiveCoordinates[i][1]-5
        //&& e.clientX > PmassiveCoordinates[i][0]
        if(selectedmassiveCoordinates.length==0){

        if (e.clientX < PmassiveCoordinates[i][0] + 30 && e.clientX > PmassiveCoordinates[i][0]
          && e.clientY < PmassiveCoordinates[i][1] + 15 && e.clientY > PmassiveCoordinates[i][1] - 10) {
          flag = 1
          // console.log(i)
          selectedmassiveCoordinates.push([e.clientX - 14, e.clientY - 1])
        }
      }else{
          for(var j =0; j<selectedmassiveCoordinates.length; j++){
          if (e.clientX < selectedmassiveCoordinates[i][0] + 30 && e.clientX > selectedmassiveCoordinates[i][0]
            && e.clientY < selectedmassiveCoordinates[i][1] + 15 && e.clientY > selectedmassiveCoordinates[i][1] - 10
            && e.clientX < selectedmassiveCoordinates[i][0] + 30 && e.clientX > selectedmassiveCoordinates[i][0]
            && e.clientY < selectedmassiveCoordinates[i][1] + 15 && e.clientY > selectedmassiveCoordinates[i][1] - 10 ){
             //поменять цвет i
              // selectedmassiveCoordinates.pop
              flag = 1
              delete selectedmassiveCoordinates[i]
            }
          }
        }

      }

      if (flag == 0) {
        context.beginPath()
        context.arc(e.clientX - 14, e.clientY - 1, 5, 0, 2 * Math.PI, false)
        PmassiveCoordinates.push([e.clientX - 14, e.clientY - 1])
        console.log(PmassiveCoordinates)
        //console.log(PmassiveCoordinates[0][0])
        context.stroke()
        // console.log(PmassiveCoordinates.length)
      }

    };
    */