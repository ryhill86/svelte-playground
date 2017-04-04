import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const rhLogoDark = "/_app/immutable/assets/rh-logo-dark.8b291f1b.svg";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-15nenjg.svelte-15nenjg{display:flex;flex-direction:column;justify-content:space-between;height:100vh;background-color:white}.corner.svelte-15nenjg.svelte-15nenjg{width:3em;height:3em}.corner.svelte-15nenjg a.svelte-15nenjg{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-15nenjg img.svelte-15nenjg{width:2em;height:2em;object-fit:contain}nav.svelte-15nenjg.svelte-15nenjg{display:flex;flex-direction:column;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-15nenjg.svelte-15nenjg{position:relative;padding:0;margin:0;height:3em;display:flex;flex-direction:column;justify-content:center;list-style:none;background:var(--background);background-size:contain}li.svelte-15nenjg.svelte-15nenjg{position:relative;height:100%}li[aria-current='page'].svelte-15nenjg.svelte-15nenjg::before{--size:6px;content:'';width:0;height:0;position:absolute;top:1px;left:88%;border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1);transform:rotate(90deg)}nav.svelte-15nenjg a.svelte-15nenjg{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-15nenjg.svelte-15nenjg:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-15nenjg"><div class="corner svelte-15nenjg" data-svelte-h="svelte-1i3p1zk"><a href="/" class="svelte-15nenjg"><img${add_attribute("src", rhLogoDark, 0)} alt="Ryan Hill Logo" class="svelte-15nenjg"></a></div> <nav class="svelte-15nenjg"><ul class="svelte-15nenjg"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-15nenjg"><a href="/" class="svelte-15nenjg" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="svelte-15nenjg"><a href="/about" class="svelte-15nenjg" data-svelte-h="svelte-iphxk9">About</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/sverdle") ? "page" : void 0,
    0
  )} class="svelte-15nenjg"><a href="/sverdle" class="svelte-15nenjg" data-svelte-h="svelte-1mtf8rh">Sverdle</a></li></ul></nav> <div class="corner svelte-15nenjg" data-svelte-h="svelte-1gilmbv"><a href="https://github.com/sveltejs/kit" class="svelte-15nenjg"><img${add_attribute("src", github, 0)} alt="GitHub" class="svelte-15nenjg"></a></div> </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-wes27n.svelte-wes27n{display:flex;flex-direction:column;min-height:100vh}.flex-container.svelte-wes27n.svelte-wes27n{display:flex}main.svelte-wes27n.svelte-wes27n{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-wes27n.svelte-wes27n{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-wes27n a.svelte-wes27n{font-weight:bold}@media(min-width: 480px){footer.svelte-wes27n.svelte-wes27n{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-wes27n"><div class="flex-container svelte-wes27n">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-wes27n">${slots.default ? slots.default({}) : ``}</main></div> <footer class="svelte-wes27n" data-svelte-h="svelte-1dlfr5"><p>visit <a href="https://kit.svelte.dev" class="svelte-wes27n">kit.svelte.dev</a> to learn SvelteKit</p></footer> </div>`;
});
export {
  Layout as default
};
