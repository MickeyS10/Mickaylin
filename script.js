/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', function () {

    nav.classList.toggle('open');

});


/* CLOSE MOBILE MENU
   AFTER CLICKING A LINK
========================= */

const navLinks = nav.querySelectorAll('a');

navLinks.forEach(function (link) {

    link.addEventListener('click', function () {

        nav.classList.remove('open');

    });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById('year').textContent =
    new Date().getFullYear();


/* =========================
   EMAIL ENQUIRY
========================= */

const emailLink =
    document.getElementById('emailLink');

const emailModal =
    document.getElementById('emailModal');

const outlookBtn =
    document.getElementById('outlookBtn');

const gmailBtn =
    document.getElementById('gmailBtn');

const cancelBtn =
    document.getElementById('cancelBtn');

const websiteEnquiryForm =
    document.getElementById('websiteEnquiryForm');

const emailAddress =
    'mickaylinsamuel@gmail.com';


/* OPEN MODAL */

emailLink.addEventListener('click', function (event) {

    event.preventDefault();

    emailModal.classList.add('show');

});


/* GET FORM INFORMATION */

function getEnquiryDetails() {

    if (!websiteEnquiryForm.checkValidity()) {

        websiteEnquiryForm.reportValidity();

        return null;

    }


    return {

        websiteType:
            document
                .getElementById('websiteType')
                .value
                .trim(),

        businessReason:
            document
                .getElementById('businessReason')
                .value
                .trim(),

        clientName:
            document
                .getElementById('clientName')
                .value
                .trim(),

        clientPhone:
            document
                .getElementById('clientPhone')
                .value
                .trim()

    };

}


/* CREATE EMAIL */

function createEmail(details) {

    const subject =
        `Website Enquiry — ${details.clientName}`;


    const body =
`Hi Mickaylin,

I'd like to enquire about having a website developed.

What kind of website:
${details.websiteType}

Type of business / reason for website:
${details.businessReason}

Name and surname:
${details.clientName}

Cell phone number:
${details.clientPhone}

Kind regards,
${details.clientName}`;


    return {
        subject,
        body
    };

}


/* =========================
   OUTLOOK
========================= */

outlookBtn.addEventListener('click', function () {

    const details =
        getEnquiryDetails();

    if (!details) return;


    const email =
        createEmail(details);


    window.location.href =
        `mailto:${emailAddress}` +
        `?subject=${encodeURIComponent(email.subject)}` +
        `&body=${encodeURIComponent(email.body)}`;


    emailModal.classList.remove('show');

});


/* =========================
   GMAIL
========================= */

gmailBtn.addEventListener('click', function () {

    const details =
        getEnquiryDetails();

    if (!details) return;


    const email =
        createEmail(details);


    const gmailURL =
        `https://mail.google.com/mail/?view=cm` +
        `&fs=1` +
        `&to=${encodeURIComponent(emailAddress)}` +
        `&su=${encodeURIComponent(email.subject)}` +
        `&body=${encodeURIComponent(email.body)}`;


    window.open(
        gmailURL,
        '_blank'
    );


    emailModal.classList.remove('show');

});


/* =========================
   CANCEL
========================= */

cancelBtn.addEventListener('click', function () {

    emailModal.classList.remove('show');

});


/* =========================
   CLICK OUTSIDE MODAL
========================= */

emailModal.addEventListener('click', function (event) {

    if (
        event.target === emailModal
    ) {

        emailModal.classList.remove('show');

    }

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener('keydown', function (event) {

    if (
        event.key === 'Escape'
    ) {

        emailModal.classList.remove('show');

    }

});