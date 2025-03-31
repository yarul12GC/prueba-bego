import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface linkDetails {
  link: string;
}

@Component({
  selector: 'app-btndetails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './btndetails.component.html',
  styleUrls: ['./btndetails.component.css']
})
export class BtndetailsComponent implements OnInit, OnDestroy {
  @Input() resultDet: any;
  menuDetails: linkDetails[] = [
    {
      link: '/details'
    }
  ];

  timeRemaining: string = '';
  isCompleted: boolean = false;
  isStarted: boolean = false; 
  
  private timer: any;

  ngOnInit() {
    this.calculateTimeRemaining();
    this.timer = setInterval(() => {
      this.calculateTimeRemaining();
    }, 1000); 
    
  }

  ngOnDestroy() {
    clearInterval(this.timer); 
    
  }

  calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const remainingTime = this.resultDet.end_date - currentTime;
    const startTime = this.resultDet.start_date;


    if (currentTime >= startTime) {
      this.isStarted = true; 
      
    } else {
      this.isStarted = false; 
      
    }


    if (remainingTime <= 0) {
      this.isCompleted = true;
      this.timeRemaining = '00:00:00';
    } else {

      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      this.timeRemaining = `${hours}h ${minutes}m ${seconds}s`;
      this.isCompleted = false;
    }
  }

  handleNavigationClick() {
    if (this.isCompleted) {
      console.log('Navegar');
    }
  }
}
