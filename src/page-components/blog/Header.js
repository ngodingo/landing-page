import Image from "next/image";
import { Section, Container, Grid, Col } from "../../components/atoms/layout"
import { Button } from '../../components/atoms/Button/Button'



export function Header () {
  return (
    <section className="pt-16 bg-primary-10">
      <Container>
        <Grid>
          <Col className="col-span-4 md:col-span-5 lg:col-span-7">
            <div id="wrapper" className="lg:pr-5">
              <Card />
            </div>
          </Col>
          {/* <Column size="bs:4 md:8" ></Column> */}
        </Grid>
      </Container>
    </section>
  )
}


function Card () {
  return (
    <div id="card" className="bg-white rounded-3xl p-6">
      <div id="writer" className="flex items-center gap-x-4">
        <Image src="" alt="" className="w-8 h-8 bg-blue-400 rounded-full"/>
        <span className="font-light text-secondary-50 text-body-4">
          Gaurav Koli
        </span>
      </div>
      <h3 id="title" className="font-medium text-primary-90 text-body-1 mt-4">
        How To Keep Consistency As Learning Web Development (or anything)
      </h3>
      <p id="desc" className="font-normal text-secondary-50 text-body-4 mt-4">
        Hello, So Youre the one who wants to learn web development (or anything) but can’t keep the consistency while learning it. 
      </p>
      <div id="button-wrapper" className="flex pt-7 gap-x-2">
        <Button variant="primary" href="">
          Read Now
        </Button>
        <Button variant="secondary" href="">
          Browse All
        </Button>
      </div>
    </div>
  )
}

