import type { ReactNode } from "react";

export type FaqItem = {
  /** Question text, used as the clickable summary and the React key. */
  question: string;
  answer: ReactNode;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

/**
 * Grouped, collapsible FAQ list built on native <details>/<summary>, so it
 * works without client JS and stays keyboard- and screen-reader-friendly.
 */
export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <section key={group.title} className="space-y-3">
          <h2 className="faq-group-heading">{group.title}</h2>

          <ul className="card-list">
            {group.items.map((item) => (
              <li key={item.question}>
                <details className="faq-item">
                  <summary>
                    <span>{item.question}</span>
                  </summary>
                  <div className="pep-prose faq-answer">{item.answer}</div>
                </details>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
