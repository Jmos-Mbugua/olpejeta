
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
    function fetchUserData(){
        fetch('https://olpejeta-apis.000webhostapp.com/api/users/')
            .then(response => response.json())
            .then(users => {
                let output = '<h2>Lists of Users sightings</h2>';
                output += '<ul>';
                users   .forEach(function(user) {
                    output += `
                        <li>
                            ${user.user_email}
                        </li>   
                    `;
                });
                output += '</ul>'
                document.getElementById("response").innerHTML = output;
            });

            fetch('https://olpejeta-apis.000webhostapp.com/api/users/1/sightings')
        .then(response => response.json())
        .then(sightings => {
            let output = '<h2>Lists of Users sightings</h2>';
            output += '<ul>';
            sightings.forEach(function(sighting) {
                output += `
                    <li>
                        ${sighting.birds_count}
                    </li>   
                `;
            });
            output += '</ul>'
            document.getElementById("response").innerHTML = output;
        });
    }
});




  