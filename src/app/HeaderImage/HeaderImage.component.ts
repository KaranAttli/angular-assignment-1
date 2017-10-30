import {Component, OnInit} from '@angular/core';



@Component({
  selector : 'header2',
  templateUrl : './headerImage.html',
  styleUrls : ['./HeaderImage.style.css']
})
export class HeaderImageComponent implements OnInit {

  image = './assets/nag2.jpg';
  count: number;



  ngOnInit(): void {
    this.count = 1 ;
    setInterval(()=>{this.changeImage()},2000);
  }

  changeImage(): void {
    console.log('in fun');
    this.image = './assets/nag' + this.count + '.jpg';
    this.count++;
    if(this.count==5){
      this.count=1;
    }
    console.log(this.count);

  }




}
