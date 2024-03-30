const wordsArray = [
  "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma",
  "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust",
  "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak",
  "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay",
  "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh",
  "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain",
  "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue",
  "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel",
  "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma",
  "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy",
  "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch",
  "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt",
  "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge",
  "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer",
  "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer",
  "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove",
  "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino",
  "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton"
];

export const getWord = () => {
  const date = new Date()
  const ind = ((date.getFullYear() % 2000) + date.getMonth() * date.getDate()) % wordsArray.length
  return wordsArray[ind].toUpperCase()
}