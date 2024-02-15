/*
  Warnings:

  - You are about to drop the column `Salary` on the `JobPosting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobPosting" DROP COLUMN "Salary",
ADD COLUMN     "salary" DOUBLE PRECISION DEFAULT 0;
