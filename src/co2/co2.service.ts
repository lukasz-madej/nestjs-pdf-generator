import { Injectable } from '@nestjs/common';

@Injectable()
export class Co2Service {
  formatDate(inputDate: string): string {
    const date: Date = new Date(inputDate);

    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric'
    }).format(date);
  }
}