import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const location = useLocation();
    const userId = location.url.hash;
    return (
        <div>
            <h1>лысый чорт</h1>
            <p>user {userId}</p>
        </div>
    );
});