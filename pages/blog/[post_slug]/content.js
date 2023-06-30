import { ttw, formatDate } from "@utils";
import { Section, Container, Grid, Column } from "@layouts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function Content({ post }) {
  const styles = twStyles();

  return (
    <Section>
      <Container>
        <Grid>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-10 lg:col-start-2">
            <div className={ttw(styles.TitleWrapper)}>
              <h1 className={ttw(styles.Title)}>{post.metadata.title}</h1>
            </div>
          </Column>
          <Column size="col-4 md:col-8 lg:col-2">
            <Card post={post} />
          </Column>
          <Column size="col-4 md:col-6 md:col-start-2 lg:col-8 lg:col-start-3">
            <ReactMarkdown className="markdown">{post.content}</ReactMarkdown>
          </Column>
        </Grid>
      </Container>
    </Section>
  );
}

function Card({ post }) {
  const styles = twStyles();

  return (
    <div className={ttw(styles.Card.Container)}>
      <img
        className={ttw(styles.Card.AuthorImage)}
        src={post.metadata.author.image}
        alt=""
      />
      <div>
        <p className={ttw(styles.Card.AuthorName)}>
          {post.metadata.author.name}
        </p>
        <p className={ttw(styles.Card.Info)}>
          {formatDate(post.metadata.date)}
        </p>
        <p className={ttw(styles.Card.Info)}>{post.metadata.tags[0]}</p>
      </div>
    </div>
  );
}

function twStyles() {
  return {
    TitleWrapper: ["grid place-items-center", "py-16 lg:py-36"],
    Title: [
      "font-medium text-primary-90 text-center",
      "text-heading-1 lg:text-display-2",
    ],
    Card: {
      Container: [
        "max-w-fit bg-white rounded-3xl",
        "border border-primary-30",
        "flex flex-row lg:flex-col gap-4 lg:items-center m-auto",
        "lg:text-center",
        "p-4 md:p-7 mb-5 lg:mb-0 lg:mt-6",
      ],
      AuthorImage: ["w-8 h-8 md:w-12 md:h-12", "mt-1 lg:mt-0"],
      AuthorName: [
        "font-semibold text-secondary-50",
        "text-body-4 md:text-body-3",
      ],
      Info: ["font-light text-secondary-30", "text-body-4 md:text-body-3"],
    },
  };
}
