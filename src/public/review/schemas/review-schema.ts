import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const reviewSchema = z.object({
  id: z.uuid(),
  content: z.string().min(1).max(1000),
  rating: z.number().min(1).max(5),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;

export class ReviewDto extends createZodDto(reviewSchema) {}
