import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
  getAllReviews(): string {
    return 'All reviews';
  }
}
