// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import Image from 'next/image'
import { Section, Container } from '../../components/layout'

// icons
import coffeeIcon from '../../../public/icons/characteristic/coffee.svg'
import smartIcon from '../../../public/icons/characteristic/smart.svg'
import timeIcon from '../../../public/icons/characteristic/time.svg'



export function Characteristic () {

  const characteristics = [
    {
      title: 'Exciting & Fun',
      desc: 'Berkumpul dan berkolaborasi untuk menghasilkan karya yang diharapkan ada nilai manfaat untuk orang lain',
      icon: coffeeIcon,
    },
    {
      title: 'Flexible',
      desc: 'Karena anggotanya adalah mahasiswa, maka jadwal serta agenda kegiatan kedepan juga akan lebih banyak menyesuaikan dengan kesibukan sebagai mahasiswa.',
      icon: timeIcon,
    },
    {
      title: 'Professional & Responsible',
      desc: 'Walaupun status anggota masih mahasiswa, namun kami akan bertanggung jawab dan bersikap profesional atas semua karya dan project yang diamanahkan kepada kami',
      icon: smartIcon,
    }
  ]

  return (

    <Section>

        <Container 
          fluid 
          className={tidyTw({
            style: 'bg-primary-50',
            layout: `
              == py-16
              lg:py-32
            `,
          })}
        >

            <div 
              className={tidyTw({
                layout: `
                  flex gap-y-14 
                  == flex-col items-center
                  lg:flex-row lg:items-start lg:justify-evenly
                `,
              })}
            >
            
                {characteristics.map((value, i) => (

                    <div 
                      key={i}
                      className={tidyTw({
                        size: `
                          h-max
                          == max-w-[380px] 
                          sm:max-w-[480px]
                        `,
                        layout: `
                          grid gap-y-5 
                          == px-4
                          lg:px-8 lg:basis-1/3
                        `,
                        typography: 'text-center',
                      })}
                    >

                        <Image
                          src={value.icon} 
                          alt="icon" 
                          className={tidyTw({
                            size: `
                              == w-12 == h-12
                              lg:w-[76px] lg:h-[76px]
                            `,
                            layout: 'm-auto'
                          })}
                        />

                        <h3 
                          className={tidyTw({
                            typography: `
                              font-semibold text-primary-10
                              == text-heading-4
                              lg:text-heading-3
                            `,
                          })}
                        >

                            <span 
                              // only for lg screen
                              className={tidyTw({
                                size: 'lg:h-24',
                                layout: 'lg:grid lg:place-items-center',
                              })}
                            >
                              {value.title}
                            </span>

                        </h3>

                        <p 
                          className={tidyTw({
                            typography: `
                              font-normal text-primary-10/60
                              == text-body-3
                              lg:text-body-2
                            `,
                          })}
                        >
                          {value.desc}
                        </p>
                      
                    </div>

                ))}

            </div>

        </Container>

    </Section>

  )
}


/*
  CHARACTERISTIC

  structure:
  ------------------
  -section
    -container
      -div
        -div
          -image
          -h3
          -p
        -div
          -image
          -h3
          -p
        -div
          -image
          -h3
          -p
  ------------------
*/