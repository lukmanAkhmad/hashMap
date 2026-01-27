import { LinkedList } from "./linked-lists";

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

  const set = (key, value) => {
    const hashCode = hash(key);
    console.log(`kode hash ${key}: ${hashCode}`);

    if (hashCode < 0 || hashCode >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    console.log(`buckets[hashCode] Before: ${buckets[hashCode]}`);

    if (buckets[hashCode] === undefined || buckets[hashCode] === null) {
      const createList = LinkedList();

      buckets[hashCode] = createList;
      buckets[hashCode].prepend({ key, value });

      return;
    }

    if (buckets[hashCode] !== undefined || buckets[hashCode] !== null) {
      const keyValue = buckets[hashCode].searchKey(key);
      const indxKeyValue = buckets[hashCode].find(key);

      console.log(key === keyValue);
      console.log(indxKeyValue);

      if (key === keyValue) {
        console.log(
          "calling removeAt AKA this is an update because the keys are same",
        );
        buckets[hashCode].removeAt(indxKeyValue);
      } else {
        console.log(
          "not calling removeAt AKA this is not an update because the keys are different",
        );
      }

      buckets[hashCode].append({ key, value });
      console.log(
        `buckets[hashCode].toString() After: ${buckets[hashCode].toString()}`,
      );
      return;
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

const hashMap = HashMap();
hashMap.set("Carlos", "I am the old value.");
hashMap.set("Rama", "I am the old value.");
hashMap.set("Sita", "I am the old value.");
hashMap.set("Sita", "I am the new value.");
hashMap.set("yono", "I .");
hashMap.set("delapan", "I am delapan");
hashMap.set("sembilan", "I am sembilan");
hashMap.set("sembalun", "I am sembalun");
hashMap.set("lion", "golden");

console.log(...hashMap.showBuckets());
console.log(hashMap.get("lion"));
console.log(hashMap.has("Sita"));
console.log(hashMap.remove("jaka"));
console.log(hashMap.remove("Carlos"));
console.log(...hashMap.showBuckets());
