
// Este código es una función en JavaScript que se utiliza para buscar información de un usuario en 
// Github a través de la API de Github. La función utiliza el valor del campo de entrada en la página web, 
// donde el usuario ingresa el nombre del usuario de Github que desea buscar. Luego, utiliza el valor ingresado 
// para realizar una solicitud a la API de Github, que devuelve los detalles del usuario en formato JSON. 
// Si la solicitud se realiza correctamente, la función utiliza el JSON devuelto para mostrar los detalles del 
// perfil del usuario en la página web. Si la solicitud no es exitosa, la función muestra un mensaje de alerta 
// que indica el motivo del error. Este código es útil para cualquier persona que desee mostrar detalles de 
// perfil de un usuario de Github en su sitio web o aplicación web.

const searchGithub = async () => {
    const username = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const detailsContainer = document.querySelector(".details");
    const data = await response.json();

    if (response.ok) {
        detailsContainer.style.display = "flex";
        document.getElementById("result").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">Username: @${data.login}</p>
                    <p class="bio">Biografía: ${data.bio || 'Esta cuenta no tiene biografia.'}</p>
                    <div class="stats">
                        <div>
                            <div class="stats-name">Repositorios Publicos</div>
                            <div class="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Seguidores</div>
                            <div class="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Siguiendo</div>
                            <div class="stats-value">${data.following}</div>
                        </div>
                    </div>
                <div class="media">
                    <p>
                        <span class="media-value">${data.location || ' Ubicacion no disponible | '}</span>
                    </p>
                    
                    <p>
                        <span class="media-value">${data.blog || ' Youtube no disponible | '}</span>
                    </p>
                    
                    <p>
                        <span class="media-value">${data.twitter_username || ' Twitter no disponible | '}</span>
                    </p>
                    <p>
                        <span class="media-value">${data.company || ' Compania No disponible '}</span>
                    </p>
                </div>
            </div>
        </div>
        `;
    } else {
        alert(data.message);
    }
}