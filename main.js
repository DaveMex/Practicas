$("#boton").click(() => {
    alert("Diste click en botรณn.");
})

$("button#theme").click(() => {
    if ($("button#theme").text() === "๐") {
        $("body").css("background-color","rgb(100 116 139)");
        $("h1,h2").css("color","white");
        $("button#theme").text("๐");
    } else {
        $("body").css("background-color","rgb(204 251 241)");
        $("h1,h2").css("color","rgb(100 116 139)");
        $("button#theme").text("๐");
    }
})