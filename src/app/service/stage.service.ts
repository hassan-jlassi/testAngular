import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stage} from "../models/stage";

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3000/Stage'
  getStage(){
    return this.http.get<Stage[]>(this.url)
  }

  AddStage(s:Stage){
    return this.http.post('http://localhost:3000/Stage',s)
  }
  DeleteStage(id:number){
    return this.http.delete('http://localhost:3000/Stage'+'/'+id)
  }
}
