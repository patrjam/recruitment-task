# Loading HOC componenta
Potřebujeme HOC komponentu, která by zajistila odeslání requestu a přiřazeni
vysledných dat jako property `data` na cilovou komponentu. HOC by měla zajistit pouze základní logiku, vše potřebné 
získá jako parametry.

Pokud si netroufáte na správné typovani můžete požívat `any` type, eslint ho označuje pouze jako warning.

Příklad použití
```typescript
const WithFetchSomeComponent = WithFetch(
  actionCreator,
  getDataSelector,
)(SomeComponent);
```

Parametry
* `actionCreator`: vratí akci která zajistí request dat, jako argument dostane `Props` HOC componenty
* `getDataSelector`: funkce vracející redux selector, jeho pomocí získáte informace o requestu (jeho stav a výsledná 
  data)
* `SomeComponent`: je cílová React komponenta

Komponenta si tedy musí správně získat data pomocí selektoru z `getDataSelector`, zjistit zda inicializovat request 
pomocí akce z `actionCreator` nebo předat data ziskana selektorem cílové komponentě na property `data`.

## `actionCreator`
Vrátí akci, která zajisti request dat, jako argumen dostane `Props` HOC componenty. Používá se ve spojení s React 
hookem `useAppDispatch` (správně otypovaná verze `useDispatch`). Příklad použití je v následujícím příkladu.

```typescript
import { useAppDispatch } from './hooks';

type actionCreator = (props: Record<string, any>) => AppThunk | Action;

// example use in component
const dispatch = useAppDispatch();

dispatch(actionCreator(props));
```
Podrobnosti použití `dispatch` najdete v dokumentaci [React Redux](https://react-redux.js.org) a
[Redux](https://redux.js.org/) knihovny.

## `getDataSelector`
Funkce vracející Redux selector, jeho pomocí získáte informace o requestu (jeho stav a vysledna data).
Pouziva se ve spojeni s React hookem `useAppSelector` (správně otypovaná verze `useSelector`) například `const data = 
useAppSelector(getDataSelector());`

Pro účely tohoto příkladu není nutné podrobnějšího popisu. Více jde najít v dokumentaci
[React Redux](https://react-redux.js.org) a [Redux](https://redux.js.org/) knihovny.

Výsledný selector bude vždy vracet tento formát:
```typescript
type SelectorReturnType = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  data: object | object[] | null;
}

type getDataSelector = () =>
  (state: any) => SelectorReturnType;

// example use in component
const data = useSelector(getDataSelector(props));

```
* `iddle`: data nebyly requstnuty `error` i `data` obsahuji `null`
* `loading`: data se requestují `error` i `data` obsahuji `null`
* `succeeded`: data byla uspesne ziskana `data` jsou naplneny vysledkem; `error` obsahuje `null`
* `failed`: behem ziskavani dat nastala chyba `error` obsahuje `string`; `data` obsahuji `null`

## Očekávané chování
Nová data by se měla načíst pouze pokud nejsou k dispozici žádná data nebo chyba. Samozřejmě by se neměla data 
requestovat, pokud se už čeká na výsledek.

## Závěr
V souboru `./features/WithFetch.tsx` se nachazí vychozí implementace.

Nesmíte přidávat/používat jiné externí moduly, než ty které jsou již v príkladu zahrnuty.
Vytvařejte a měňte soubory dle libosti.

Jedinou vyjímkou je soubor `./src/App.tsx`, kde pouze odmažte komentář `// @ts-ignore ...` pokud budete psát i typové 
anotace.

Cílem není napsat funkčni výsledek, ale co nejvíce se k němu přiblížit. Cílem tohoto ůkolu je zjistit, jak zvládáte
obtížná zadání, způsob jejich rešení a kde jsou Vaše aktualní limity. Nebojte se nás kontaktovat s jakýmikoliv dotazy.
---
# React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
