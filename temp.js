function bookthetable(callback) {
  setTimeout(() => {
    console.log("Booked");
    callback();
  }, 2000);
}

function orderingfood(callback) {
  setTimeout(() => {
    console.log("Ordered");
    callback();
  }, 3000);
}

function preparation(callback) {
  setTimeout(() => {
    console.log("Prepared");
    callback();
  }, 4000);
}

function serving(callback) {
  setTimeout(() => {
    console.log("Served");
    callback();
  }, 2000);
}

function havingfood(callback) {
  setTimeout(() => {
    console.log("Eating");
    callback();
  }, 5000);
}

function billing(callback) {
  setTimeout(() => {
    console.log("Billed");
    callback();
  }, 2000);
}

function movingout(callback) {
  setTimeout(() => {
    console.log("Left");
    callback();
  }, 1000);
}
bookthetable(function () {
  orderingfood(function () {
    preparation(function () {
      serving(function () {
        havingfood(function () {
          billing(function () {
            movingout(function () {});
          });
        });
      });
    });
  });
});
//Restaurant
//1. booking 2000
//2.Order  3000
//3.preparing  4000
//4.Serving  2000
//5.Eating 5000
//6.Bill 1000
//7.Leaving
