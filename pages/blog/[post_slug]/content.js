import styles from "./content-style"
import { ttw } from "@utilts"
import { Section, Container, Grid, Column } from "@layouts"

export function Content({ post }) {
  return (
    <Section>
      <Container>
        <Grid>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-10 lg:col-start-2">
            <div className={ttw(styles.TitleWrapper)}>
              <h1 className={ttw(styles.Title)}>{post.metadata.title}</h1>
            </div>
          </Column>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-8 lg:col-start-3">
            <article
              className="markdown"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Column>
        </Grid>
      </Container>
    </Section>
  )
}