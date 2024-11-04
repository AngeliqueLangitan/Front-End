let person = {
    firstName: "Jane",
    weight: 70, //dalam kg
    height: 1.75, //dalam meter
    
    //metode menghitung BMI
    calculateBMI: function() {
      //menghitung BMI
      let bmi = this.weight / (this.height * this.height);
      
      //menyimpan hasil BMI dalam properti baru
      this.BMI = bmi;
  
      //menampilkan hasil BMI
      return bmi;
    },
  
    //tampilkan kategori BMI berdasarkan hasil perhitungan
    getBMICategory: function() {
      //menghitung BMI
      let bmi = this.calculateBMI();
      
      //menentukan kategori berdasarkan BMI
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
      } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
      } else {
        return "Obesity";
      }
    }
  };
  
  //menghitung BMI dan menyimpan hasilnya
  console.log("BMI:", person.calculateBMI()); //tampilkan BMI
  console.log("BMI Category:", person.getBMICategory()); //tampilkan kategori BMI
  