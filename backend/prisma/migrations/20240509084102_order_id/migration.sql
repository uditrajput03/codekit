/*
  Warnings:

  - Added the required column `toPay` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "toPay" INTEGER NOT NULL;
