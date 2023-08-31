import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const rhLogoDark = "/_app/immutable/assets/rhLogo2.19a93b86.svg";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-aa2vqb.svelte-aa2vqb{display:flex;justify-content:space-between}.corner.svelte-aa2vqb.svelte-aa2vqb{width:3em;height:3em}.corner.svelte-aa2vqb a.svelte-aa2vqb{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-aa2vqb img.svelte-aa2vqb{width:2em;height:2em;object-fit:contain}nav.svelte-aa2vqb.svelte-aa2vqb{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-aa2vqb.svelte-aa2vqb{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;list-style:none;background:var(--background);background-size:contain}li.svelte-aa2vqb.svelte-aa2vqb{position:relative;height:100%;&.active {\n			text-decoration: underline;\n		}}nav.svelte-aa2vqb a.svelte-aa2vqb{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-aa2vqb.svelte-aa2vqb:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activePage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const prerender = false;
  console.log("page", $page);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css$1);
  activePage = $page.url.pathname;
  {
    console.log("activePage", activePage);
  }
  $$unsubscribe_page();
  return `<header class="svelte-aa2vqb"><div class="corner svelte-aa2vqb" data-svelte-h="svelte-1i3p1zk"><a href="/" class="svelte-aa2vqb"><img${add_attribute("src", rhLogoDark, 0)} alt="Ryan Hill Logo" class="svelte-aa2vqb"></a></div> <nav class="svelte-aa2vqb"><ul class="svelte-aa2vqb"><li class="${escape(null_to_empty(activePage === "/" ? "active" : ""), true) + " svelte-aa2vqb"}"${add_attribute("aria-current", activePage === "/" ? "page" : void 0, 0)}><a href="/" class="svelte-aa2vqb" data-svelte-h="svelte-5a0zws">Home</a></li> <li class="${escape(null_to_empty(activePage === "/about" ? "active" : ""), true) + " svelte-aa2vqb"}"${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)}><a href="/about" class="svelte-aa2vqb" data-svelte-h="svelte-iphxk9">About</a></li> <li class="${escape(null_to_empty(activePage === "/experience" ? "active" : ""), true) + " svelte-aa2vqb"}"${add_attribute(
    "aria-current",
    $page.url.pathname === "/experience" ? "page" : void 0,
    0
  )}><a href="/experience" class="svelte-aa2vqb" data-svelte-h="svelte-18vic4j">Experience</a></li> <li class="${escape(null_to_empty(activePage === "/projects" ? "active" : ""), true) + " svelte-aa2vqb"}"${add_attribute("aria-current", $page.url.pathname === "/projects" ? "page" : void 0, 0)}><a href="/experience" class="svelte-aa2vqb" data-svelte-h="svelte-1bmsdup">Projects</a></li></ul></nav> <div class="corner svelte-aa2vqb" data-svelte-h="svelte-lkkm77"><a href="https://github.com/ryhill86/" class="svelte-aa2vqb"><img${add_attribute("src", github, 0)} alt="GitHub" class="svelte-aa2vqb"></a></div> </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-8o1gnw a.svelte-8o1gnw{font-weight:bold}@media(min-width: 480px){footer.svelte-8o1gnw.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-8o1gnw">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-8o1gnw">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-8o1gnw" data-svelte-h="svelte-1dlfr5"><p>visit <a href="https://kit.svelte.dev" class="svelte-8o1gnw">kit.svelte.dev</a> to learn SvelteKit</p></footer> </div>`;
});
export {
  Layout as default
};
