const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
names.forEach(name => {
  console.log(name);
});

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

const provincesUpperCase = provinces.map(province => province.toUpperCase());
console.log(provincesUpperCase);

const nameLengths = names.map(name => name.length);
console.log(nameLengths);

const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

const nameContainsS = names.map(name => name.includes("S"));
console.log(nameContainsS);

const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);