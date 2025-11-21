import { z } from 'zod';

export const CreateReviewSchema = z.object({
  content: z.string().min(1, 'Content is required').max(1000, 'Content must be less than 1000 characters'),
  rating: z.number().int().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
});

export const UpdateReviewSchema = z.object({
  content: z.string().min(1).max(1000).optional(),
  rating: z.number().int().min(1).max(5).optional(),
});

export type CreateReviewDto = z.infer<typeof CreateReviewSchema>;
export type UpdateReviewDto = z.infer<typeof UpdateReviewSchema>;
