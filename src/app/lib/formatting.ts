export function moneyFormatter(cents: number): string{
  let money = pad(cents, 3);
  money = money.slice(0, money.length - 2) + ',' + money.slice(money.length - 2);
  return money + ' €';
}

export function pad(num:number, size:number): string {
  let str = num.toString();
  while (str.length < size) str = '0' + str;
  return str;
}



