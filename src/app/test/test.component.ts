import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myPosts:Post[]=[]
  users;
  //inject fakedata service data
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.fsObj.getUsers().subscribe(
      userData=>{
        //assign posts
        this.users=userData
      },
      err=>{
        console.log("err in getting posts data",err)
      }
    )
  }

}
