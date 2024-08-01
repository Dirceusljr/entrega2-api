/*
  Warnings:

  - You are about to drop the `cargos_permissoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `permissoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios_permissoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cargos_permissoes" DROP CONSTRAINT "cargos_permissoes_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "cargos_permissoes" DROP CONSTRAINT "cargos_permissoes_permissaoId_fkey";

-- DropForeignKey
ALTER TABLE "usuarios_permissoes" DROP CONSTRAINT "usuarios_permissoes_permissaoId_fkey";

-- DropForeignKey
ALTER TABLE "usuarios_permissoes" DROP CONSTRAINT "usuarios_permissoes_usuarioId_fkey";

-- DropTable
DROP TABLE "cargos_permissoes";

-- DropTable
DROP TABLE "permissoes";

-- DropTable
DROP TABLE "usuarios_permissoes";
