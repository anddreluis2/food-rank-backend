import { Controller, Get } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('/review')
export class ReviewController {
  constructor(private service: ReviewService) {}

  @Get()
  getAllReviews() {
    return this.service.getAllReviews();
  }
}
