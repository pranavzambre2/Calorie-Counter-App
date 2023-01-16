myarr = [
    {
        foodName: "Burger",
        categary: "snacks",
        calories: 272,
        junkFood: "yes"
    },
    {
        foodName: "Sandwich",
        categary: "Breakfast",
        calories: 252,
        junkFood: "no"
    },
    {
        foodName: "Omlett",
        categary: "Breafast",
        calories: 226,
        junkFood: "no"
    },
    {
        foodName: "momos",
        categary: "snacks",
        calories: 230,
        junkFood: "yes"

    },
    {
        foodName: "Halwa",
        categary: "Breakfast",
        calories: 220,
        junkFood: "no"

    },
    {
        foodName: "Brownbread",
        categary: "Breakfast",
        calories: 380,
        junkFood: "no"
    },
    {
        foodName: "Rice",
        categary: "lunch",
        calories: 350,
        junkFood: "no"
    },
    {
        foodName: "Cokies",
        categary: "Breakfast",
        calories: 200,
        junkFood: "no"
    },
    {
        foodName: "Chicken",
        categary: "Dinner",
        calories: 500,
        junkFood: "no"
    },
    {
        foodName: "Pasta",
        categary: "Snacks",
        calories: 400,
        junkFood: "yes"
    }

];
const button0 = document.querySelector('.left1')
button0.addEventListener('click', function () {
    for (let foodName = 0; foodName < myarr.length; foodName++)


        console.log(myarr[foodName]);

});
const button1 = document.querySelector('.left2')
button1.addEventListener('click', function () {
    const result = myarr.filter((myarr) => {
        if (myarr.categary == "Breakfast") {
            alert("we can eat " + myarr.foodName);
        }
        else 0;

    });
    console.log(result);
});
const button2 = document.querySelector('.right2')
button2.addEventListener('click', function () {
    const calory = myarr.filter((myarr) => {
        if (myarr.calories < 300) {

            alert(myarr.foodName + " has " + myarr.calories + " calories");


        }
    });
    console.log(calory);
});
const button3 = document.querySelector('.right1')
button3.addEventListener('click', function () {
    const junky = myarr.filter((myarr) => {
        if (myarr.junkFood == "yes") {
            alert(myarr.foodName);
        }
    });
    console.log(junky);
});
