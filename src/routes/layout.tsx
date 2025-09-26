import { component$, Slot } from '@builder.io/qwik';
import Header from '~/widgets/header';

export default component$(() => {
    return (
        <div >
            <Header />
            <Slot /> {/* <== This is where the route will be inserted */}
        </div>
    );
});