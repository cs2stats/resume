$(document).ready(function () {
    let relativePath = ''
    const projectName = 'match-summary'

    function formatLiveTime (totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60

        return `${minutes}:${String(seconds).padStart(2, '0')}`
    }

    function sortObjectByAttribute(obj, attribute, desc = true) {
        return Object.values(obj).sort((a, b) => {
            const valueA = a[attribute]
            const valueB = b[attribute]
            return desc ? valueB - valueA : valueA - valueB
        })
    }

    function transformToRelative() {
        const segments = window.location.pathname.substring(1).split('/').filter(segment => segment !== '')
        const index = segments.indexOf(projectName)

        if (index !== -1) {
            console.log($('a'), $('a[href]'))

            $('a[href]').each(function() {
                var currentHref = $(this).attr('href')

                console.log($(this), currentHref)

                var newHref = `/${ projectName }/${ currentHref }`

                $(this).attr('href', newHref)
            })

            return `/${ projectName }/`
        }

        relativePath = segments.length > 0 ? '../'.repeat(segments.length) : ''
    }

    transformToRelative()

    window.relativePath = relativePath
    window.formatLiveTime = formatLiveTime
    window.sortObjectByAttribute = sortObjectByAttribute
    window.transformToRelative = transformToRelative
})

// function sortObjectByAttribute(obj, attribute, desc = true) {
//     return Object.fromEntries(
//       Object.entries(obj)
//         .sort(([, a], [, b]) => {
//           const valueA = a[attribute];
//           const valueB = b[attribute];
//           return desc ? valueB - valueA : valueA - valueB;
//         })
//     );
// }
