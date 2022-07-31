
const $loader = document.querySelector('#loader')

const $ul = document.querySelector('#people_list');

const addPersonItem = (person) => {
    const secondFilm = _.get(person, '["films"][1]', 'Unknown');
    const $li = document.createElement('li');
    $li.className = 'list-group-item';

    // name + '(birth year: ' + birthYear + ')';
    $li.innerText = `
        ${person['name']}
        (birth year: ${person['birth_year']})
        - second film: ${secondFilm}
    `;
    $ul.appendChild($li);
};

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
       $loader.style.visibility = "hidden"
    }
    return response;
}, (error) => {
    return Promise.reject(error.message);
});

axios.get('https://swapi.dev/api/people/?page=3')
    .then((res) => {
        res.data.results.forEach(person => {
            addPersonItem(person);
        });
    })
    

    