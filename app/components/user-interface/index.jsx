const verifyClinicPage = ({name, address}) => {
    return {
        text: `In the window on the right you should see the page for ${name}.<br/>Is this the page for ${name} at ${address}?`,
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

const sortReviews = () => {
    return {
        text: `Scroll down to where the reviews start on the page. Click the 'Stort by' dropdown and choose the 'Lowest Rated' option.<br/>Are there negative reviews for this CPC?`,
        buttons: [
            {
                label: 'yes',
                nextPage: 'upvoteReviews'
            },
            {
                label: 'no',
                nextPage: 'verifyClinicPage'
            }
        ]
    }
}

const upvoteReviews = () => {
    return {
        text: `Find reviews that mention personal experience about services provided. Look for reviews that shrare information about services the clinic does, and doesn't provide and upvote them.<br/>Click below if you'd like to look at another clinic.`,
        buttons: [
            {
                label: 'yes',
                nextPage: 'verifyClinicPage'
            }
        ]
    }
}

export default {
    verifyClinicPage,
    sortReviews,
    upvoteReviews
}
