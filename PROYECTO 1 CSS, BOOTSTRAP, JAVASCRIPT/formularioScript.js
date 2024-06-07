document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formr");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputs = form.querySelectorAll("input");
        
        inputs.forEach(input => {
            input.value = input.value.trim();
        });

        form.submit();
    });
});
