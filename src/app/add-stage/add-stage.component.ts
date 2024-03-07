import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StageService} from "../service/stage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent {

  constructor(private stage :StageService,private route:Router){}

  registerForm=new FormGroup({
    id:new FormControl('',Validators.required),
    titre:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.min(0)]),
    entreprise:new FormControl('',Validators.required),
    disponible:new FormControl('',Validators.required)
  })
  save(){
    console.log(this.registerForm.value)
    // this.ps.addproduct(this.registerForm.value as any)
    this.stage.AddStage(this.registerForm.value as any).subscribe(
      ()=>{this.route.navigateByUrl('/stage')}
    )
  }
  reset(){
    this.registerForm.reset()
  }
}
