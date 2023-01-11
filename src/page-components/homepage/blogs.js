// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import Link from 'next/link'
import { Button } from '../../components/button'
import { Section, Container, Grid, Col } from '../../components/layout'


export function Blog () {

  const articleList = [
    {
      id: '',
      title: 'JavaScript learning roadmap 2023 — The Ultimate Guide',
      desc: 'What is JavaScript? — A high-level definition JavaScript is a scripting or programming language that allows you to implement complex featur ...',
      image: '',
      date: 'Desember 2022',
      slug: '',
    },
    {
      id: '',
      title: 'Mastering Dart & Flutter DevTools — Part 1: Introduction & Installation',
      desc: 'After building a full-fledged feature rich Flutter app, you might experience an urge to build a release bundle, upload it on the app store or play store and share it with the world ...',
      image: '',
      date: 'Desember 2022',
      slug: '',
    },
    {
      id: '',
      title: 'Basic concepts that every rookie data scientist should know!',
      desc: 'When we are dealing with data, no matter the volume, the better it’s mapped out the easier for us to handle it. In data science there is a term called Estimates of Location ...',
      image: '',
      date: 'Desember 2022',
      slug: '',
    }
  ]


  return (

    <Section id="blog" className='bg-primary-10'>

        <Container>

            <Grid>

                {articleList.map(article => (

                    <Col
                      key={article.id}
                      className={tidyTw({
                        size: `
                          == col-span-4
                          md:col-span-6 md:col-start-2
                          lg:col-span-8 lg:col-start-3
                        `,
                      })}
                    >

                        <Link href="#hello">
                        
                            <div 
                              className={tidyTw({
                                layout: 'py-8 group',
                                style: 'border-b border-secondary-10'
                              })}
                            >

                                <span 
                                  className={tidyTw({
                                    typography: `
                                      font-medium text-secondary-30
                                      == text-body-4
                                      lg:text-body-3
                                    `,
                                  })}
                                >
                                  {article.date}
                                </span>

                                <h3
                                  className={tidyTw({
                                    typography: `
                                      font-semibold 
                                      == text-secondary-90 
                                      group-hover:text-primary-50
                                      == text-heading-4
                                      lg:text-heading-3
                                    `,
                                    layout: 'mt-1',
                                  })}
                                >
                                  {article.title}
                                </h3>

                                <p
                                  className={tidyTw({
                                    typography: `
                                      font-regular text-secondary-30 line-clamp-2 
                                      == text-body-3
                                      lg:text-body-2
                                    `,
                                    layout: 'mt-2'
                                  })}
                                >
                                  {article.desc}
                                </p>

                            </div>

                        </Link>

                    </Col> 
                
                ))}


            </Grid>

            <div className=" mt-8">

                <Button 
                  theme="secondary"
                  href=""
                  text="Load More"
                  className="mx-auto"
                />

            </div>

        </Container>

    </Section>

  )
}
