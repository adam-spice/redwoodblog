# Migration `20201103185656-migration`

This migration has been generated at 11/4/2020, 7:56:56 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201103163613-migration..20201103185656-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,18 +1,27 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
   binaryTargets = ["native", "rhel-openssl-1.0.x"]
 }
 model Post {
-  id Int @id @default(autoincrement())
-  title String
-  body String
+  id        Int @id @default(autoincrement())
+  title     String
+  body      String
   createdAt DateTime @default(now())
 }
+
+
+model Contact{
+  id        Int @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```


