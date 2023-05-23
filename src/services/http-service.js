import 'whatwg-fetch';

//you can have class in es6 codes
class HttpService {

    //this function fetches data from api
    getProducts = () => {
        var promise = new Promise(
            (resolve, reject) => {
                fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(
                    response => {
                        resolve( response.json() );
                        console.log("promise is working");
                    }
                );
            }
        );
        return promise;
    }

}

//exporting this service to be available to components.
export default HttpService;
