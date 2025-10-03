import { component$, Slot } from '@builder.io/qwik';
import Header from '~/widgets/Header';

export default component$(() => {
    return (
        <div >
            <Header />
            <Slot />
        </div>
    );
});