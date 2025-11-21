import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create a test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: hashedPassword,
    },
  });

  console.log('Created test user:', user.email);

  // Delete existing reviews to avoid duplicates
  await prisma.review.deleteMany({});

  // Create reviews for the test user
  await prisma.review.createMany({
    data: [
      {
        content: 'Muito bom! Recomendo demais.',
        rating: 5,
        userId: user.id,
      },
      {
        content: 'Comida ok, mas demorou muito.',
        rating: 3,
        userId: user.id,
      },
      {
        content: 'Horrível, veio frio e errado.',
        rating: 1,
        userId: user.id,
      },
      {
        content: 'Excelente custo-benefício!',
        rating: 4,
        userId: user.id,
      },
      {
        content: 'Na média, comeria de novo.',
        rating: 3,
        userId: user.id,
      },
    ],
  });

  console.log('Created 5 test reviews');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
