document.getElementById('getData').addEventListener('click', getData);
document.getElementById('getAPI').addEventListener('click',getAPI);

function getData()
        {
       fetch('​https://jsonplaceholder.typicode.com/todos ')
                .then(function (res) 
                {
                    return res.json();
                })
                .then(function (data) 
                {
                    let result = `<h2> User Info From sampleUser.json </h2>`;
                    data.forEach((user) => {
                                const { userId, id, title, completed } = user
                                result +=
                                `<div>
                            <h5> userId: ${userId} </h5>
                            <ul class="w3-ul">
                                <li> id: ${id}</li>
                                <li> title: ${title} </li>
                                <li> completed: ${completed} </li>
                            </ul>
                        </div>`;

                        document.getElementById('result').innerHTML = result;
                    });
             })
             }
function getAPI(){
                    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => { return res.json() })
    .then((data) => {
        let result = `<h2> Random User Info From Jsonplaceholder API</h2>`;
        data.forEach((user) => {
            const { userId, id, title, completed, address: { city, street } } = user
            result +=
                `<div>
                 <h5> userId: ${userId} </h5>
                     <ul class="w3-ul">
                        <li> id: ${id}</li>
                        <li> title: ${title} </li>
                        <li> completed: ${completed} </li>
                         <li> User Address : ${city}, ${street} </li>
                     </ul>
                  </div>`;
                    document.getElementById('result').innerHTML = result;
                });
            })
                    
            }