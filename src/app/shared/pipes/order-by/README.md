# OrderBy

## Nutzung
Diese Pipe sortiert ein Array von Objekten nach einer Eigenschaft.

## Beispiel
```html
<ul>
    <li *ngFor="let ship of ships$ | async | orderBy:'name'">
        {{ ship.name }}
    </li>
</ul>
```
