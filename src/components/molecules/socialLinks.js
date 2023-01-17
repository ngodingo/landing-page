import { tidyTw } from "../../utilts/tidy-tailwind"

import InstagramIcon from "../../assets/icons/instagramIcon"
import TwitterIcon from "../../assets/icons/twitterIcon"
import GithubIcon from "../../assets/icons/githubIcon"

export function SocialLinks ({className}) {
  
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
      className={tidyTw({
        size: 'w-12 h-12',
        layout: 'grid place-items-center',
        custom: className
      })}
    >
      <social.icon />
    </a>

    ))}

    </>
  )
}