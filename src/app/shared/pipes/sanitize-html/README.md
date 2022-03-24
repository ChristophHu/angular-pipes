# Sanitize HTML

## Nutzung
Wird in der Angular-Image-Carousel-Library genutzt.

## Fehler
| Nr. | Meldung | Beschreibung | Lösung |
|---|---|---|---|
|ts(2354)|Diese Syntax erfordert ein importiertes Hilfsprogramm, aber das Modul "tslib" wurde nicht gefunden.|In Zeile: `@Pipe({ name: 'sanitizeHtml' })`|`npm install tslib --save-dev`