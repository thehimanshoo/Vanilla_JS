document.write("=> for(in) Iterator, Example :- ");
    document.write(`<br>`);
    document.write(`<br>`);

    var arr = [];
    arr[0] = 10;
    arr[1] = "Fashion";
    arr[2] = true;
    arr[3] = "Food";
    // document.write(arr);
    console.log(arr);

    // Using Iterators to print all the value present in array (in & of)
    for (let value in arr) {
      document.write(
        `${value} : [${typeof value}] - ${arr[value]} - ${typeof arr[
          value
        ]}<br>`
      );
    }

    document.write(`<br>`);
    document.write("=> for(of) Iterator, Example :- ");
    document.write(`<br>`);
    document.write(`<br>`);

    for (var value of arr) {
      document.write(`${value} : [${typeof value}]<br>`);
    }
    document.write(`<br>`);

    // Array can store any data type and function in javaScript
    let components = [
      "Keyboard",
      "Mouse",
      "Cooling-Pad",
      ["Delhi", "Hyderabad", "Chandigarh", "Bihar"],
      function () {
        document.write("Hello..!! Function From Array...!!");
      },
    ];

    // we have to display "Mouse, Hyderabad, & function()"
    document.write(
      "=> Example showing that Array can store different dataTypes along with function:- "
    );
    document.write(`<br>`);
    document.write(`<br>`);

    document.write(`${components[2]} <br>`);
    document.write(`${components[1]} <br>`);
    document.write(`${components[3][1]} <br>`);
    components[4]();


    /*
        Array Methods

        1. Reading Elements from Array :-

        i.   toString()  :- It returns all array elements separated with ","
        ii.  join()      :- It returns all elements with cusom delimeter.
        iii. map()       ;- It is an iterator that returns all elements and uses a custom presentation.
        iv.  find()
        v.   filter()
        vi.  slice
    
    */

    // i. Example of toString()
    document.write(`<br>`);
    document.write(`<br>`);
    document.write("1. Example of toString() :- ");
    document.write(`<br>`);
    document.write(`${components.toString()} <br>`);

    // ii. Example of join()
    document.write(`<br>`);
    document.write(`<br>`);
    document.write("2. Example of join() :- ");
    document.write(`<br>`);
    document.write(`${components.join("->")} <br>`);

    // iii. Example of map()
    document.write(`<br>`);
    document.write(`<br>`);
    document.write("3. Example of map() :- ");
    document.write(`<br>`);
    components.map((component) => {
        document.write(component + "<br>")
    });

    // iv. Example of find()
    document.write(`<br>`);
    document.write(`<br>`);
    document.write("4. Example of find() :- ");
    document.write(`<br>`);
    var result = components[3].find((state) => {
        return state == "Bihar";
    });
    document.write(result);

     // v. Example of filter()
     document.write(`<br>`);
     document.write(`<br>`);
     document.write("5. Example of filter() :- ");
     document.write(`<br>`);
    var salarys = [40000, 45000, 46000, 50000, 52000, 56000];

     var result = salarys.filter((salary) => {
         return salary >= 50000;
     });
     document.write(result);


     // vi. Example of slice()
     document.write(`<br>`);
     document.write(`<br>`);
     document.write("5. Example of filter() :- ");
     document.write(`<br>`);
     var result = components[3].slice(0,3);
     document.write(result);