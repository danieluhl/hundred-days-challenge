import addDays from 'https://deno.land/x/date_fns/addDays/index.js';
import formatISO from 'https://deno.land/x/date_fns/formatISO/index.js';

const daysStr = Deno.args[0];
const days = parseInt(daysStr, 10);
const result = formatISO(addDays(Date.now(), days), {representation: 'date'});

console.log(result);
