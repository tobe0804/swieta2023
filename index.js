// Lista dostępnych imion
var dostepneImiona = ["Marysia i ja", "Stach", "Reksio", "Kazik", "Mrówka", "Marta i Marcin", "Reksio", "Pershi"];

// Funkcja do losowania imienia
function losujImie() {
    var wylosowaneImie = document.getElementById("wylosowaneImie");

    // Sprawdź, czy są jeszcze dostępne imiona
    if (dostepneImiona.length > 0) {
        // Wylosuj indeks imienia
        var losowyIndex = Math.floor(Math.random() * dostepneImiona.length);

        // Pobierz wylosowane imię
        var wylosowane = dostepneImiona.splice(losowyIndex, 1);

        // Wyświetl wylosowane imię
        wylosowaneImie.textContent = "Wylosowane imię: " + wylosowane;
    } else {
        wylosowaneImie.textContent = "Brak dostępnych imion";
    }
}
