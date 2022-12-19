import { of, tap, map, filter } from 'rxjs';

// tap operatoru debugger gibiddir value degeri ne oldu

const source = of(1, 2, 3, 4, 5);
// const example = source.pipe(
//   tap((val) => console.log(`BEFORE MAP: ${val}`)),
//   map((val) => val + 10),
//   tap((val) => console.log(`AFTER MAP: ${val}`))
// );
const example = source.pipe(
  map((val) => val + 10),
  tap((val) => console.log(`BEFORE MAP: ${val}`)),
  filter((val) => val >= 14),
  tap((val) => console.log(`AFTER MAP: ${val}`))
);
const subscribe = example.subscribe((val) => console.log(val));
