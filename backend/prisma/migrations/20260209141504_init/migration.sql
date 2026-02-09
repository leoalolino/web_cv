-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "project_img" TEXT NOT NULL,
    "project_type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purposes" TEXT NOT NULL,
    "usedtech" TEXT NOT NULL,
    "live_url" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,
    "target_audience" TEXT NOT NULL,
    "featured" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "display_img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "issued_by" TEXT NOT NULL,
    "received_at" TEXT NOT NULL,
    "certificate_img" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_logo" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'Adminq',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Techstack" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Techstack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frontend" (
    "id" SERIAL NOT NULL,
    "frontend_svg" TEXT NOT NULL,
    "frontend_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frontendId" INTEGER NOT NULL,

    CONSTRAINT "Frontend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Backend" (
    "id" SERIAL NOT NULL,
    "backend_svg" TEXT NOT NULL,
    "backend_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "techstackId" INTEGER,

    CONSTRAINT "Backend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Database" (
    "id" SERIAL NOT NULL,
    "database_svg" TEXT NOT NULL,
    "database_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "techstackId" INTEGER,

    CONSTRAINT "Database_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "tool_svg" TEXT NOT NULL,
    "tool_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "techstackId" INTEGER,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Frontend" ADD CONSTRAINT "Frontend_frontendId_fkey" FOREIGN KEY ("frontendId") REFERENCES "Techstack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Backend" ADD CONSTRAINT "Backend_techstackId_fkey" FOREIGN KEY ("techstackId") REFERENCES "Techstack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Database" ADD CONSTRAINT "Database_techstackId_fkey" FOREIGN KEY ("techstackId") REFERENCES "Techstack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_techstackId_fkey" FOREIGN KEY ("techstackId") REFERENCES "Techstack"("id") ON DELETE SET NULL ON UPDATE CASCADE;
