Hello DevOps World - GDE Projekt VEREBES VIKTOR R8Q3N0

Ez a projekt egy egyszerű Node.js alapú "Hello World" alkalmazás, amely a DevOps alapvető lépéseit (kódkészítés, verziókövetés, buildelés, konténerizálás, Dev Container) mutatja be.

Az alkalmazás egy egyszerű HTTP szerver, amely az Express keretrendszert használja, és a server.js fájlban található.

Elérhetőség: HTTP-n, a 8080-as porton (http://localhost:8080) vagy (127.0.0.1:8080)

Válaszként: Egyszerű szöveget ad vissza.

# Futtatás
npm start

Várja meg, amíg a terminál kiírja: "Az alkalmazás a http://localhost:8080 címen fut!"
Alkalmazás részletes bemutatása


1. Kódkészítés és Alkalmazás (server.js)

Az alkalmazás egy egyszerű HTTP szerver, amely az Express keretrendszert használja, és a server.js fájlban található.

Elérhetőség: HTTP-n, a 8080-as porton (http://localhost:8080).

Válasz: Egyszerű szöveget ad vissza.

2. Verziókövetés (Git és Trunk-Based Development)
A projekt a Trunk-Based Development elvet követi, ahol a main (trunk) branch a mindig stabil, kiadható állapotot tartalmazza.

Git Workflow:

Trunk (main): A fő branch, amelyről minden fejlesztés indul, és ahová minden beolvad.

Feature Branch: Minden új funkciót vagy jelentős változást egy külön branch-en kell fejleszteni, pl. feature/uj-uzenet.

Merge/Pull Request: A fejlesztés végeztével a feature branch-et vissza kell olvasztani a main branch-be.

TBD Lényege: A fő fejlesztési vonal (a main vagy "trunk" branch) mindig stabil, tesztelt és azonnal telepíthető állapotban van.

A Projektben Alkalmazott Lépések:
main branch (Trunk): Ez a gyűjtőhelye minden változásnak. A Git parancsok biztosították, hogy csak akkor töltöttünk fel új kódot, ha az már a helyi környezetben is integrálva volt a legújabb távoli változásokkal (pl. a git pull használatával).

Feature Branchek: Minden új funkciót (pl. az automatikus böngészőnyitást) egy rövid életű feature/valami ágon fejlesztettünk.

Elkötelezés (Commit): Minden logikai egységet egy értelmes commit üzenetben rögzítettünk (pl. feat: Automatikus böngészőnyitás implementálása). Ez a tiszta történet teszi lehetővé, hogy utólag nyomon kövessük a változásokat.

Integráció (Merge): A funkció elkészülte után az ágat visszaolvasztottuk a main branch-be. Ez a folyamat biztosítja, hogy a fő vonal stabil és naprakész maradjon.


3. Buildelés
NODE.JS nem igényel hagyományos fordítást, a "buildelés" a függőségek telepítését jelenti

projekt buildelése az alábbi paranccsal történik:
# Buildelés
npm install 


4. Konténerizálás (Docker)

A projekt tartalmaz egy Dockerfile fájlt, amely egy minimalista Node.js image-et használ (multi-stage build), hogy létrehozza az alkalmazás futtatható konténerét.

A Docker image elkészítése:

# verziószámot adunk az image-nek
docker build -t hello-devops:v1 .

# Futtatási Parancs

Az elkészített konténer futtatása, a konténer 8080-as portjának a helyi gép 8080-as portjára való leképezésével:

# -d opcióval a háttérben futtatjuk
# -p 8080:8080 a port átirányítás
# helloworld-devops:v1 az elkészített image neve
docker run -d -p 8080:8080 helloworld-devops:v1


A futtatás után az alkalmazás elérhető a böngészőben: http://localhost:8080.



Választható feladatrész: 
Felhő szolgáltatás használata (opció 4)

Az alkalmazás felhőben történő futtatására a RENDER felhőszolgáltatást választottam
A Render egy modern felhőplatform (PaaS - Platform as a Service), amelyet a projektünkben a Folyamatos Deployment (CD) megvalósítására használtunk. Az ingyenes szintje (Free Tier) ideális a mi Node.js alkalmazásunkhoz.

A Render fő előnye, hogy automatikusan integrálódik a GitHubbal, így manuális beavatkozás nélkül hoz létre egy Deployment Pipeline-t (telepítési futószalagot).

-Figyelés: A Render figyeli a projektünk GitHub repójának main branch-ét.
-Trigger: Amint elvégez egy git push origin main parancsot a GitHubra, a Render automatikusan elindítja a deployment folyamatot.
-Build: Lefuttatja a Canvasban megadott Build Commandot (npm install), telepítve a Node.js függőségeket.
-Telepítés: Lefuttatja a Start Commandot (npm start), elindítva a Node.js szerverünket a Render infrastruktúráján.
-Elérhetőség: A sikeres telepítés után az alkalmazás elérhetővé válik a fix Publikus URL-en ami jelen esetben a 

https://helloworld-devops-r8q3n0.onrender.com 