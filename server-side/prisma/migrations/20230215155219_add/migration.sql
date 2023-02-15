/*
  Warnings:

  - You are about to drop the column `favorites` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "favorites",
ADD COLUMN     "email_verified" DATE;
