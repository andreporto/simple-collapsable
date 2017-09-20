# simple-collapsable
This is a simple Angular collapsable reusable component

**HTML TAG**
```
<simple-collapsable>
  <... sc-header> ... </...>
  <... sc-content> ... </...>
</simple-collapsable>
```

**Important!**

To indicate clickable areas to expand the content section you must use sc-clickable css class, 
ie:
```
<div class="cs-clickable">blá blá blá</div>
```

## Usage example in an Angular 4 project
**Import in app.module.ts**
```
import { SimpleCollapsableModule } from './simple-collapsable/simple-collapsable.module';

...

imports: [
    BrowserModule,
    SimpleCollapsableModule
  ],
...
```

**using into a component**
```
<simple-collapsable>
  <div sc-header>
    <div class="sc-clickable">Clickable area1</div>
    <div>Content non-clickable</div>
    <div class="sc-clickable">Clickable area 2</div>
  </div>
  <div sc-content>
    <div>Show content1</div>
    <div>Show content2</div>
    <div>Show content3</div>
  </div>
</simple-collapsable>
```
