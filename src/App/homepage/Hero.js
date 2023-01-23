// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import { Container } from '../../components/atoms/layout'
import { Button } from '../../components/atoms/Button/Button'



export function HeroSection () {

  const wrapperSize = 'h-[85vh] min-h-[480px] max-h-[768px]'

  return (

    <section className="relative">

        <Container>

            <div 
              className={tidyTw({
                size: wrapperSize,
                layout: 'grid place-content-center pt-[8vh]',
              })}
            >

                <div>

                    <h1 
                      className={tidyTw({
                        typography: ` 
                          font-semibold text-secondary-90 text-center
                          == text-display-3
                          sm:text-display-2
                          md:text-display-1 
                        `,
                      })}
                    >
                      Learn Together, Make <br className='hidden sm:inline' />
                      it Flexible
                    </h1>

                </div>

                <div 
                  className={tidyTw({
                    layout: 'flex flex-wrap justify-center gap-x-2 gap-y-2 mt-9',
                  })}
                >

                    <Button variant="primary" href="">
                      Join Us
                    </Button>

                    <Button variant="secondary" href="/#about">
                      Learn More
                    </Button>

                </div>

            </div>

        </Container>

        <Container fluid 
          role="container-background" 
          className={tidyTw({
            size: wrapperSize,
            layout: `
              absolute -z-10 top-0
              grid place-items-center overflow-hidden
            `,
          })}
        >

            <div
              role="overlay-white-top" 
              className="absolute top-0 right-0 left-0 h-24 bg-white/80 blur-xl z-10" 
            />

            <div 
              className={tidyTw({
                size:'min-w-full',
                layout: `
                  flex justify-center
                  md:items-center md:gap-x-8
                `,
              })}
            >

                <span 
                  role="blurred-circle" 
                  className={tidyTw({
                    size: `
                      == w-48 h-48
                      lg:w-56 lg:h-56
                    `,
                    style: `
                      rounded-full
                      bg-primary-50/[.6] blur-2xl
                    `,
                  })}
                />

                <span 
                  role="blurred-circle" 
                  className={tidyTw({
                    size: `
                      == w-80 h-80
                      lg:w-96 lg:h-96
                    `,
                    style: `
                      rounded-full
                      bg-accent-50/[.6] blur-3xl
                    `,
                  })}
                />
            
            </div>
        
        </Container>

    </section>
    
  )
}


/*
  HERO

  structure:
  ------------------
  -section
    -container
      -div
        -div
          -h1
        -div
          -button
          -button
    -div background
      -div
        -span circle
        -span circle
  ------------------
*/