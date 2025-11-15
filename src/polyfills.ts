// src/polyfills.ts

// Runtime polyfill for process.env in browser environments (supports Vercel injection without ReferenceError)
if (typeof process === 'undefined') {
  interface ProcessPolyfill {
    env: Record<string, string | undefined>;
  }

  globalThis.process = { env: {} } as unknown as NodeJS.Process & ProcessPolyfill;
}

import 'zone.js';