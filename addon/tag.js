import curriedComputed from 'ember-macro-helpers/curried-computed';

export default function(strings, ...values) {
  return curriedComputed((...values) => {
    return strings.reduce((total, cur, i) => {
      return total + values[i - 1] + cur;
    });
  })(...values);
}
