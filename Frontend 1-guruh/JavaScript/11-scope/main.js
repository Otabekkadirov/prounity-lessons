function foo() {
    let userName = "Javohir";
    console.log(userName);
    function bar() {
        console.log(userName);
    }
    bar();
}

foo();
