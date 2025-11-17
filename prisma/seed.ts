import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.review.createMany({
    data: [
      {
        content: 'Muito bom! Recomendo demais.',
        rating: 5,
      },
      {
        content: 'Comida ok, mas demorou muito.',
        rating: 3,
      },
      {
        content: 'Horrível, veio frio e errado.',
        rating: 1,
      },
      {
        content: 'Excelente custo-benefício!',
        rating: 4,
      },
      {
        content: 'Na média, comeria de novo.',
        rating: 3,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
