function HashMap() {
  let loadFactor = 0.75;
  let capacity = 16;

  const buckets = new Array(capacity);

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  };

  return {
    hash,
  };
}
