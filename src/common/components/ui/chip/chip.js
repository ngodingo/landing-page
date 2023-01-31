import styles from "./chip-style"
import { ttw } from "@utilts"

export function Chip () {
  return (
    <button className={ttw(styles.Chip)}>
      chip
    </button>
  )
}