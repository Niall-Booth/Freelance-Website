$("#submit").on("click", function(){
    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const message = $("#message").val();

    const recipient = "maplecounselling@outlook.com";

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        "Dear Lindsey,\n\n" +
        message + "\n\n" +
        "Kind regards,\n\n" +
        name
        +"\n\n" +
        "Email: " + email
    )}`;
})