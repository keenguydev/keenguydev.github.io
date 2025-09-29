import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
    return (
        <div>
            <h1>Профиль пользователя</h1>
            <Slot />
        </div>
    );
});