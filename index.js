var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here

function destructivelyAppendKitten(name)
{
  return kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name)
{
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name)
{
  return kittens.shift(name)
}

