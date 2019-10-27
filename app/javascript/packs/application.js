// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()

require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


$(document).ready(() => {
    const passwordUpdater = $('#password_updater')
    const current_user_id = passwordUpdater.data('user-id')

    passwordUpdater.on('click', (event) => {

        event.preventDefault()
        const password = $('input[name="user[password]"]').val()
        const passwordConfirmation = $('input[name="user[password_confirmation]"]').val()
        $.post(`/users/${current_user_id}/update_password`,
               { user: { password: password,
                       password_confirmation: passwordConfirmation }}, (result) => {
            if(result.errors) {
                $('.field_with_errors').text("Password " + result.errors.password)
                $('#notice').text('')
            }
            else if (result.notice) {
                $('#notice').text(result.notice)
                $('.field_with_errors').text('')
            }
            })
    })

})

