function number() {
    let counter = 0;
    return function(num) {
      counter = counter + num
        return console.log(counter);
    };
};
const sum = number();
sum(3);
sum(5);
sum(20);