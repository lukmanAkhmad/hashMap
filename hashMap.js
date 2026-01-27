function HashMap() {
  let capacity = 16;
  let loadFactor = 0.75;
  const MAX_BUCKET_ENTRIES = capacity * loadFactor;
  console.log(`MAX_BUCKET_ENTRIES: ${MAX_BUCKET_ENTRIES}`);

  let buckets = new Array(capacity);

  const hash = (key) => {
    if (typeof key !== "string") {
      return console.log(
        "For this project, we will only handle keys of type string.",
      );
    }

    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  };

  const createList = LinkedList();
  const set = (key, value) => {
    const hashCode = hash(key);
    // console.log(hashCode);
    console.log(`kode hash ${key}: ${hashCode}`);

    if (buckets[hashCode] === undefined) {
      const newCreateList = LinkedList();

      newCreateList.append({ key, value });
      buckets.splice(hashCode, 1, newCreateList.valueLinkedLists());
      createList.removeLists();
      createList.append(buckets[hashCode].LLvalue);
      return;
    }
    if (buckets[hashCode] !== undefined) {
      const keyValue = createList.searchKey(key);
      const indxKeyValue = createList.find(key);

      console.log(key === keyValue);
      console.log(indxKeyValue);
      if (key === keyValue) {
        console.log(
          "calling removeAt AKA this is an update because the keys are same",
        );
        createList.removeAt(indxKeyValue);
      }

      console.log(
        "not calling removeAt AKA this is not an update because the keys are different",
      );

      createList.append({ key, value });
      buckets.splice(hashCode, 1, createList.valueLinkedLists());
      return;
    }
  };

  const get = (key) => {
    const hashCode = hash(key);
    const bucketsValueAt = buckets[hashCode];
    const newCreateList = LinkedList();

    if (bucketsValueAt === undefined) return null;

    newCreateList.addListToHeadnode(bucketsValueAt);
    const valueFromKey = newCreateList.searchValue(key);
    return valueFromKey;
  };

  const has = (key) => {
    const hashCode = hash(key);
    const bucketsValueAt = buckets[hashCode];
    const newCreateList = LinkedList();

    if (bucketsValueAt === undefined) return false;

    newCreateList.addListToHeadnode(bucketsValueAt);
    const constainsKey = newCreateList.containsKey(key);
    return constainsKey;
  };

  const remove = (key) => {
    const hashCode = hash(key);
    const bucketsValueAt = buckets[hashCode];
    const newCreateList = LinkedList();

    if (bucketsValueAt === undefined) return false;

    newCreateList.addListToHeadnode(bucketsValueAt);

    const indxKeyValue = newCreateList.find(key);

    newCreateList.removeAt(indxKeyValue);
    buckets.splice(hashCode, 1, newCreateList.valueLinkedLists());
    return true;
  };

  const length = () => {
    let count = 0;

    buckets.forEach((el) => {
      const newCreateList = LinkedList();

      let linkListInBucket = null;

      if (el !== undefined) linkListInBucket = el;

      newCreateList.addListToHeadnode(linkListInBucket);

      const numberOfKeys = newCreateList.size();

      count += numberOfKeys;
    });

    return count;
  };

  const clear = () => {
    buckets.forEach((el, indx) => {
      const newCreateList = LinkedList();
      newCreateList.removeLists();
      buckets.splice(indx, 1, newCreateList.valueLinkedLists());
    });
  };

  const keys = () => {
    let allHashMapKey = [];

    buckets.forEach((el) => {
      const newCreateList = LinkedList();

      newCreateList.addListToHeadnode(el);

      const allKey = newCreateList.logKeyLL();

      allHashMapKey.push(allKey);
    });
    const flatAllHashMapKey = allHashMapKey.flat();

    return flatAllHashMapKey;
  };

  const values = () => {
    let allHashMapValues = [];

    buckets.forEach((el) => {
      const newCreateList = LinkedList();

      newCreateList.addListToHeadnode(el);

      const allValues = newCreateList.logValueLL();

      allHashMapValues.push(allValues);
    });
    const flatAllHashMapValues = allHashMapValues.flat();

    return flatAllHashMapValues;
  };

  const entries = () => {
    let allHashMapPairKeyValue = [];

    buckets.forEach((el) => {
      const newCreateList = LinkedList();

      newCreateList.addListToHeadnode(el);

      const logPair = newCreateList.logPairKeyValueLL();

      allHashMapPairKeyValue.push(logPair);
    });
    const flatAllHashMapPairKeyValue = allHashMapPairKeyValue.flat();

    return flatAllHashMapPairKeyValue;
  };

  const showBuckets = () => buckets;

  return {
    hash,
    set,
    showBuckets,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

const test = HashMap();
test.set("Carlos", "I am the old value.");
test.set("Rama", "I am the old value.");
test.set("Sita", "I am the new value.");
test.set("yono", "I .");
test.set("delapan", "I am delapan");
test.set("sembilan", "I am sembilan");
test.set("sembalun", "I am sembalun");

console.log(...test.showBuckets());

