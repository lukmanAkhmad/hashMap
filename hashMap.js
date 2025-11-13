import { LinkedList } from "./linked-lists.js";

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

  const createList = LinkedList();
  const set = (key, value) => {
    const hashCode = hash(key);

    if (buckets[hashCode] === undefined) {
      const newCreateList = LinkedList();

      newCreateList.append({ key, value });
      buckets.splice(hashCode, 1, newCreateList.valueLinkedLists());
      createList.removeLists();
      createList.append(buckets[hashCode].LLvalue);
    } else if (buckets[hashCode] !== undefined) {
      const keyValue = createList.searchKey(key);
      const indxKeyValue = createList.find(key);

      console.log(key === keyValue);
      console.log(indxKeyValue);
      if (key === keyValue) {
        console.log("calling removeAt");
        createList.removeAt(indxKeyValue);
      }

      createList.append({ key, value });
      buckets.splice(hashCode, 1, createList.valueLinkedLists());
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
  };
}

const test = HashMap();
test.set("Carlos", "I am the old value.");
test.set("Rama", "I am the old value.");
test.set("Sita", "I am the new value.");
test.set("yono", "I am the old value.");
test.set("yono", "I am the new value.");
test.set("yono", "I .");
test.set("delapan", "I am delapan");
test.set("sembilan", "I am sembilan");
test.set("sembalun", "I am sembalun");

console.log(...test.showBuckets());

// test.clear();
// console.log("calling clear");

// console.log(...test.showBuckets());
console.log(`length bucket: ${test.showBuckets().length}`);
console.log(`length: ${test.length()}`);
console.log(test.keys());
console.log(test.values());
