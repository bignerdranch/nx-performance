import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  template: `
    <p>Component with potential memory leak.</p>
    <p>Value: {{ value }}</p>
  `,
})
export class MemoryLeakComponent implements OnInit {
  value = 0;
  private intervalSubscription: Subscription | undefined;

  ngOnInit() {
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.value++;
      // Simulate some processing that might take time.
      console.log('Value updated:', this.value);
    });
    // Example of a DOM event listener leak (less common, but possible)
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    console.log('scrolling...');
  };
}