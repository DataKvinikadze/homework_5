// 1

const { count } = require("console");
const fs = require("fs/promises");
const { json } = require("stream/consumers");

const FetchData = async (params) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const parsedData = data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      username: el.username,
      email: el.email,
    };
  });

  await fs.writeFile("users.json", JSON.stringify(parsedData));
};

FetchData();

// 2

const createCarObject = async () => {
  // console.log(process.argv);

  const CarsJson = await fs.readFile("cars.json", "utf-8");

  const CarsArray = JSON.parse(CarsJson);

  const CarArray = process.argv;

  const CarObj = {
    id: CarsArray[CarsArray.length - 1]?.id || 0,
    carModel: CarArray[2],
    carReleaseDate: CarArray[3],
    carColor: CarArray[4],
  };
  CarsArray.push(CarObj);

  await fs.writeFile("cars.json", JSON.stringify(CarsArray));
};

createCarObject();

// 3

const countVowes = async () => {
  const data = await fs.readFile("text.txt", "utf-8");
  const dataArray = data.split("");
  let i = 0;
  dataArray.forEach((element) => {
    if (["a", "e", "i", "o", "u"].includes(element)) {
      i++;
    }
  });
  console.log(i);
};

countVowes();
