import { Component } from '@angular/core';
import {Stage} from "../models/stage";
import {StageService} from "../service/stage.service";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
  priceMax!: number;
  listStage: Stage[] = []

  //Injection du service
  constructor(private stage: StageService) {
  }

  //Remplire listProduct avec la liste du service
  ngOnInit() {
    // this.listProduct=this.ps.listProduct
    this.stage.getStage().subscribe({
        next: (data) => this.listStage = data,
        error: (error) => console.log(error),
        complete: () => console.log('done')
      }
    )
  }

  supp(id:number){
    this.stage.DeleteStage(id).subscribe(
      ()=>this.ngOnInit()
    )
  }
}
