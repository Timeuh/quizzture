# Quizzture

## Next

Remplir le .env.local.template et le renommer .env.local

```bash
docker compose up -d
```

```bash
npm i
```

## Prisma


Créer et ajouter des données de base :
```bash
npx prisma migrate dev
npx prisma db seed
```