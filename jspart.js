const form = document.getElementById("clubForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dept = document.getElementById("dept").value.trim();
    const email = document.getElementById("email").value.trim();
    const club = document.getElementById("club").value;

    const alphaPattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

    if (!name.match(alphaPattern)) {
        alert("❌ Name should contain only alphabets!");
        return;
    }

    if (!dept.match(alphaPattern)) {
        alert("❌ Department should contain only alphabets!");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("❌ Please enter a valid email address!");
        return;
    }

    if (club === "") {
        alert("❌ Please select a club!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} (${dept}) joined the ${club}`;
    studentList.appendChild(li);

    form.reset();
});
