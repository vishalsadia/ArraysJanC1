/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers=arr.filter(employee =>employee.profession !=='admin');
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const developers=[];
    arr.forEach(employee=>{
        if (employee.profession==='devloper'){
            developers.push(employee);

        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredArr=arr.filter(employee=>employee.profession !=="admin");
    console.log(filteredArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 4, name: "alice", age: "22", profession: "designer" },
        { id: 5, name: "bob", age: "25", profession: "manager" },
        { id: 6, name: "mike", age: "23", profession: "developer" }
      ];
      const combinedArray = arr.concat(newArray);
      console.log(combinedArray);
    
  }