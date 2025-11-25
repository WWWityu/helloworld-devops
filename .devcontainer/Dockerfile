# ------------------------------------------------------------------
# Multi-Stage Build a "Hello DevOps" Node.js alkalmazáshoz
# ------------------------------------------------------------------

# 1. Build Fázis: Függőségek telepítése és "Buildelés" (ebben az esetben a függőségek előkészítése)
# A hivatalos Node.js image-et használjuk alapként
FROM node:20-slim AS builder

# Beállítjuk a munkakönyvtárat a konténerben
WORKDIR /app

# Másoljuk a package fájlokat és telepítjük a függőségeket
# Csak a package.json és package-lock.json fájlokat másoljuk, hogy optimalizáljuk a rétegeket
COPY package*.json ./
RUN npm install
# A build parancs futtatása, bár ennél az egyszerű appnál csak a függőségtelepítést jelenti
RUN npm run build

# 2. Production Fázis: Csak a futtatáshoz szükséges fájlokkal
# Használjunk még kisebb alap image-et a minimalizált méretért
FROM node:20-slim AS production

WORKDIR /app

# Átmásoljuk a függőségeket (node_modules) a build fázisból
COPY --from=builder /app/node_modules ./node_modules

# Átmásoljuk az alkalmazás kódját
COPY server.js .

# A konténer 8080-as porton figyel
EXPOSE 8080

# A konténer induláskor automatikusan futtatja az appot
CMD ["npm", "start"]