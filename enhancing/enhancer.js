module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { 
    ...item,
    enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
  };
}

function fail(item) {
  const result = { ...item }

  if (item.enhancement < 15) {
    result.durability -= 5;
  }
  if (item.enhancement > 15) {
    result.durability -= 10;
  }
  if (item.enhancement > 16) {
    result.enhancement -= 1;
  }

  return result;
  }



function repair(item) {
  item = { ...item, durability: 100 };
  return item;
}

function get(item) {
  return { ...item };
}
