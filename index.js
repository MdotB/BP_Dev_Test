// // BEGIN TASK 1

// const randomizeArray = (arr) => {

//     let counter = arr.length;
//     let randomIndex;
//     let temp;

//     while (counter > 0) {
//         counter--
//         randomIndex = Math.floor(Math.random() * counter)
//         temp = arr[counter]
//         arr[counter] = arr[randomIndex]
//         arr[randomIndex] = temp
//     }

//     return arr
// }

// const numberSet = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]
// console.log(randomizeArray(numberSet))

// // END TASK 1


// // BEGIN TASK 2

// const arrayMean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
// console.log(arrayMean(numberSet))

// // END TASK 2


// BEGIN TASK 3

const endPoint = "http://bpbuild.com/devtest/data.php"

const makeTableFromData = () => {

    let txt = ""

    fetch(endPoint) // Fetch data
    .then(res => res.json()) // convert to js object
    .then(res => { // build table and inject dynamic data from endpoint
        txt += "<table border='1'>"
          + "<thead>" + "<tr><th>First Name</th><th>Last Name</th>"
          + "<th>Email</th><th>Gender</th></tr></thead><tbody>"
        for (let i = 0; i < res.length; i++) {
            txt += "<tr>" // build
            + "<td>" + res[i].firstname + "</td>"
            + "<td>" + res[i].lastname + "</td>"
            + "<td>" + res[i].email + "</td>"
            + "<td>" + res[i].gender + "</td>"
            txt += "</tr>"
        }
        txt += "</tbody></table>"
        
        document.getElementById("table-wrapper").innerHTML = txt // render table 
    })
    .catch(err => console.log(err))
}

makeTableFromData()

// END TASK 3