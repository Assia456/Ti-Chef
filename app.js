fetch("data.json")
    .then(response => response.json())
    .then(data => {
        //ici et uniquement ici j'ai acces a mon tablea de données
        afficher(data)

    });



//role : afficher les cartes produits 
//paramtre : le tableau des produits
//return : rien 
function afficher(tableauProduits) {

    // une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(recette => {

        let nom = recette.nom
        let desc = recette.desc
        let tempsPreparation = recette.tempPreparation
        let tempsCuisson = recette.tempCuisson
        let portion = recette.portions
        let srcImg = recette.img
        let ingredientsli= liste(recette.ingredients)
        let etapeli =Etape(recette.etapes)
        let aliment = recette.ingredients.aliment





        //cible l'endroit où je veux injecter mes cartes 
        document.getElementById("cardContainer").innerHTML += `
   <div class="card">
            <div class="flex gap16 align-center">
                <h1>${nom}</h1>
                
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                    share
                    </span></a>   
                
            </div>
            <!-- 3 colonnes -->
            <div class="flex align-start gap32 mt-16">
                <!-- Partie images -->
                <div class="large-3 small-12 medium-4">
                    <div class="align-start flex gap16">
                        <div class="large-12 small">
                            <img src="${srcImg[0]}" alt="" class="responsive">
                            <div class="legende">${nom}</div>
                        </div>
                        <div class="large-4">
                            <img src="${srcImg[1]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${srcImg[2]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${srcImg[3]}" alt="" class="responsive">
                        </div>    
                    </div>
                </div>
                <!-- Partie ingredients-->
                <div class="gap32 large-3 small-12 medium-4">
                    <div class="flex gap16">
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            restaurant
                            </span>${portion}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            alarm
                            </span>${tempsCuisson}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            local_fire_department
                            </span>${tempsPreparation}</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">
                        ${desc}
                        </p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                            ${ingredientsli}
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6 small-12 medium-12"  >
                    <h2>Etapes</h2>
                    <ol>
                        ${etapeli}
                    </ol>
                </div>
            </div>
        </div>
      `

    });

   
}
 function liste(listeIngredients) {
        let listeIgt= " "

        listeIngredients.forEach(i => {
        listeIgt +=`<li> ${i.quantite} ${i.unite} ${i.aliment} </li>`
         
        }
        )
     console.log(listeIngredients)
     return listeIgt 
    }



     function Etape(etapes) {
        let etape= " "

        etapes.forEach(i => {
        etape +=`<li> ${i.descEtape} </li>`
         
        }
        )
     console.log(Etape)
     return etape
    }

    fetch("articles-data.json")
    .then(response => response.json())
    .then(data => {
        //ici et uniquement ici j'ai acces a mon tablea de données
        afficherArticles(data)

    });

function afficherArticles(tab){
    tab.forEach(article=>{
        let titre=article.titre
   let img=article.img
   let resume=article.resume
   let auteur=article.auteur
   let date=article.date


    document.getElementById("cardArticle").innerHTML += `
    <div class="card large-6 flex gap align-center" id="cardArticle">
            <!-- partie gauche -->
            <img src="${img}" alt=" " class="large-6 img-card" />

            <!-- partie de droite -->
            <div class="large-6 flex gap-12 ">
                <h3>${titre}</h3>
                <div class="flex justify-between large-12 align-center">
                    <p>${date}</p>
                    <p>${auteur}</p>   
                </div>
                <p>
                   ${resume}
                </p>
                <p class="btn left">Lire l'article</p>

            </div>
        </div>
` })
    
}


   