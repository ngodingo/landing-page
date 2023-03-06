export default function Chevron ({direction}) {

  let degree = 0;

  switch (direction) {
    case 'top':
      degree = 0
      break
    case 'right':
      degree = 90
      break
    case 'bottom':
      degree = 180
      break
    case 'left':
      degree = 270
      break
    default:
      degree = 0
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `rotate(${degree}deg)`}}>
    <path d="M6.16475 14.8352C6.38442 15.0549 6.74058 15.0549 6.96025 14.8352L12 9.79553L17.0398 14.8352C17.2594 15.0549 17.6155 15.0549 17.8352 14.8352C18.0549 14.6156 18.0549 14.2594 17.8352 14.0398L12.3977 8.60228C12.178 8.3826 11.8219 8.3826 11.6023 8.60228L6.16475 14.0398C5.94508 14.2594 5.94508 14.6156 6.16475 14.8352Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
    </svg>
  )
}