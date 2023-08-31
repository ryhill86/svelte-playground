

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.8cae5961.js","_app/immutable/chunks/scheduler.17727410.js","_app/immutable/chunks/index.2adcb947.js"];
export const stylesheets = [];
export const fonts = [];
