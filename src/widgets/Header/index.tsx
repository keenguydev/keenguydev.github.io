import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";


export default component$(() => {
    const loc = useLocation()
    return (
        <header class="p-[2.2dvh_0] bg-[#040503]">
            <div class="container">
                <div class="flex relative items-center justify-between gap-[2.2dvh]">
                    <a class="max-w-[25dvh]" href="#">
                        <picture>
                            <source srcset="/assets/logo.svg" media="(max-width: 768px)" />
                            <img src="/assets/logo-desktop.svg" />
                        </picture>
                    </a>
                    <div class="flex gap-[2.2dvh] items-center">
                        <nav class="flex gap-[2.2dvh] items-center">
                            <li class="transition-[all_275ms_ease] hover:text-[#8BCE6D]">
                                <Link
                                    class={`"" ${!loc.url.pathname.includes("contacts") ? "text-[#8BCE6D]" : ""}`}
                                    href={"/"}
                                >
                                    Портфолио
                                </Link>
                            </li>
                            <li class="transition-[all_275ms_ease] hover:text-[#8BCE6D]">
                                <Link
                                    class={`"" ${loc.url.pathname.includes("contacts") ? "text-[#8BCE6D]" : ""}`}
                                    href={"/contacts"}
                                >
                                    Контакты
                                </Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
});