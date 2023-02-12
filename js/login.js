document.getElementById("btn-submit").addEventListener("click", function () {
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-pass").value;

    if (email === "rafsan@gmail.com" && password === "secret")
        console.log("login successful");
    else console.log("invalid user");
});
