/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `NewsLetter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_email_key" ON "NewsLetter"("email");
