import { component$, Slot, useVisibleTask$, } from "@builder.io/qwik";
import style from "./Popup.module.css";

export interface IPopup {
  isShow: boolean;
  bg?: string;
}

const Popup = component$<IPopup>(({ isShow, bg }) => {
  useVisibleTask$(({ track }) => {
    track(() => isShow);

    // Получаем ссылки на элементы html и body
    const rootElement = document.documentElement;
    const bodyElement = document.body;

    if (isShow) {
      // Блокируем прокрутку
      bodyElement.style.overflow = 'hidden';
      rootElement.style.overflow = 'hidden'; // Для большей надежности в некоторых браузерах :cite[5]
    } else {
      // Восстанавливаем прокрутку
      bodyElement.style.overflow = '';
      rootElement.style.overflow = '';
    }

    // Очистка при размонтировании компонента (обязательно!)
    return () => {
      bodyElement.style.overflow = '';
      rootElement.style.overflow = '';
    };
  });
  
  if (isShow) {
    return (
      <div class={style.popup} style={{ background: bg }}>
        {" "}
        <div class={style.popup__wrapper}><Slot /></div>
      </div>
    );
  } else {

    return <></>
  }
});

export default Popup;
