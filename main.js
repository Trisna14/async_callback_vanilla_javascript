function get_data_class (url, success, error) {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            
            if (xhr.status === 200) {

                success(xhr.response);
            } else if (xhr.status === 404) {
                
                error(xhr.status);
            }
        }
    }

    xhr.open('get', url);
    xhr.send();

}

console.log('start');
get_data_class('mains.json',
    (results) => {console.log(JSON.parse(results));}, 
    (e) => {console.log(e)}
);
console.log('end');