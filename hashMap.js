import { LinkedList } from "./linked-lists.js";

function HashMap() {
  let capacity = 16;
  let loadFactor = 0.75;
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

  const growth = () => {
    capacity = capacity * 2;
    console.log(`capacity: ${capacity}`);
    let doubleSizeBuckets = new Array(capacity);

    buckets.forEach((el) => {
      let headNode = el.valueLinkedLists();
      let tempNode = headNode;

      while (tempNode !== null) {
        let linkedListKey = tempNode.LLvalue.key;
        let linkedListValue = tempNode.LLvalue.value;
        console.log(`tempNode: ${linkedListKey}`);

        const hashCode = hash(linkedListKey);

        if (hashCode < 0 || hashCode >= doubleSizeBuckets.length) {
          throw new Error(
            "Trying to access doubleSizeBuckets index out of bounds",
          );
        }

        if (
          doubleSizeBuckets[hashCode] === undefined ||
          doubleSizeBuckets[hashCode] === null
        ) {
          const createList = LinkedList();

          doubleSizeBuckets[hashCode] = createList;
          doubleSizeBuckets[hashCode].prepend({
            linkedListKey,
            linkedListValue,
          });
        } else if (
          doubleSizeBuckets[hashCode] !== undefined ||
          doubleSizeBuckets[hashCode] !== null
        ) {
          const keyValue = doubleSizeBuckets[hashCode].searchKey(linkedListKey);
          const indxKeyValue = doubleSizeBuckets[hashCode].find(linkedListKey);

          if (linkedListKey === keyValue)
            doubleSizeBuckets[hashCode].removeAt(indxKeyValue);

          doubleSizeBuckets[hashCode].append({
            linkedListKey,
            linkedListValue,
          });
        }

        tempNode = tempNode.nextNode;
      }
    });

    buckets = doubleSizeBuckets;
  };

  const set = (key, value) => {
    const hashCode = hash(key);
    console.log(`kode hash ${key}: ${hashCode}`);

    if (hashCode < 0 || hashCode >= buckets.length) {
      throw new Error("Trying to access buckets index out of bounds");
    }

    if (buckets[hashCode] === undefined || buckets[hashCode] === null) {
      const createList = LinkedList();

      buckets[hashCode] = createList;
      buckets[hashCode].prepend({ key, value });
    } else if (buckets[hashCode] !== undefined || buckets[hashCode] !== null) {
      const keyValue = buckets[hashCode].searchKey(key);
      const indxKeyValue = buckets[hashCode].find(key);

      if (key === keyValue) buckets[hashCode].removeAt(indxKeyValue);

      buckets[hashCode].append({ key, value });
    }

    const hashMapEntries = length();
    const MAX_BUCKET_ENTRIES = capacity * loadFactor;

    console.log(`hashMapEntries: ${hashMapEntries}`);
    console.log(`MAX_BUCKET_ENTRIES: ${MAX_BUCKET_ENTRIES}`);

    if (hashMapEntries > MAX_BUCKET_ENTRIES) {
      growth();
    }
  };

  const get = (key) => {
    const hashCode = hash(key);
    const valueInBucketsIndxHashCode = buckets[hashCode];

    if (valueInBucketsIndxHashCode === undefined) return null;

    const valueFromKey = valueInBucketsIndxHashCode.searchValue(key);
    return valueFromKey;
  };

  const has = (key) => {
    const hashCode = hash(key);
    const valueInBucketsIndxHashCode = buckets[hashCode];

    if (valueInBucketsIndxHashCode === undefined) return false;

    const constainsKey = valueInBucketsIndxHashCode.containsKey(key);
    return constainsKey;
  };

  const remove = (key) => {
    const hashCode = hash(key);
    const valueInBucketsIndxHashCode = buckets[hashCode];

    if (valueInBucketsIndxHashCode === undefined) return false;

    const indxKeyValue = valueInBucketsIndxHashCode.find(key);

    valueInBucketsIndxHashCode.removeAt(indxKeyValue);
    return true;
  };

  const length = () => {
    let count = 0;

    buckets.forEach((el) => {
      if (el !== undefined) {
        const numberOfKeys = el.size();

        count += numberOfKeys;
      }
    });

    return count;
  };

  const clear = () => {
    buckets.forEach((el) => {
      if (el !== undefined) el.removeLists();
    });
  };

  const keys = () => {
    let allHashMapKey = [];

    buckets.forEach((el) => {
      const allKeyInLinkedList = el.logKeyLL();

      allHashMapKey.push(allKeyInLinkedList);
    });
    const flatAllHashMapKey = allHashMapKey.flat();

    return flatAllHashMapKey;
  };

  const values = () => {
    let allHashMapValues = [];

    buckets.forEach((el) => {
      const allValuesInLinkedList = el.logValueLL();

      allHashMapValues.push(allValuesInLinkedList);
    });
    const flatAllHashMapValues = allHashMapValues.flat();

    return flatAllHashMapValues;
  };

  const entries = () => {
    let allHashMapPairKeyValue = [];

    buckets.forEach((el) => {
      const logPair = el.logPairKeyValueLL();

      allHashMapPairKeyValue.push(logPair);
    });
    const flatAllHashMapPairKeyValue = allHashMapPairKeyValue.flat();

    return flatAllHashMapPairKeyValue;
  };

  const showBuckets = () => {
    console.log(`typeof buckets: ${typeof buckets}`);
    console.log(Array.isArray(buckets));
    console.log(`buckets.length: ${buckets.length}`);
    return buckets.map((val) => val.valueLinkedLists());
  };

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    showBuckets,
  };
}

export { HashMap };
