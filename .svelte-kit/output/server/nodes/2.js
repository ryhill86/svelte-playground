import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.8a23a426.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.e8e99d68.js","_app/immutable/chunks/index.14349a18.js"];
export const stylesheets = ["_app/immutable/assets/2.57239003.css"];
export const fonts = [];
