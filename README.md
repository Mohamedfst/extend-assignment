# Extend Integrations Challenge

This exercise is similar to the work you may be doing as a solutions engineer here at Extend. You'll be creating a modal and then integrating it into a pretend client's website. The goal: Give both the candidate and the Extend team a chance to interact on a realistic, but limited (shooting for just two or three hours), task. We see this as a two-way evaluation for the team and the candidate to decide if it's a good fit.

### Setup

Clone this repository to your own private repository on GitHub

Make sure you have Node.js setup and `yarn` installed globally.

```
git clone https://github.com/helloextend/integration-challenge.git
cd integration-challenge
yarn
yarn start
```

You should now have the app running on http://localhost:3001

## Challenge

1. We'd like you to create your own modal component.

   Treat it like a component that you'll be integrating in a variety of websites. Your code should be good quality, even if the client's website is not. Readable, maintainable code is good.
   Your modal should interfere as little as possible with the client’s website code, and it should be reusable in other websites. Remember, the client may modify their website's javascript code in the future, and ideally your integration should be separated enough from their code such that the modal can continue working.

- Your modal's HTML, javascript, and CSS should be handwritten by you. Please use either vanilla JS or jQuery.
- Your modal will ask the user to optionally select the size of business they are.
- Your modal will need to show the user's currently selected business size.
- While your modal is active, there should be a background overlay behind the modal and on top of the client's website, preventing clicks through to the rest of the page.
- Your modal should look similar to ![this](https://github.com/helloextend/integration-challenge/raw/master/modal-example-pic.png)
- Your modal should only be considered submitted if one of the follow scenarios is met:

1.  The user has selected a type of business and clicked the "I have selected my business size" button.
2.  Or the user has selected "I do not want to specify my business size" link.

3.  Once you have your modal, the client has asked you to integrate it into their website (`src/client`).
    They've asked that we first integrate the modal into the Send Inquiry button on their "Get In Touch" form.
    The goal:

        1.  Whenever a user clicks Send Inquiry, before the contact form is submitted, your modal should appear.
        2.  Upon submitting the modal, we should submit their "Get In Touch" form.

4.  There's a second place that the client wants us to integrate the modal into. They have a sidebar accessible via the "SEE CUSTOM SOLUTIONS" button in the middle of their website. In that sidebar they list which custom solutions they have, and then display a "Get In Contact" form.
    The goal:

    1.  You should integrate your modal into this form as well, making sure that when the user clicks a button to try and submit the form, your modal appears.
    2.  Upon submitting the modal, their form should then be submitted.

5.  Once you're happy with your modal and the integrations you've done, submit a PR in your repository with a descriptive message, and no more than a few commits (each with a clear purpose)

6.  In your private repository, add `m-schrepel` as a collaborator, and send an email to `matthew@extend.com` with a link to your repository

7.  Before the next interview, we will provide PR feedback, to give you a chance to improve your solution before the call

8.  Feel free to ask questions via email throughout the process, as we want to simulate working with the team

## Tips

- Try not to remove or change the client's code where possible, but instead focus on adding to it.

- Adding classes or IDs to elements on the client's website is often ok if necessary to enable the javascript to access specific DOM elements.

- On some clients' websites, you may need to work around the way they coded their app.
