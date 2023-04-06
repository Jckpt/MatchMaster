export const parseItems = (items) => {
  const allTrinkets = [3330, 3340, 3364, 2052, 3363, 3513]; // IDs of trinkets and empty slot if no trinket was used
  let trinket = 0;
  if (allTrinkets.includes(items[items.length - 1])) trinket = items.pop();
  //add null value that will be replaced as placeholder box if player didn't use all 6 inventory space
  for (let i = items.length; i < 6; i++) {
    items.push(0);
  }
  return [items, trinket];
};
