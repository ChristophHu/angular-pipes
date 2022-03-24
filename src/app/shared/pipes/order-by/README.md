# OrderBy

## Nutzung
Diese Pipe sortiert ein Array.

## Beispiel
```html
<ul>
    <li *ngFor="let ship of ships$ | async | orderBy:'name'">
        {{ ship.name }}
    </li>
</ul>
```
