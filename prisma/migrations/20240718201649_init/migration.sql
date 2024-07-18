-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,
    "reputacao" DECIMAL(3,1),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permissao" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "Permissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioCargo" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioCargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioPermissao" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "permissaoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioPermissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CargoPermissao" (
    "id" SERIAL NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "permissaoId" INTEGER NOT NULL,

    CONSTRAINT "CargoPermissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LivroDesejado" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "titulo" VARCHAR(200) NOT NULL,
    "autor" VARCHAR(100) NOT NULL,
    "linkCapa" VARCHAR(100),

    CONSTRAINT "LivroDesejado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(200) NOT NULL,
    "autor" VARCHAR(100) NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "linkCapa" VARCHAR(100),
    "editora" VARCHAR(100),
    "genero" VARCHAR(100),
    "paginas" INTEGER,
    "avaliacao" DECIMAL(3,1),
    "disponibilidade" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvaliacaoLivro" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "avaliacao" DECIMAL(3,1) NOT NULL,
    "comentario" VARCHAR(500),

    CONSTRAINT "AvaliacaoLivro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrocaPedido" (
    "id" SERIAL NOT NULL,
    "usuarioDeId" TEXT NOT NULL,
    "livroDeId" INTEGER NOT NULL,
    "usuarioParaId" TEXT NOT NULL,
    "livroParaId" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL DEFAULT 'pendente',
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrocaPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReputacaoUsuario" (
    "id" SERIAL NOT NULL,
    "trocaId" INTEGER NOT NULL,
    "usuarioDeId" TEXT NOT NULL,
    "usuarioParaId" TEXT NOT NULL,
    "avaliacao" DECIMAL(3,1) NOT NULL,
    "comentario" VARCHAR(500),

    CONSTRAINT "ReputacaoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_nome_key" ON "Cargo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Permissao_nome_key" ON "Permissao"("nome");

-- AddForeignKey
ALTER TABLE "UsuarioCargo" ADD CONSTRAINT "UsuarioCargo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioCargo" ADD CONSTRAINT "UsuarioCargo_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioPermissao" ADD CONSTRAINT "UsuarioPermissao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioPermissao" ADD CONSTRAINT "UsuarioPermissao_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "Permissao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoPermissao" ADD CONSTRAINT "CargoPermissao_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CargoPermissao" ADD CONSTRAINT "CargoPermissao_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "Permissao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LivroDesejado" ADD CONSTRAINT "LivroDesejado_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvaliacaoLivro" ADD CONSTRAINT "AvaliacaoLivro_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvaliacaoLivro" ADD CONSTRAINT "AvaliacaoLivro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrocaPedido" ADD CONSTRAINT "TrocaPedido_usuarioDeId_fkey" FOREIGN KEY ("usuarioDeId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrocaPedido" ADD CONSTRAINT "TrocaPedido_livroDeId_fkey" FOREIGN KEY ("livroDeId") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrocaPedido" ADD CONSTRAINT "TrocaPedido_usuarioParaId_fkey" FOREIGN KEY ("usuarioParaId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrocaPedido" ADD CONSTRAINT "TrocaPedido_livroParaId_fkey" FOREIGN KEY ("livroParaId") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReputacaoUsuario" ADD CONSTRAINT "ReputacaoUsuario_trocaId_fkey" FOREIGN KEY ("trocaId") REFERENCES "TrocaPedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReputacaoUsuario" ADD CONSTRAINT "ReputacaoUsuario_usuarioDeId_fkey" FOREIGN KEY ("usuarioDeId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReputacaoUsuario" ADD CONSTRAINT "ReputacaoUsuario_usuarioParaId_fkey" FOREIGN KEY ("usuarioParaId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
