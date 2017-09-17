const verifyClinicPage = ({name, address}) => {
    return {
        text: `In the window on the right you should see the page for ${name}. Is this the page for ${name} at ${address}?`,
        buttons: [
            {
                label: 'yes',
                nextPage: 'sortReviews'
            },
            {
                label: 'no',
                nextPage: 'new'
            }
        ]
    }
}

const sortReviews = () => {
    return {
        text: `Scroll down to where the reviews start on the page. Click the 'Stort by' dropdown and choose the 'Lowest Rated' option. Are there negative reviews for this CPC?`,
        buttons: [
            {
                label: 'yes',
                nextPage: 'upvoteReviews'
            },
            {
                label: 'no',
                nextPage: 'new'
            }
        ]
    }
}

const upvoteReviews = () => {
    return {
        text: `Find reviews that mention personal experience about services provided. Look for reviews that shrare information about services the clinic does, and doesn't provide and upvote them. Click below if you'd like to look at another clinic.`,
        buttons: [
            {
                label: 'yes',
                nextPage: 'new'
            }
        ]
    }
}

export default {
    verifyClinicPage,
    sortReviews,
    upvoteReviews
}
