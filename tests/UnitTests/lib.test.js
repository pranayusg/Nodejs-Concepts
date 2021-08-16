const testMethods = require("../testMethods");
const db = require("../db");
// describe('first tests', () => {
//     test('Our first test', () => {

//     })
// })

// test('Our failure test', () => {
//     throw new Error('something failed')
// })

describe("Numbers tests", () => {
  test("Get positive number for positive input", () => {
    var value = testMethods.absolute(1);
    expect(value).toBe(1);
  });

  test("Get positive number for negative input", () => {
    var value = testMethods.absolute(-1);
    expect(value).toBe(1);
  });
});

describe("Strings tests", () => {
  test("Should return the greetings message", () => {
    var result = testMethods.greet("Pranay");
    expect(result).toMatch(/Pranay/);
    expect(result).toContain("Pranay");
  });

  test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

describe("Array tests", () => {
  test("Check if contains elements", () => {
    expect(shoppingList).toContain("beer");
    expect(shoppingList).toContain("beer");
  });
});

// test and it are same
describe("arrayContaining", () => {
  const expected = ["Alice", "Bob"];
  it("matches even if received contains additional elements", () => {
    expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(expected));
  });
  it("does not match if received does not contain expected elements", () => {
    expect(["Bob", "Eve"]).not.toEqual(expect.arrayContaining(expected));
  });
});

const object = { id: 1, price: 10 };

// Test fails with toBe because the object for comparison and the object compared are in different memory locations(Use toEqual to check equality)
describe("Object tests", () => {
  test("Check if objects match", () => {
    // expect(object).toBe({ "id": 1, "price": 10 });

    expect(object).toEqual({ id: 1, price: 10 });

    expect(object).toMatchObject({ id: 1, price: 10 });
    expect(object).toMatchObject({ id: 1 });
  });
});

// Object containing house features to be tested
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
    "nice.oven": true,
  },
  "ceiling.height": 2,
};

describe("Object tests with toHaveProperty", () => {
  // toHaveProperty also checks type and will fail if expected 2 and received "2"
  test("this house has my desired features", () => {
    // Example Referencing
    expect(houseForSale).toHaveProperty("bath");
    expect(houseForSale).toHaveProperty("bedrooms", 4);

    expect(houseForSale).not.toHaveProperty("pool");

    // Deep referencing using dot notation
    expect(houseForSale).toHaveProperty("kitchen.area", 20);
    expect(houseForSale).toHaveProperty("kitchen.amenities", [
      "oven",
      "stove",
      "washer",
    ]);

    expect(houseForSale).not.toHaveProperty("kitchen.open");

    // Deep referencing using an array containing the keyPath
    expect(houseForSale).toHaveProperty(["kitchen", "area"], 20);
    expect(houseForSale).toHaveProperty(
      ["kitchen", "amenities"],
      ["oven", "stove", "washer"]
    );
    expect(houseForSale).toHaveProperty(["kitchen", "amenities", 0], "oven");
    expect(houseForSale).toHaveProperty(["kitchen", "nice.oven"]);
    expect(houseForSale).not.toHaveProperty(["kitchen", "open"]);

    // Referencing keys with dot in the key itself
    expect(houseForSale).toHaveProperty(["ceiling.height"], 2);
  });
});

describe("Exceptions tests", () => {
  test("Should throw error if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];

    args.forEach((a) => {
      expect(() => {
        testMethods.resgisterUser(a);
      }).toThrow();
    });
  });

  test("Should return a username if valid username is passed", () => {
    const result1 = testMethods.resgisterUser("Pranay");
    expect(result1).toMatchObject({ username: "Pranay" });
    expect(result1.id).toBeGreaterThan(0);
  });
});

describe("Fizz Buzz tests", () => {
  test("Throw exception if number is not passed", () => {
    const args = [null, undefined, "num", {}];

    args.forEach((a) => {
      expect(() => {
        testMethods.fizzBuzz(a);
      }).toThrow();
    });
  });

  test("Check FizzBuzz", () => {
    expect(testMethods.fizzBuzz(30)).toBe("FizzBuzz");
  });

  test("Check Fizz", () => {
    expect(testMethods.fizzBuzz(12)).toEqual("Fizz");
  });

  test("Check Buzz", () => {
    expect(testMethods.fizzBuzz(10)).toEqual("Buzz");
  });

  test("Check input if all divisibility fails", () => {
    expect(testMethods.fizzBuzz(1)).toEqual(1);
  });
});

describe("Mock function", () => {
  test("Should apply 10% discount if points > 10", () => {
    db.getCustomerSync = function (id) {
      console.log("Fake reading customer");
      return { id: id, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    testMethods.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

// jest.fn(function(){}) -It takes function as argument
describe("Mock function using jest", () => {
  test("Should apply 10% discount if points > 10", () => {
    db.getCustomerSync = jest.fn((id) => {
      console.log("Reading a customer from jest mock function...");
      return { id: id, points: 20 };
    });

    const order = { customerId: 1, totalPrice: 10 };
    testMethods.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });

  test("Should apply 10% discount if points > 10 to test parameter", () => {
    db.getCustomerSync = jest.fn((id) => {
      console.log("Reading a customer from jest mock function...");
      return { id: id, points: 20 };
    });

    const order = { customerId: 1, totalPrice: 10 };
    testMethods.applyDiscount(order);
    expect(db.getCustomerSync.mock.calls[0][0]).toBe(1);
  });

  test("jest mock function to return value without taking input parameter", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ id: 2, points: 20 });

    const order = { customerId: 1, totalPrice: 10 };
    testMethods.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });

  test("jest mock function with toHaveBeenCalled()", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ id: 2, points: 20 });

    const order = { customerId: 1, totalPrice: 10 };
    testMethods.applyDiscount(order);
    expect(db.getCustomerSync).toHaveBeenCalled();
    // Also check toHaveBeenCalledwith();
  });
});

describe("async Mock function using jest", () => {
  test("async test", async () => {
    const asyncMock = jest.fn().mockResolvedValue(43);

    let value = await asyncMock(); // 43
    expect(value).toBe(43);
  });

  test("async promise rejection test", async () => {
    const asyncMock = jest.fn().mockRejectedValue("Async error");

    try {
      let value1 = await asyncMock(); // throws "Async error"
    } catch (err) {
      // console.log(err)
      expect(err).toEqual("Async error");
    }
  });

  test("async promise rejection test with error", async () => {
    const asyncMock = jest.fn().mockRejectedValue(new Error("Async error"));

    try {
      let value1 = await asyncMock(); // throws "Async error"
    } catch (err) {
      // console.log(err)
      expect(err).toEqual(new Error("Async error"));
    }
  });
});
