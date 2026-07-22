import { RouteTransitionLink as Link } from "./RouteTransitionLink";
import type { ClassGroup, ContentPost, Sensei } from "@/data/site";
import { siteInfo } from "@/data/site";
import { MediaBlock } from "./MediaBlock";
import sharedStyles from "./Shared.module.css";
import styles from "./Cards.module.css";

export function ClassCard({ group }: { group: ClassGroup }) {
  return (
    <article className={styles.card}>
      <MediaBlock
        className={styles.classImage}
        label={`Foto · ${group.imageLabel}`}
      />
      <div className={styles.cardBody}>
        <div>
          <h3>{group.name}</h3>
          <div className={styles.meta}>{group.audience}</div>
        </div>
        <p>{group.description}</p>
        <div className={styles.small}>
          {group.guidance.value}
        </div>
        <a className={sharedStyles.inlineLink} href={siteInfo.whatsappClass}>
          Perguntar sobre esta turma
        </a>
      </div>
    </article>
  );
}

export function ClassGrid({ groups }: { groups: ClassGroup[] }) {
  return (
    <div className={styles.classGrid}>
      {groups.map((group) => (
        <ClassCard group={group} key={group.id} />
      ))}
    </div>
  );
}

export function SenseiCard({ sensei }: { sensei: Sensei }) {
  return (
    <article className={styles.card}>
      <MediaBlock
        className={styles.senseiImage}
        label={`Retrato · ${sensei.name}`}
        src={sensei.image}
      />
      <div className={styles.cardBody}>
        <h3>{sensei.name}</h3>
        <div className={styles.meta}>{sensei.grade.value}</div>
        <p>{sensei.role}</p>
      </div>
    </article>
  );
}

export function SenseiGrid({ people }: { people: Sensei[] }) {
  return (
    <div className={styles.senseiGrid}>
      {people.map((sensei) => (
        <SenseiCard key={sensei.name} sensei={sensei} />
      ))}
    </div>
  );
}

export function FeaturedSensei({ sensei }: { sensei: Sensei }) {
  return (
    <article className={styles.featuredSensei}>
      <MediaBlock label={`Retrato · ${sensei.name}`} src={sensei.image} />
      <div className={styles.featuredSenseiBody}>
        <p className={styles.personLabel}>Sensei</p>
        <h3>{sensei.name}</h3>
        <div className={styles.meta}>
          {sensei.grade.value} · {sensei.role}
        </div>
        <p>{sensei.summary}</p>
      </div>
    </article>
  );
}

export function InstructorGrid({ people }: { people: Sensei[] }) {
  return (
    <div className={styles.leadGrid}>
      {people.map((sensei) => (
        <article
          className={`${styles.card} ${styles.leadCard}`}
          key={sensei.name}
        >
          <MediaBlock
            className={styles.leadImage}
            label={`Retrato · ${sensei.name}`}
            src={sensei.image}
            objectPosition={sensei.imagePosition}
          />
          <div className={`${styles.cardBody} ${styles.leadBody}`}>
            <div>
              <p className={styles.personLabel}>Sensei</p>
              <h3>{sensei.name}</h3>
              <div className={styles.meta}>
                {sensei.grade.value} · {sensei.role}
              </div>
            </div>
            <p>{sensei.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContentCard({ post }: { post: ContentPost }) {
  return (
    <Link className={styles.card} href={post.href}>
      <MediaBlock
        className={styles.contentImage}
        label={post.imageLabel}
        src={post.image}
        objectPosition={post.imagePosition}
      />
      <div className={styles.cardBody}>
        <div className={styles.postMeta}>
          <span className={sharedStyles.tag}>{post.category}</span>
          {post.date ? <span className={styles.postDate}>{post.date}</span> : null}
        </div>
        <h3>{post.title}</h3>
        <p>{post.summary}</p>
      </div>
    </Link>
  );
}

export function ContentGrid({ posts }: { posts: ContentPost[] }) {
  return (
    <div className={styles.contentGrid}>
      {posts.map((post) => (
        <ContentCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
