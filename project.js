const form = document.getElementById("film-form");
const titleElement =document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

///UI Objesini Başlatma
const ui = new UI();
// STORAGE
const storage = new Storage();

// tüm eventleri yükleme
eventListeners()
function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
     let films = storage.getFilmsFromStorage();
     ui.l
  
    })

}
function addFilm(e){
    const title =titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if ( title === "" || director ==="" || url === ""){
        // hata
        ui.displayMessages("Please fill all spaces...", "danger");


    }else{
        //Yeni film
        const newFilm= new Film (title, director, url);
        storage.addFilmToStorage(newFilm);  //storage film ekleme


        ui.addFilmToUI(newFilm); //arayüze film ekleme
        ui.displayMessages("Film başarıyla eklendi.","success")

    }
    ui.clearInputs(titleElement,urlElement,directorElement);
        


    e.preventDefault();
}


