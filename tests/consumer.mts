import * as api from '@lp-labs/unix-second-converter';
import { toUnixSeconds } from '@lp-labs/unix-second-converter';
console.log(toUnixSeconds('1970-01-01T00:00:01Z'));
// @ts-expect-error invalid argument must be rejected by declarations
api.toUnixSeconds(1);
