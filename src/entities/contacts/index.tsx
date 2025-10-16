import { IContact } from "./types";
import { component$ } from "@builder.io/qwik";

const Contacts = component$<{ contacts: IContact[] }>(({ contacts }) => {
  if (contacts.length === 0) return <></>;
  return (
    <div
      class="flex flex-col justify-center overflow-hidden"
    >
      {contacts.length > 0 && contacts.map((contact) => {
        if (contact.links.length === 0) return <></>;
        return (
          <div class="mt-[4dvh]" key={contact.id}>
            <h2 class="accent-color" style={{ textAlign: "center" }}>
              {contact.title}
            </h2>
            <ul>
              {contact.links.map((link) => (
                <li
                  key={link.id}
                  class="flex gap-x-[.5dvh] flex-wrap mb-[.25dvh]"
                >
                  <h4>{link.title}:</h4>
                  <a class="accent-color" href={link.link}>
                    {link.link}
                  </a>
                  {link.accent && (
                    <p
                      class="text-[rgba(255,255,255,.5)]"
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


export default Contacts