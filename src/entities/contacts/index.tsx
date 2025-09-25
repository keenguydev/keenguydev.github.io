import { IContact } from "./types";
import style from "./FCContacts.module.css";
import { component$ } from "@builder.io/qwik";

const FCContacts = component$<{ contacts: IContact[] }>(({ contacts }) => {
  if (contacts.length === 0) return <></>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {contacts.length > 0 && contacts.map((contact) => {
        if (contact.links.length === 0) return <></>;
        return (
          <div class={style.card} key={contact.id}>
            <h2 class="accent-color" style={{ textAlign: "center" }}>
              {contact.title}
            </h2>
            <ul>
              {contact.links.map((link) => (
                <li
                  key={link.id}
                  style={{
                    display: "flex",
                    columnGap: ".5dvh",
                    flexWrap: "wrap",
                    marginBottom: ".25dvh",
                  }}
                >
                  <h4>{link.title}:</h4>
                  <a class="accent-color" href={link.link}>
                    {link.link}
                  </a>
                  {link.accent && (
                    <p
                      style={{
                        color: "rgba(255,255,255,.5)",
                      }}
                    >
                      - {link.accent}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
})

export default FCContacts;
