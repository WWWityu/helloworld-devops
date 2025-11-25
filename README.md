Hello DevOps World - GDE Projekt VEREBES VIKTOR R8Q3N0

Ez a projekt egy egyszerű Node.js alapú "Hello World" alkalmazás, amely a DevOps alapvető lépéseit (kódkészítés, verziókövetés, buildelés, konténerizálás, Dev Container) mutatja be.

1. Kódkészítés és Alkalmazás (server.js)

Az alkalmazás egy egyszerű HTTP szerver, amely az Express keretrendszert használja, és a server.js fájlban található.

Elérhetőség: HTTP-n, a 8080-as porton (http://localhost:8080) vagy (127.0.0.1:8080)

Válaszként: Egyszerű szöveget ad vissza.

Lokális futtatás:

    # 1. Telepítés (ha még nem történt meg)
npm install

    # 2. Futtatás
npm start

Várja meg, amíg a terminál kiírja: "Az alkalmazás a http://localhost:8080 címen fut!"

2. Verziókövetés (Git és Trunk-Based Development)
A projekt a Trunk-Based Development elvet követi, ahol a main (trunk) branch a mindig stabil, kiadható állapotot tartalmazza.

Git Workflow:

Trunk (main): A fő branch, amelyről minden fejlesztés indul, és ahová minden beolvad.

Feature Branch: Minden új funkciót vagy jelentős változást egy külön branch-en kell fejleszteni, pl. feature/uj-uzenet.

Merge/Pull Request: A fejlesztés végeztével a feature branch-et vissza kell olvasztani a main branch-be.


README dokumentáció frissítése

Kiegészített dokumentáció a build és futtatási parancsokkal.

3. Buildelés
nem igényel hagyományos fordítást, a "buildelés" a függőségek telepítését jelenti

npm install 


4. Konténerizálás (Docker)

A projekt tartalmaz egy Dockerfile fájlt, amely egy minimalista Node.js image-et használ (multi-stage build), hogy létrehozza az alkalmazás futtatható konténerét.

Image Build Parancs

A Docker image elkészítése:

# verziószámot adunk az image-nek
docker build -t hello-devops:v1 .


Image Futtatási Parancs

Az elkészített konténer futtatása, a konténer 8080-as portjának a helyi gép 8080-as portjára való leképezésével:

# -d opcióval a háttérben futtatjuk
# -p 8080:8080 a port átirányítás
# helloworld-devops:v1 az elkészített image neve
docker run -d -p 8080:8080 helloworld-devops:v1


A futtatás után az alkalmazás elérhető a böngészőben: http://localhost:8080.



Választható feladatrész: Dev Container (VS Code / GitHub Codespaces)

A projekt tartalmazza a szükséges konfigurációt a modern fejlesztői környezetek (pl. VS Code Dev Containers kiterjesztés vagy GitHub Codespaces) használatához. Ez biztosítja, hogy mindenki ugyanolyan, izolált környezetben dolgozzon a projekten.

Fájlok:

.devcontainer/Dockerfile: Beállítja az alap Node.js image-et és egy nem root felhasználót.

.devcontainer/devcontainer.json: Konfigurálja a VS Code-ot, automatikusan futtatja az npm install parancsot indításkor (postCreateCommand), és leképezi a 8080-as portot.

Indítás Dev Containerben

VS Code esetén:

Győződjön meg róla, hogy a Dev Containers kiterjesztés telepítve van.

Nyissa meg a projektmappát a VS Code-ban.

A jobb alsó sarokban (vagy a Command Palette-ben: Ctrl+Shift+P) kattintson a "Reopen in Container" gombra, vagy válassza a "Dev Containers: Reopen in Container" parancsot.


Futtatás Dev Containerben:

A Dev Container indítása után a függőségek már telepítve vannak. Futtassa a következőt a VS Code beépített termináljában:

npm start

A futtatás után az alkalmazás elérhető a böngészőben: http://localhost:8080. vagy a 127.0.0.1:8080