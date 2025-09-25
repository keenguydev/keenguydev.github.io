import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import FCContacts from "~/entities/contacts";
import { IContact } from "~/entities/contacts/types";
import componentsData from '~/../public/json/contacts.json'

export default component$(() => {
  const contacts = componentsData as IContact[]

  return (
    <div
      class="container"
      style={{
        maxWidth: "45dvh",
      }}
    >
      <div>
        <p class="accent-color" style={{ textAlign: "center" }}>
          Привет
        </p>
        <p>
          Эта страница с моими контактными данными по которым со мной можно
          связаться, сделать заказ, или просто посмотреть проекты на моём
          аккаунте гитхаб
        </p>
      </div>
      <FCContacts contacts={contacts} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "KEENGUY CONTACTS",
};
