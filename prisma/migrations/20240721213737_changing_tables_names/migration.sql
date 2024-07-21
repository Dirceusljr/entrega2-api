/*
  Warnings:

  - You are about to drop the `AvaliacaoLivro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cargo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CargoPermissao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Livro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LivroDesejado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permissao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReputacaoUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrocaPedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioCargo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioPermissao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AvaliacaoLivro" DROP CONSTRAINT "AvaliacaoLivro_livroId_fkey";

-- DropForeignKey
ALTER TABLE "AvaliacaoLivro" DROP CONSTRAINT "AvaliacaoLivro_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "CargoPermissao" DROP CONSTRAINT "CargoPermissao_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "CargoPermissao" DROP CONSTRAINT "CargoPermissao_permissaoId_fkey";

-- DropForeignKey
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "LivroDesejado" DROP CONSTRAINT "LivroDesejado_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "ReputacaoUsuario" DROP CONSTRAINT "ReputacaoUsuario_trocaId_fkey";

-- DropForeignKey
ALTER TABLE "ReputacaoUsuario" DROP CONSTRAINT "ReputacaoUsuario_usuarioDeId_fkey";

-- DropForeignKey
ALTER TABLE "ReputacaoUsuario" DROP CONSTRAINT "ReputacaoUsuario_usuarioParaId_fkey";

-- DropForeignKey
ALTER TABLE "TrocaPedido" DROP CONSTRAINT "TrocaPedido_livroDeId_fkey";

-- DropForeignKey
ALTER TABLE "TrocaPedido" DROP CONSTRAINT "TrocaPedido_livroParaId_fkey";

-- DropForeignKey
ALTER TABLE "TrocaPedido" DROP CONSTRAINT "TrocaPedido_usuarioDeId_fkey";

-- DropForeignKey
ALTER TABLE "TrocaPedido" DROP CONSTRAINT "TrocaPedido_usuarioParaId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioCargo" DROP CONSTRAINT "UsuarioCargo_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioCargo" DROP CONSTRAINT "UsuarioCargo_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioPermissao" DROP CONSTRAINT "UsuarioPermissao_permissaoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioPermissao" DROP CONSTRAINT "UsuarioPermissao_usuarioId_fkey";

-- DropTable
DROP TABLE "AvaliacaoLivro";

-- DropTable
DROP TABLE "Cargo";

-- DropTable
DROP TABLE "CargoPermissao";

-- DropTable
DROP TABLE "Livro";

-- DropTable
DROP TABLE "LivroDesejado";

-- DropTable
DROP TABLE "Permissao";

-- DropTable
DROP TABLE "ReputacaoUsuario";

-- DropTable
DROP TABLE "TrocaPedido";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "UsuarioCargo";

-- DropTable
DROP TABLE "UsuarioPermissao";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,
    "reputacao" DECIMAL(3,1),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargos" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissoes" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "permissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_cargos" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,

    CONSTRAINT "usuarios_cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_permissoes" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "permissaoId" TEXT NOT NULL,

    CONSTRAINT "usuarios_permissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargos_permissoes" (
    "id" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,
    "permissaoId" TEXT NOT NULL,

    CONSTRAINT "cargos_permissoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "livros_desejados" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "titulo" VARCHAR(200) NOT NULL,
    "autor" VARCHAR(100) NOT NULL,
    "linkCapa" VARCHAR(100),

    CONSTRAINT "livros_desejados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "livros" (
    "id" TEXT NOT NULL,
    "titulo" VARCHAR(200) NOT NULL,
    "autor" VARCHAR(100) NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "linkCapa" VARCHAR(100),
    "editora" VARCHAR(100),
    "genero" VARCHAR(100),
    "paginas" INTEGER,
    "avaliacao" DECIMAL(3,1),
    "disponibilidade" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao_livros" (
    "id" TEXT NOT NULL,
    "livroId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "avaliacao" DECIMAL(3,1) NOT NULL,
    "comentario" VARCHAR(500),

    CONSTRAINT "avaliacao_livros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trocas_pedidos" (
    "id" TEXT NOT NULL,
    "usuarioDeId" TEXT NOT NULL,
    "livroDeId" TEXT NOT NULL,
    "usuarioParaId" TEXT NOT NULL,
    "livroParaId" TEXT NOT NULL,
    "status" VARCHAR(10) NOT NULL DEFAULT 'pendente',
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trocas_pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reputacao_usuarios" (
    "id" TEXT NOT NULL,
    "trocaId" TEXT NOT NULL,
    "usuarioDeId" TEXT NOT NULL,
    "usuarioParaId" TEXT NOT NULL,
    "avaliacao" DECIMAL(3,1) NOT NULL,
    "comentario" VARCHAR(500),

    CONSTRAINT "reputacao_usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cargos_nome_key" ON "cargos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "permissoes_nome_key" ON "permissoes"("nome");

-- AddForeignKey
ALTER TABLE "usuarios_cargos" ADD CONSTRAINT "usuarios_cargos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_cargos" ADD CONSTRAINT "usuarios_cargos_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_permissoes" ADD CONSTRAINT "usuarios_permissoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_permissoes" ADD CONSTRAINT "usuarios_permissoes_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "permissoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargos_permissoes" ADD CONSTRAINT "cargos_permissoes_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargos_permissoes" ADD CONSTRAINT "cargos_permissoes_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "permissoes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livros_desejados" ADD CONSTRAINT "livros_desejados_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao_livros" ADD CONSTRAINT "avaliacao_livros_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao_livros" ADD CONSTRAINT "avaliacao_livros_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trocas_pedidos" ADD CONSTRAINT "trocas_pedidos_usuarioDeId_fkey" FOREIGN KEY ("usuarioDeId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trocas_pedidos" ADD CONSTRAINT "trocas_pedidos_livroDeId_fkey" FOREIGN KEY ("livroDeId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trocas_pedidos" ADD CONSTRAINT "trocas_pedidos_usuarioParaId_fkey" FOREIGN KEY ("usuarioParaId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trocas_pedidos" ADD CONSTRAINT "trocas_pedidos_livroParaId_fkey" FOREIGN KEY ("livroParaId") REFERENCES "livros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reputacao_usuarios" ADD CONSTRAINT "reputacao_usuarios_trocaId_fkey" FOREIGN KEY ("trocaId") REFERENCES "trocas_pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reputacao_usuarios" ADD CONSTRAINT "reputacao_usuarios_usuarioDeId_fkey" FOREIGN KEY ("usuarioDeId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reputacao_usuarios" ADD CONSTRAINT "reputacao_usuarios_usuarioParaId_fkey" FOREIGN KEY ("usuarioParaId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
