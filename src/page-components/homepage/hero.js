// utilts
import { tidyTw } from '../../utilts/tidy-tailwind'

// components
import { Container } from '../../components/layout'
import { Button } from '../../components/button'



export function HeroSection () {

  const wrapperSize = 'w-full h-[85vh] min-h-[480px] max-h-[768px]'

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
                    layout: 'flex flex-wrap justify-center gap-x-1 gap-y-2 mt-9',
                  })}
                >

                    <Button 
                      theme="primary" 
                      href="#1"
                      text="Join Us"  
                    />

                      <Button 
                      theme="secondary"  
                      href="#2"
                      text="Learn More" 
                    />

                </div>

            </div>

        </Container>

        <div 
          role="background" 
          className={tidyTw({
            size: wrapperSize,
            layout: `
              absolute -z-10 top-0
              grid place-items-center overflow-hidden
            `,
          })}
        >

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
        
        </div>

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