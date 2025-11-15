if (typeof process === 'undefined') {
  interface ProcessPolyfill {
    env: Record<string, string | undefined>;
  }

  globalThis.process = { env: {} } as unknown as NodeJS.Process & ProcessPolyfill;
}

import 'zone.js';