const zipLists = require(".");
const LinkedList = require("..");

describe("Zip List", () => {
  it("Zips lists, and uneven lists", () => {
    const list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);
    list1.insert(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);
    list2.append(7);

    const zipped = zipLists(list1, list2);

    expect(zipped.read()).toEqual([2, 5, 3, 9, 1, 4, 7]);
  });

  it("passes expected failure", () => {
    let list = new LinkedList();
    expect(zipLists(list, null)).toEqual("ZipList requires two lists");
  });
});
