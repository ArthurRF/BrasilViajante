-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "legal_registry_number" VARCHAR(15) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_legal_registry_number_key" ON "users"("legal_registry_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
