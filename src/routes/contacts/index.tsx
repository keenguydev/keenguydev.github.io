import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Contacts from "~/entities/contacts";
import { IContact } from "~/entities/contacts/types";

export default component$(() => {
  const contacts = useResource$<IContact[]>(async () => {
    const response = await fetch('https://keenguydev.github.io/json/contacts.json')
    const data = await response.json()
    return data
  })

  return (
    <div
      class="container"
      style={{
        maxWidth: "45dvh",
      }}
    >
      <div>
        <p class="accent-color text-center">
          Привет
        </p>
        <p>
          Эта страница с моими контактными данными по которым со мной можно
          связаться, сделать заказ, или просто посмотреть проекты на моём
          аккаунте гитхаб
        </p>
      </div>
      <Resource
        value={contacts}
        onPending={() => <>...loading</>}
        onResolved={(_contacts) => <Contacts contacts={_contacts} />}
      />

    </div>
  );
});

export const head: DocumentHead = {
  title: "KEENGUY CONTACTS",
};
