import { ttw } from "common/utils"


export function SocialLinks({ className, ...props }) {
  const styles = twStyles()
  const Icons = socialIcons()

  const socials = [
    {
      name: 'instagram',
      icon: Icons.Instagram,
      url: 'https://instagram.com/ngodingo.id',
    },
    {
      name: 'twitter',
      icon: Icons.Twitter,
      url: 'https://twitter.com/ngodingo_id',
    },
    {
      name: 'github',
      icon: Icons.Github,
      url: 'https://github.com/ngodingo',
    }
  ]

  return (
    <>
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className={ttw(styles.Icon, className)}
          {...props}
        >
          <social.icon />
        </a>
      ))}
    </>
  )
}

function twStyles() {
  return ({
    Icon: [
      'w-12 h-12',
      'grid place-items-center'
    ]
  })
}

function socialIcons() {
  return {
    Github: ({ ...props }) => (
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_44_609)">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.0003 0.5C9.15149 0.501478 6.39613 1.51046 4.22687 3.34652C2.05761 5.18259 0.615903 7.72601 0.159545 10.522C-0.296814 13.318 0.261927 16.1842 1.73587 18.6082C3.20981 21.0321 5.50284 22.8558 8.20493 23.753C8.80105 23.8636 9.0256 23.4941 9.0256 23.18C9.0256 22.8658 9.01367 21.955 9.0097 20.9592C5.6714 21.6804 4.96599 19.5505 4.96599 19.5505C4.42152 18.1674 3.63464 17.8039 3.63464 17.8039C2.54571 17.065 3.71611 17.0788 3.71611 17.0788C4.92227 17.1637 5.55616 18.3097 5.55616 18.3097C6.62521 20.1333 8.36389 19.6058 9.04745 19.2976C9.15475 18.5251 9.46673 17.9995 9.8105 17.7012C7.14383 17.4008 4.34204 16.3774 4.34204 11.8054C4.32551 10.6197 4.76802 9.47305 5.57801 8.60268C5.45481 8.30236 5.04348 7.08923 5.69524 5.44143C5.69524 5.44143 6.7027 5.12136 8.9958 6.66444C10.9627 6.12962 13.0379 6.12962 15.0047 6.66444C17.2958 5.12136 18.3013 5.44143 18.3013 5.44143C18.9551 7.08528 18.5437 8.29841 18.4205 8.60268C19.2331 9.47319 19.6765 10.6218 19.6585 11.8094C19.6585 16.3912 16.8507 17.4008 14.1801 17.6952C14.6093 18.0667 14.9928 18.7918 14.9928 19.9061C14.9928 21.5026 14.9789 22.7868 14.9789 23.18C14.9789 23.4981 15.1955 23.8695 15.8035 23.753C18.5059 22.8557 20.7992 21.0317 22.2731 18.6073C23.747 16.183 24.3055 13.3163 23.8486 10.5201C23.3917 7.7238 21.9493 5.18035 19.7793 3.34461C17.6094 1.50886 14.8533 0.500541 12.0042 0.5H12.0003Z" />
          <path d="M8.02783 19.9753C8.02783 20.0721 7.91656 20.1551 7.77349 20.1571C7.63042 20.159 7.51318 20.08 7.51318 19.9832C7.51318 19.8864 7.62445 19.8034 7.76752 19.8014C7.91059 19.7995 8.02783 19.8765 8.02783 19.9753Z" />
          <path d="M8.9419 19.8232C8.95978 19.92 8.86042 20.0207 8.71735 20.0445C8.57428 20.0682 8.4491 20.0109 8.43121 19.916C8.41333 19.8212 8.51666 19.7185 8.65576 19.6928C8.79485 19.6671 8.92401 19.7264 8.9419 19.8232Z" />
          <path d="M7.04617 19.9081C7.01637 20.001 6.88124 20.0425 6.74612 20.003C6.611 19.9635 6.52158 19.8528 6.54741 19.758C6.57325 19.6631 6.71036 19.6197 6.84747 19.6631C6.98457 19.7066 7.07201 19.8113 7.04617 19.9081Z" />
          <path d="M6.14605 19.5209C6.08048 19.594 5.94735 19.5742 5.83806 19.4754C5.72877 19.3766 5.70293 19.2423 5.7685 19.1712C5.83408 19.1 5.96721 19.1198 6.08048 19.2166C6.19374 19.3134 6.2156 19.4497 6.14605 19.5209Z" />
          <path d="M5.50425 18.857C5.43072 18.9084 5.30553 18.857 5.23598 18.7543C5.21675 18.7359 5.20146 18.7138 5.19101 18.6893C5.18056 18.6649 5.17517 18.6386 5.17517 18.612C5.17517 18.5855 5.18056 18.5592 5.19101 18.5347C5.20146 18.5103 5.21675 18.4882 5.23598 18.4698C5.3095 18.4204 5.4347 18.4698 5.50425 18.5705C5.57379 18.6713 5.57578 18.8057 5.50425 18.857Z" />
          <path d="M5.03129 18.1714C4.99014 18.192 4.94306 18.1978 4.89811 18.1877C4.85316 18.1776 4.81314 18.1523 4.78489 18.1161C4.7074 18.0331 4.69149 17.9185 4.7511 17.8671C4.81072 17.8157 4.91803 17.8395 4.99552 17.9224C5.07302 18.0054 5.0909 18.12 5.03129 18.1714Z" />
          <path d="M4.54444 17.632C4.5186 17.6913 4.42322 17.7091 4.34573 17.6676C4.26823 17.6261 4.21061 17.549 4.23843 17.4878C4.26625 17.4265 4.35964 17.4107 4.43714 17.4522C4.51463 17.4937 4.57424 17.5727 4.54444 17.632Z" />
        </g>
        <defs>
          <clipPath id="clip0_44_609">
            <rect width="24" height="24" fill="none" />
          </clipPath>
        </defs>
      </svg>
    ),
    Instagram: ({ ...props }) => (
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_44_629)">
          <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" />
          <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" />
          <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" />
        </g>
        <defs>
          <clipPath id="clip0_44_629">
            <rect width="24" height="24" fill="none" />
          </clipPath>
        </defs>
      </svg>
    ),
    Twitter: ({ ...props }) => (
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_44_633)">
          <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" />
        </g>
        <defs>
          <clipPath id="clip0_44_633">
            <rect width="24" height="24" fill="none" />
          </clipPath>
        </defs>
      </svg>
    )
  }
}