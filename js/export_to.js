// Нужна сборка при помощи  WebPack

// Варианты импорта
// 1
import {one as first,two} from './export';
console.log(`${first} and ${two}`);


// 2 - импортировать все.
//import * as data from './export';
//console.log(`${data.one} and ${data.two}`);


// 3 - default
import sayHiDef from '/export';
sayHiDef();