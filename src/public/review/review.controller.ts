import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
  UsePipes,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe';
import {
  CreateReviewSchema,
  UpdateReviewSchema,
} from './schemas/review-schema';
import type { CreateReviewDto, UpdateReviewDto } from './schemas/review-schema';

@Controller('review')
@UseGuards(JwtAuthGuard)
export class ReviewController {
  constructor(private service: ReviewService) {}

  @Get()
  getAllReviews() {
    return this.service.getAllReviews();
  }

  @Get(':id')
  getReviewById(@Param('id') id: string) {
    return this.service.getReviewById(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateReviewSchema))
  createReview(@Request() req, @Body() createReviewDto: CreateReviewDto) {
    return this.service.createReview(req.user.userId, createReviewDto);
  }

  @Put(':id')
  @UsePipes(new ZodValidationPipe(UpdateReviewSchema))
  updateReview(
    @Param('id') id: string,
    @Request() req,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.service.updateReview(id, req.user.userId, updateReviewDto);
  }

  @Delete(':id')
  deleteReview(@Param('id') id: string, @Request() req) {
    return this.service.deleteReview(id, req.user.userId);
  }
}
