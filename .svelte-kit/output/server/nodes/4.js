

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9f726f34.js","_app/immutable/chunks/scheduler.17727410.js","_app/immutable/chunks/index.2adcb947.js"];
export const stylesheets = [];
export const fonts = [];
