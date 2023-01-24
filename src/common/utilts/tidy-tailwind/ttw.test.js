import { ttw } from "./ttw"

const x = true

const arr = [
	'from', 
  'array', 
  undefined,
  x && 'xtrue',
]

const ttwTest = {
	dd: 'hello',
  ddd: x && 'ok',
  w: 'world',
  df: {
  	h: 'almaas',
    c: ['or', 'se'],
    g: undefined,
    gg: [
    	{
      	foo: 'foo',
        bar: 'bar',
      },
      {
      	off: 'off',
        th: 'then'
      }
    ]
  }
}

console.log(typeof arr)
console.log(ttw(ttwTest, arr, arr));
console.log(ttw('ok','hello'))