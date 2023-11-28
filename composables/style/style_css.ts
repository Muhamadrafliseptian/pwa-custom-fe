export const Style = () => {
    useHead({
        link: [{
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
            crossorigin: 'anonymous'
        },
        {
            href: 'https://fonts.cdnfonts.com/css/roboto',
            rel: 'stylesheet'
        }
    ]
    })
}

export default Style