$("#boton").click(() => {
    alert("Diste click en botón.");
})

$("button#theme").click(() => {
    if ($("button#theme").text() === "🌞") {
        $("body").css("background-color","rgb(100 116 139)");
        $("h1,h2").css("color","white");
        $("button#theme").text("🌙");
    } else {
        $("body").css("background-color","rgb(204 251 241)");
        $("h1,h2").css("color","rgb(100 116 139)");
        $("button#theme").text("🌞");
    }
})