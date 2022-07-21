export default [
  {
    id: "181913649",
    code: "for (let i = 0; i < arr.length; i++) {\n      let removeElement = false;\n      for (let j = 0; j < valsToRemove.length; j++) {\n        if (arr[i] === valsToRemove[j]) {\n          removeElement = true;\n        }\n      }\n      if (!removeElement) {\n        filteredArray.push(arr[i]);\n      }\n    }",
    result:
      "This code is filtering out values from an array that match values in another",
  },
  {
    id: "87743020",
    code: 'def printme( str ):\n "This prints a passed string into this function"\n    print str\n    return;\n printme("Im first call to user defined function!")',
    result: "This code is defining a function.",
  },
];
