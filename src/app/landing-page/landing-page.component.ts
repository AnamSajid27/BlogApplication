import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  result = [];
  name:any ='';
  
  constructor(private fb :FormBuilder,private router:Router,private snack :MatSnackBar, private service :PostServiceService) { }

  ngOnInit(): void {
  }



  search(){
    this.service.searchByName(this.name).subscribe(res=>{
      this.result=res;

    })
  }
}
