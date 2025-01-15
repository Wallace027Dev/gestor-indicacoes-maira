/*
  Warnings:

  - You are about to drop the column `userId` on the `click` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Click` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Click_userId_fkey` ON `click`;

-- AlterTable
ALTER TABLE `click` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Click` ADD CONSTRAINT `Click_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
