import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
    const userId = useSignal('')
    useVisibleTask$(
        () => {
            userId.value = window.location.hash
        }
    )
    return (
        <div>
            <h1>лысый чорт</h1>
            <p>user {userId.value}</p>
        </div>
    );
});