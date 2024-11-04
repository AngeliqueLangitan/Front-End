
// 1.Menghitung usia & tahun sampai pensiun
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2.Menjumlah angka dengan array dan reduce
const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3.Menghitung luas lingkaran
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

const area21 = calculateArea({ radius: 21, power: 2 });
const area7 = calculateArea({ radius: 7, power: 2 });

console.log(`Area with radius 21: ${area21}, and area with radius 7: ${area7}`);

// 4. Permintaan AJAX dengan default method
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};
