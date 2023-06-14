import styles from './characteristic-style'
import { ttw } from 'common/utils'

import Image from 'next/image'
import { Section, Container, Grid, Column } from '@layouts'

import coffeeIcon from '@public/static-db/home/icons/coffee.svg'
import smartIcon from '@public/static-db/home/icons/smart.svg'
import timeIcon from '@public/static-db/home/icons/time.svg'


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