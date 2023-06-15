import { ttw } from "common/utils"

import GithubIcon24 from "@assets/icons/github.icon.svg"
import InstagramIcon24 from "@assets/icons/instagram.icon.svg"
import TwitterIcon24 from "@assets/icons/twitter.icon.svg"


export function SocialLinks({ className, ...props }) {
  const styles = twStyles()

  const socials = [
    {
      name: 'instagram',
      icon: InstagramIcon24,
      url: 'https://instagram.com/ngodingo.id',
    },
    {
      name: 'twitter',
      icon: TwitterIcon24,
      url: 'https://twitter.com/ngodingo_id',
    },
    {
      name: 'github',
      icon: GithubIcon24,
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