import { ttw } from '@utils'

import Image from 'next/image'
import { Section, Container, Grid, Column } from '@layouts'

import coffeeIcon from '@assets/pictograms/coffee.svg'
import smartIcon from '@assets/pictograms/smart.svg'
import timeIcon from '@assets/pictograms/time.svg'


export function Characteristic () {
  const styles = twStyles()

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
    <Section className={ttw(styles.Section)}>
      <Container>
        <Grid>

          {characteristics.map((value, i) => (
          <Column size="col-full lg:col-4" key={i}>
            <div className={ttw(styles.Wrapper)}>
              <Image 
                src={value.icon}
                alt="icon"
                className={ttw(styles.Icon)}
              />
              <h3 className={ttw(styles.Title)}>
                {value.title}
              </h3>
              <p className={ttw(styles.Desc)}>
                {value.desc}
              </p>
            </div>
          </Column>
          ))}

        </Grid>
      </Container>
    </Section>
  )
}


function twStyles () {
  return ({
    Section: [
      'bg-primary-50 selection:bg-secondary-90'
    ],
    Wrapper: [
      'w-full max-w-[420px] lg:max-w-none',
      'flex flex-col items-center text-center',
      'px-4 lg:px-5',
      'mx-auto my-5 lg:my-8',
    ],
    Icon: [
      'w-12 h-12 lg:w-[76px] lg:h-[76px]'
    ],
    Title: [
      'font-semibold text-primary-10',
      'text-heading-4 lg:text-heading-3',
      'lg:h-24 lg:grid lg:place-items-center',
      'mt-4'
    ],
    Desc: [
      'font-normal text-primary-10/70',
      'text-body-3 lg:text-body-2',
      'mt-4'
    ]
  })
}