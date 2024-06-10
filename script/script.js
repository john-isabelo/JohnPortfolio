document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        // Redirect to GitHub Pages
        window.location.href = "https://github.com/john-isabelo/ITID_Capstone";
        // Alternatively, you can use window.location.assign
        // window.location.assign("https://github.com/john-isabelo/ITID_Capstone");
    });

    document.getElementById("myButton2").addEventListener("click", function() {
        // Redirect to GitHub Pages
        window.location.href = "https://github.com/john-isabelo/PROG2370_Final";
        // Alternatively, you can use window.location.assign
        // window.location.assign("https://github.com/john-isabelo/ITID_Capstone");
    });

    document.getElementById("myButton3").addEventListener("click", function() {
        // Redirect to GitHub Pages
        window.location.href = "https://github.com/john-isabelo/AldeguerWang_A4_exe";
        // Alternatively, you can use window.location.assign
        // window.location.assign("https://github.com/john-isabelo/ITID_Capstone");
    });

    document.getElementById("myButton4").addEventListener("click", function() {
        // Redirect to GitHub Pages
        window.location.href = "https://www.theasys.io/viewer/vbaRzsfRaoDaJwykumUUgit0OkDqx1/";
        // Alternatively, you can use window.location.assign
        // window.location.assign("https://github.com/john-isabelo/ITID_Capstone");
    });

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form values
        const name = form.elements["Name"].value;
        const email = form.elements["Email"].value;
        const subject = form.elements["Subject"].value;
        const message = form.elements["Message"].value;

        // Construct the mailto URL
        const mailtoLink = `mailto:john.isabelo@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Redirect to the mailto URL
        window.location.href = mailtoLink;
    });
});