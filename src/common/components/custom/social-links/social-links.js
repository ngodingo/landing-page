import styles from './social-links-style'
import { ttw } from "@utilts"

import InstagramIcon from "./icons/instagram-icon"
import TwitterIcon from "./icons/twitter-icon"
import GithubIcon from "./icons/github-icon"


export function SocialLinks ({className, ...props}) {
  
  const socials = [
    {
      name: 'instagram',
      icon: InstagramIcon,
      url: 'https://instagram.com/ngodingo.id',
    },
    {
      name: 'twitter',
      icon: TwitterIcon,
      url: 'https://twitter.com/ngodingo_id',
    },
    {
      name: 'github',
      icon: GithubIcon,
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