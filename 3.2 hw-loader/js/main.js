
const $loader = document.querySelector('#loader')

const $ul = document.querySelector('#people_list');

// const addPersonItem = (person) => {
//     const secondFilm = _.get(person, '["films"][1]', 'Unknown');
//     const $li = document.createElement('li');
//     $li.className = 'list-group-item';
//     $li.innerText = `
//         ${person['name']}
//         (birth year: ${person['birth_year']})
//         - second film: ${secondFilm}
//     `;
//     $ul.appendChild($li);
// };

// axios.interceptors.response.use((response) => {
//     if (response.status === 200) {
//        $loader.style.visibility = "hidden"
//     }
//     return response;
// }, (error) => {
//     return Promise.reject(error.message);
// });

// axios.get('https://swapi.dev/api/people/?page=3')
//     .then((res) => {
//         res.data.results.forEach(person => {
//             addPersonItem(person);
//         });
//     })

const addPersonItem = (person) => {
    //const secondFilm = _.get(person);
    const $li = document.createElement('li');
    $li.className = 'list-group-item';
    $li.innerText = `
        ${person['name']}
        (birth year: ${person['birth_year']})
    `;
    $ul.appendChild($li);
};


// axios.get('https://swapi.dev/api/people/?page=3')
//     .then((res) => {
//         res.data.results.forEach(person => {
//             addPersonItem(person);
//         });
//     })
//     .catch((error) => {
//         console.log('error');
//     })
//     .finally(()=>{
//         $loader.style.visibility = "hidden";
//         console.log( 'all is done' );
//     })









let pagecnt = ''

class MyClass {
    constructor() { }
    async getPageCount() {
        const globalResult = await fetch('https://swapi.dev/api/people/');
        const data = await globalResult.json()
        const pageCount = Math.ceil(data.count / 10)
        return pageCount;
    }
    async getPeopleFromAllPages(pageCount) {
        const arr = [];
        for (let c = 1; c <= pageCount; c++) {

            const result = await fetch('https://swapi.dev/api/people/?page=' + c)
            const data = await result.json();
            arr.push(data.results)
        }
        return arr;
    }
}

const myApi = new MyClass();


myApi
    .getPageCount()
    .then((res) => { let cnt = res; console.log(cnt) })

myApi
    .getPeopleFromAllPages(9)
    .then((result) => {
        console.log(result);
        for (Array of result) {
            Array.forEach(person => {
                addPersonItem(person)
            })
        }
    })
    .catch((err) => { console.error(err) })
    .finally(() => {
        $loader.style.visibility = "hidden";
        console.log('all is done');
    })

///////////////////  PROBLEM --- ERROR  NEED HELP!!!!  ////////////////////
// myApi
//     .getPageCount()
//     .then((res)=> {
//         myApi.getPeopleFromAllPages(res)
//         return result;
//     })
//     .then((result) => {
//         console.log(result);
//         for (Array of result) {
//             Array.forEach(person => {
//                 addPersonItem(person)
//             })
//         }
//     })
//     .catch((err) => { console.error(err) })
//     .finally(() => {
//         $loader.style.visibility = "hidden";
//         console.log('all is done');
//     })


