import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.127998a7.js","_app/immutable/chunks/scheduler.17727410.js","_app/immutable/chunks/index.2adcb947.js","_app/immutable/chunks/index.5870c42e.js"];
export const stylesheets = ["_app/immutable/assets/2.57239003.css"];
export const fonts = [];
