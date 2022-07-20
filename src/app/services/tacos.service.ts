import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tacos} from "../../interfaces/tacos";

@Injectable({
  providedIn: 'root'
})
export class TacosService {
  private tacos_ap_url: string = 'http://51.161.69.19:907/tacos'
  constructor(private httpClient: HttpClient) { }
  getAllTacos() : Observable<Tacos[]> {
    return this.httpClient.get<Tacos[]>(this.tacos_ap_url);
  }
}
