'use strict';

import { generateId, generateIdWithAffixes } from './lib/index.js';

export { generateId as ssid, generateIdWithAffixes as ssidWithAffixes };
export default { ssid: generateId, ssidWithAffixes: generateIdWithAffixes };
