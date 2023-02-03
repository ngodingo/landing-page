
# Tidy-Tailwind Utility

fungsi utilitas untuk menggabungkan seluruh string value pada object atau array
```js
ttw(['foo', 'bar', true])
// output 'foo bar'

ttw({a:'foo', b:'bar', c:null, d:'ok'})
// output 'foo bar ok'

ttw({foo:'hello', bar:'world', cc:{fe:'nested', rr:'obj'}})
// output 'hello world nested obj'

ttw({foo:'hello', bar:'world', ee:['nested', 'array']})
// output 'hello world nested array'

ttw('arguments', 'also', 'work')
// output 'arguments also work'

ttw('mixed', ['foo','bar'])
// output 'mixed foo bar'
```

## Contoh Penggunaan
```jsx
// components/circle.js
import { ttw } from "@utilts"
import styles from "./circle-style"

function Circle () {
    return (
        <div className={ttw(styles.Circle)}>
            <span className{ttw(styles.Text)}>
                Hi, I'm circle
            </span>
        </div>
    )
}


// components/circle-style.js
const styles = {
    Circle: [
        'w-64 h-64 rounded-full',
        'bg-red-300',
        'hover:bg-blue-400',
    ],
    Text: {
        common: [
            'text-3xl leading-7',
            'font-semibold'
        ],
        theme: {
            light: [
                'text-black',
                'bg-white'
            ],
            dark: [
                'dark:text-white',
                'dark:bg-black',
            ]
        }
    }
}
export default styles;
```