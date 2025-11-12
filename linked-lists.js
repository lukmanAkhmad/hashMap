function LinkedList() {
  let headNode = null;

  const append = (value) => {
    if (headNode === null) {
      headNode = CreateNode(value);
    } else {
      let tempNode = headNode;
      while (tempNode.nextNode !== null) {
        tempNode = tempNode.nextNode;
      }
      tempNode.nextNode = CreateNode(value);
    }
  };

  const prepend = (value) => (headNode = CreateNode(value, headNode));

  const size = () => {
    let count = 0;
    let tempNode = headNode;
    while (tempNode !== null) {
      count++;
      tempNode = tempNode.nextNode;
    }
    return count;
  };

  const head = () => {
    if (headNode === null) return null;

    return headNode.value;
  };

  const tail = () => {
    if (headNode === null) return null;

    let tempNode = headNode;
    while (tempNode.nextNode !== null) {
      tempNode = tempNode.nextNode;
    }
    return tempNode.value;
  };

  const at = (index) => {
    if (headNode === null) return null;

    const sizeLinkedList = size();
    const sizeLinkedListMinusOne = sizeLinkedList - 1;
    let tempNode = headNode;

    if (index < 0 || index > sizeLinkedListMinusOne) {
      return "Index start at 0, and the index must be within the bounds of the linked list size.";
    }

    for (let i = 0; i < index; i++) {
      tempNode = tempNode.nextNode;
    }
    console.log(tempNode.LLvalue.key);
    return tempNode.LLvalue.key;
  };

  const pop = () => {
    if (headNode === null) return "Cannot delete, linked list is empty";

    let cur = headNode;
    let prev = null;

    while (cur.nextNode !== null) {
      prev = cur;
      cur = cur.nextNode;
    }

    if (prev === null) {
      headNode = null;
      return cur.value;
    }
    prev.nextNode = null;
    return cur.value;
  };

  const contains = (value) => {
    if (headNode === null) return "Linked list is empty";

    let tempNode = headNode;

    while (tempNode !== null) {
      if (tempNode.value === value) return true;
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return false;
  };

  const find = (value) => {
    if (headNode === null) return "Linked list is empty";

    let tempNode = headNode;
    let indxNode = 0;

    while (tempNode !== null) {
      if (tempNode.LLvalue.key === value) return indxNode;
      indxNode++;
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return null;
  };

  const toString = () => {
    let tempNode = headNode;
    let str = "";
    while (tempNode !== null) {
      str += `( ${tempNode.value} ) -> `;
      tempNode = tempNode.nextNode;
    }
    str += tempNode;
    return str;
  };

  const insertAt = (val, index) => {
    if (headNode === null) return null;

    const valAtIndex = at(index);
    const sizeLinkedList = size();
    const sizeLinkedListMinusOne = sizeLinkedList - 1;
    let cur = headNode;
    let prev = null;

    if (index < 0 || index > sizeLinkedListMinusOne) {
      return console.log(
        "Index start at 0, " +
          "and the index must be within " +
          "the bounds of the linked list size."
      );
    }

    if (cur.value === valAtIndex) {
      prepend(val);
      return;
    }

    while (cur !== null && cur.value !== valAtIndex) {
      prev = cur;
      cur = cur.nextNode;
    }

    if (cur !== null) {
      prev.nextNode = CreateNode(val, cur);
    }
  };

  const removeAt = (index) => {
    if (headNode === null) {
      return console.log("Cannot delete, linked list is empty");
    }

    const valAtIndex = at(index);
    const sizeLinkedList = size();
    const sizeLinkedListMinusOne = sizeLinkedList - 1;
    let cur = headNode;
    let prev = null;

    if (index < 0 || index > sizeLinkedListMinusOne) {
      return console.log(
        "Index start at 0, " +
          "and the index must be within " +
          "the bounds of the linked list size."
      );
    }

    if (index === 0) {
      headNode = headNode.nextNode;
      return;
    }

    while (cur !== null && cur.LLvalue.key !== valAtIndex) {
      prev = cur;
      cur = cur.nextNode;
    }

    if (cur !== null) {
      prev.nextNode = cur.nextNode;
    }
  };

  const valueLinkedLists = () => {
    if (headNode === null) return undefined;
    return headNode;
  };

  const removeLists = () => (headNode = null);

  const logKeyLL = () => {
    let tempNode = headNode;
    let keyArr = [];
    
    while (tempNode !== null) {
      keyArr.push(tempNode.LLvalue.key);
      tempNode = tempNode.nextNode;
    }

    return keyArr;
  };

  const searchKey = (keyss) => {
    let tempNode = headNode;
    let str = "";

    while (tempNode !== null) {
      if (tempNode.LLvalue.key === keyss) {
        return (str = tempNode.LLvalue.key);
      }
      str = tempNode.LLvalue.key;
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return null;

    return str;
  };

  const addListToHeadnode = (list) => (headNode = list);

  const searchValue = (keyss) => {
    let tempNode = headNode;
    let str = "";

    while (tempNode !== null) {
      if (tempNode.LLvalue.key === keyss) {
        return (str = tempNode.LLvalue.value);
      }
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return null;

    return str;
  };

  const containsKey = (keyss) => {
    if (headNode === null) return "Linked list is empty";

    let tempNode = headNode;

    while (tempNode !== null) {
      if (tempNode.LLvalue.key === keyss) return true;
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return false;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    valueLinkedLists,
    removeLists,
    logKeyLL,
    searchKey,
    addListToHeadnode,
    searchValue,
    containsKey,
  };
}

function CreateNode(valueNode = null, valueNextNode = null) {
  let LLvalue = valueNode;
  let nextNode = valueNextNode;
  return {
    LLvalue,
    nextNode,
  };
}

export { LinkedList };
