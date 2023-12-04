function validateForm(){
    let form = document.forms[0];
    let name = form.name.value;
    let email = form.email.value;
    let comments = form.comments.value;

    if(name==""){
        alert("Name cannot be empty");
        form.name.style.border='2px solid #A91C18';
        return false;
    }
    if(email==""){
        alert("Email cannot be empty");
        form.email.style.border='2px solid #A91C18';
        return false;
    }
    if(comments==""){
        alert("Comments should not be empty");
        form.comments.style.border='2px solid #A91C18';
        return false;
    }
    return true;
}

// hamburger
function myHamburger(element){
    let navLinks = document.getElementsByClassName('navlinks')[0];
    navLinks.classList.toggle("active");
}

// responsiveness - image zoom
function changeSize(element){
    element.classList.toggle("full");
}
