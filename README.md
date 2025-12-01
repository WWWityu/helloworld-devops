Hello DevOps World - GDE Projekt VEREBES VIKTOR R8Q3N0

Ez a projekt egy egyszerű Node.js alapú "Hello World" alkalmazás, amely a DevOps alapvető lépéseit (kódkészítés, verziókövetés, buildelés, konténerizálás, Dev Container) mutatja be.

Az alkalmazás egy egyszerű HTTP szerver, amely az Express keretrendszert használja, és a server.js fájlban található.

Elérhetőség: HTTP-n, a 8080-as porton (http://localhost:8080) vagy (127.0.0.1:8080)

Válaszként: Vizuálisan formázott szöveget add vissza.

# Futtatás
npm start

Várja meg, amíg a terminál kiírja: "Az alkalmazás a http://localhost:8080 címen fut!"


# Alkalmazás részletes bemutatása

A projektben egy komplett DevOps életciklust építettem fel egy egyszerű, Visual Studio Code-ban fejlesztett Node.js/Express.js webszolgáltatás köré.

Fejlesztés és Verziókövetés: Kódot írtam, amelyet Trunk-Based Development elv szerint menedzseltünk Git-tel és GitHub-bal, biztosítva a folyamatos, stabil főágat. A Dev Container konfigurációval egy izolált, egységes fejlesztői környezetet hoztunk létre.

Verziókövetés (Git és Trunk-Based Development)
A Git egy elosztott verziókövető rendszer, amely nyomon követi a kódunk változásait az idő múlásával. A projektünkben a Trunk-Based Development (TBD) modellt követtük.
A TBD Lényege: A fő fejlesztési vonal (a main vagy "trunk" branch) mindig stabil, tesztelt és azonnal telepíthető állapotban van.

A Projektben Alkalmazott Lépések:
main branch (Trunk): Ez a gyűjtőhelye minden változásnak. A Git parancsok biztosították, hogy csak akkor töltöttünk fel új kódot, ha az már a helyi környezetben is integrálva volt a legújabb távoli változásokkal (pl. a git pull használatával).
Feature Branchek: Minden új funkciót (pl. az automatikus böngészőnyitást) egy rövid életű feature/valami ágon fejlesztettünk.
Elkötelezés (Commit): Minden logikai egységet egy értelmes commit üzenetben rögzítettünk (pl. feat: Automatikus böngészőnyitás implementálása). Ez a tiszta történet teszi lehetővé, hogy utólag nyomon kövessük a változásokat.
Integráció (Merge): A funkció elkészülte után az ágat visszaolvasztottuk a main branch-be. Ez a folyamat biztosítja, hogy a fő vonal stabil és naprakész maradjon.

Git Parancsok a Projektben:
git init: Létrehozta a helyi Git tárolót.
git add .: Hozzátette a módosított fájlokat a követéshez.
git commit -m "mit commitelünk": Létrehozta a mentett pontot a helyi történetben.
git push origin main: Feltöltötte a helyi történetet a távoli GitHub repóba.
git pull origin main: Letöltötte a távoli (GitHub) változásokat, ha más is dolgozott a kódon.


Buildelés
A konténerizálás célja az alkalmazás és az összes szükséges függőség becsomagolása egy hordozható, izolált egységbe (konténerbe). 
Ez garantálja, hogy az alkalmazás ugyanúgy fusson a fejlesztői gépen, a tesztkörnyezetben és a felhőben (Render).
A Projektben Alkalmazott Lépések:
Dockerfile: Ez a fájl tartalmazza azokat az utasításokat, amelyek alapján a Docker létrehozza az image-et.
Alap Image: A legfrissebb Node.js image-et használja biztosítva a futtatókörnyezetet.
Függőségek: Átmásolja a package.json fájlt, és lefuttatja az npm install parancsot.
Alkalmazáskód: Átmásolja a server.js fájlt.
Exponálás és Indítás: Az EXPOSE 8080 jelzi a Dockernek, hogy az app a 8080-as porton figyel, a CMD ["npm", "start"] parancs pedig elindítja a webszolgáltatást a konténer indulásakor.
Image Építése:
build -t hello-devops:v1 . - parancs lefordítja a Dockerfile-t egy futtatható image-gé.
Futtatás: A docker run -d -p 8080:8080 hello-devops:v1 parancs elindítja az image-et egy konténerben, összekötve a konténer belső portját (8080) a helyi gép portjával, így az elérhetővé válik a böngészőből.
NODE.JS nem igényel hagyományos fordítást, a "buildelés" a függőségek telepítését jelenti.

projekt buildelése az alábbi paranccsal történik:
npm install 

A Docker image elkészítése:

verziószámot adunk az image-nek
docker build -t helloworld-devops:v1 .
Az elkészített konténer futtatása, a konténer 8080-as portjának a helyi gép 8080-as portjára való leképezésével:
-d opcióval a háttérben futtatjuk
-p 8080:8080 a port átirányítás
helloworld-devops:v1 az elkészített image neve
docker run -d -p 8080:8080 helloworld-devops:v1


# Választható feladatrész: 
Felhő szolgáltatás használata (opció 4)

Az alkalmazás felhőben történő futtatására a RENDER felhőszolgáltatást választottam
A Render egy modern felhőplatform (PaaS - Platform as a Service), amelyet a projektünkben a Folyamatos Deployment (CD) megvalósítására használtunk. Az ingyenes szintje (Free Tier) ideális a mi Node.js alkalmazásunkhoz.

A Render fő előnye, hogy automatikusan integrálódik a GitHubbal, így manuális beavatkozás nélkül hoz létre egy Deployment Pipeline-t (telepítési futószalagot).

-Figyelés: A Render figyeli a projektünk GitHub repójának main branch-ét.
-Trigger: Amint elvégez egy git push origin main parancsot a GitHubra, a Render automatikusan elindítja a deployment folyamatot.
-Build: Lefuttatja a Canvasban megadott Build Commandot (npm install), telepítve a Node.js függőségeket.
-Telepítés: Lefuttatja a Start Commandot (npm start), elindítva a Node.js szerverünket a Render infrastruktúráján.
-Elérhetőség: A sikeres telepítés után az alkalmazás elérhetővé válik a fix Publikus URL-en ami jelen esetben a 

Az elkészül applikáció felhős elérhetősége:
# https://helloworld-devops-r8q3n0.onrender.com
