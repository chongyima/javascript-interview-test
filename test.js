function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
const users = [
  {
    id: 1,
    name: "Employee #1",
    activatedOn: new Date("2019-01-01"),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: "Employee #2",
    activatedOn: new Date("2019-01-01"),
    deactivatedOn: null,
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

function monthlyCharge(month, subscription, users) {
  const curMonth = new Date(month);
  const firstDate = firstDayOfMonth(
    new Date(curMonth.getFullYear(), curMonth.getMonth() + 1, 1)
  );
  const lastDate = lastDayOfMonth(
    new Date(curMonth.getFullYear(), curMonth.getMonth() + 1, 1)
  );
  const dailyPriceInCents =
    subscription.monthlyPriceInCents / lastDate.getDate();
  let date = firstDate;
  console.log(new Date("2019-01-01"));
  let sum = 0;
  while (date <= lastDate) {
    console.log(date.getDate());
    const activeUserCounts = users.filter(
      (user) =>
        user.activatedOn <= date &&
        (user.deactivatedOn === null || user.deactivatedOn >= date)
    ).length;
    sum += activeUserCounts * dailyPriceInCents;

    date = nextDay(date);
  }
  return sum;
}
console.log(monthlyCharge("2020-12", plan, users));
