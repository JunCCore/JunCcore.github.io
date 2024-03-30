document.title = '今夕何夕💌见此良人'
window.onblur = () => (document.title = '春草明年绿💔王孙归不归')
window.onfocus = () => (document.title = '今夕何夕💌见此良人')

const print = (colorCode, input) =>
    console.log(`\x1b[0;${colorCode}m${input}\x1b[0m`)

setTimeout(() => {
    console.clear()
    print(91, '今夕何夕💌见此良人')
}, 1000)

// CDN
const CND = [
    'https://fastly.jsdelivr.net',
    'https://unpkg.com/',
    'https://cdn.jsdelivr.net',
]

const packages = [
    'anchor-js@4/',
    'github-markdown-css@4/',
    'jquery@3/dist/',
    'bootstrap@4/dist/',
    'highlight.js@11/',
    'prismjs@1/',
    'tocbot@4/dist/',
    'typed.js@2/lib/',
    '@fancyapps/fancybox@3/dist/',
    'nprogress@0/',
    'mathjax@3/es5/',
    'katex@0/dist/',
    'clipboard@2/dist/',
    'mermaid@8/dist/',
    'valine@1/dist/',
    'hint.css@2/',
]

const cdn = await checkCDN()
if (cdn !== true) {
    packages.forEach((package) => {
        const Tag = document.createElement('script')
        Tag.src = `${cdn}${package}`
        document.body.appendChild(Tag)
    })
}

async function checkCDN() {
    if (window?.Jquery) {
        return true
    } else {
        for (const url of CND) {
            const { status } = await fetch(url)
            if (status === 200) {
                return url
            }
        }
    }
}
