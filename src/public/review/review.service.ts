import { Injectable } from '@nestjs/common';
import { ReviewSchema } from './schemas/review-schema';

@Injectable()
export class ReviewService {
  async getAllReviews() {
    const reviews: ReviewSchema[] = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        content: 'This is a review',
        rating: 5,
        createdAt: new Date('2025-01-01'),
        updatedAt: new Date('2025-01-01'),
      },
    ];

    return reviews;
  }
}
