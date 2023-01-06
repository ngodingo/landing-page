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
            layout: {
              bs: 'py-16',
              lg: 'lg:py-32'
            }
          })}
        >

            <div 
              className={tidyTw({
                layout: {
                  common: 'flex gap-y-14',
                  bs: 'flex-col items-center',
                  lg: 'lg:flex-row lg:items-start lg:justify-evenly',
                }
              })}
            >
            
                {characteristics.map((value, i) => (
                  <div 
                    key={i}
                    className={tidyTw({
                      size: {
                        common: 'h-max',
                        bs: 'max-w-[380px]',
                        sm: 'sm:max-w-[480px]',
                      },
                      layout: {
                        common: 'grid gap-y-5',
                        bs: 'px-4',
                        lg: 'lg:px-8 basis-1/3',
                      },
                      typography: 'text-center'
                    })}
                  >

                      <Image
                        src={value.icon} 
                        alt="icon" 
                        className={tidyTw({
                          size: {
                            bs: 'w-12 h-12',
                            lg: 'lg:w-[76px] lg:h-[76px]',
                          },
                          layout: 'm-auto'
                        })}
                      />

                      <h3 
                        className={tidyTw({
                          typography: {
                            common: 'font-semibold text-primary-10',
                            bs: 'text-heading-4',
                            lg: 'lg:text-heading-3',
                          }
                        })}
                      >

                          <span 
                            className={tidyTw({
                              lgSize: 'lg:h-24',
                              lgLayout: 'lg:grid lg:place-items-center',
                            })}
                          >
                            {value.title}
                          </span>

                      </h3>

                      <p 
                        className={tidyTw({
                          typography: {
                            common: 'font-normal text-primary-10 opacity-60',
                            bs: 'text-body-3',
                            lg: 'lg:text-body-2',
                          }
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