const verifyClinicPage = ({name, address}) => {
    return {
        text: `In the window on the right you should see the page for ${name}.</br>Is this the page for ${name} at ${address}?`,
        buttons: [
            {
                label: 'yes',
                nextPage: 'sortReviews'
            },
            {
                label: 'no',
                nextPage: 'verifyClinicPage'
            }
        ]
    }
}

export default {
    verifyClinicPage,
    sortReviews
}
