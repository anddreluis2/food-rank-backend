/*
  Warnings:

  - Added the required column `userId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Create a default user for existing reviews (password is 'password' hashed with bcrypt)
INSERT INTO "User" (id, email, password, "updatedAt")
VALUES ('00000000-0000-0000-0000-000000000000', 'default@example.com', '$2b$10$rZ8KJqGfPEJ6KGZqH7qGZOZBqPxIqH6VqLQN2QX2KqGfPEJ6KGZqH', CURRENT_TIMESTAMP);

-- AlterTable: Add userId column with default value pointing to default user
ALTER TABLE "Review" ADD COLUMN "userId" TEXT NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000';

-- Remove default after updating existing rows
ALTER TABLE "Review" ALTER COLUMN "userId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
