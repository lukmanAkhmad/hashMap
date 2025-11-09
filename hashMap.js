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
    console.log(createList.logKeyLL());
  };

  const showBuckets = () => buckets;

  return {
    hash,
    set,
    showBuckets,
  };
}

const test = HashMap();
test.set("Carlos", "I am the old value.");
test.set("Rama", "I am the old value.");
test.set("Sita", "I am the new value.");
test.set("yono", "I am the old value.");
test.set("yono", "I am the new value.");
test.set("yono", "I .");
test.set("delapan", "I am");
test.set("sembilan", "I am");

console.log(...test.showBuckets());
