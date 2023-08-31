

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5328c8fa.js","_app/immutable/chunks/scheduler.17727410.js","_app/immutable/chunks/index.2adcb947.js","_app/immutable/chunks/stores.f6c9f39f.js","_app/immutable/chunks/singletons.fe486f55.js","_app/immutable/chunks/index.5870c42e.js"];
export const stylesheets = [];
export const fonts = [];
