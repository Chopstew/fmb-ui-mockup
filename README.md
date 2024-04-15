# fmb-ui-mockup
Dieser Funky-Prototyp wurde im Rahmen der Bachelorarbeit "Verteiltes Musizieren:
Eine Exploration der Bedürfnisse, Anforderungen und potenziellen Lösungen" erstellt.
Dazu wurde Angular verwendet, um eine möglichst realitätsnahe Darstellung zu erreichen.
Gleichzeitig können so auch komplexere Funktionalitäten klar vermittelbar dargestellt
werden.<br> 
Der Prototyp wurde verwendet, um im Rahmen einer Fokusgruppe direkte Rückmeldungen
zu potenziellen Funktionalitäten zu erhalten. Konkret soll die Bedienungsoberfläche
auf eine Verwendung in Onlineproben eines Chores abgestimmt sein.
<br>
<br>
**Dieses Repository kann öffentlich eingesehen werden.**

## 1. Lokale Ausführung des Clients
### 1.1  Erforderliche Installationen

Zu Beginn sollte sichergestellt werden, dass die folgenden Abhängigkeiten installiert sind:

- [Node.js](https://nodejs.org/en)
- [Angular](https://angular.io/)

Durch das Ausführen des folgenden Befehls in der Shell kann Angular CLI (Command Line Interface) global installiert werden:

```shell
npm install -g @angular/cli
```

### 1.2 Einrichten

Anhand der folgenden Schritte kann das Projekt lokal eingerichtet werden

1. Installation der erforderlichen Installationen, aufgelistet in *Abschnitt 2.1: "Erforderliche Installationen"*
2. Dieses Repository lokal klonen:

   ```shell
   git clone
   ```

3. Pfad auf das geklonte Repository wechseln:

   ```shell
   cd fmb-ui-mockup
   ```

4. Projektabhängigkeiten (dependencies) installieren: → Dies kann einen Moment dauern!

   ```shell
   npm install
   ```

5. Build und Start des Webservers für den Client:

   ```shell
   run start
   ```

6. Browser öffnen:
   ```shell
   http://localhost:4200/
   ```
7. Fertig!

## 2. Bilderquellen

In diesem Client werden Bilder verwendet. Diese sind unter ```src/assets``` aufgeführt.

- **chat_1.jpg** - Zusammenschnitt anhand von https://stock.adobe.com/de/images/bubble-social-screen-chat-window-dialog-on-dark-background/343019732
- **conductor_2.jpg** - https://www.musicnotes.com/blog/how-to-conduct-a-choir-lead-like-a-pro/
- **head_1.png** - selbst angefertigt, angelehnt an Ball (2011, S. 311)
- **notes_1.png** - selbst angefertigt
- **notes_2.jpg** - selbst angefertigt
- **notes_3.png** - selbst angefertigt
- **notes_feedback.png** - selbst angefertigt
- **piano_1.png** - selbst angefertigt
- **singer_1.jpg** - https://de.123rf.com/photo_169433300_man-with-headphones-listens-to-music-and-sings.-positive-bearded-man-in-black-wireless-headphones-holds-his-head-with-his-hands-and-sings-song-while-enjoying-music.html
- **together_1.jpg** - Screenshot aus https://youtu.be/MGsNmYKgeTA?si=4qsC-EqDx8icBFDn
- **together_2.jpg** - https://rebeccajlj.com/2020/07/31/teams-together-mode-hyped-or-helpful/

## 3. Literaturverzeichnis

Ball, R. (2011). Designing Protective Headgear. In W. Karwoski & M. Soares (Hrsg.), *Human Factors and ergonomics in Consumer Products: Uses and Applications* (S. 302-313). Taylor and Francis.
