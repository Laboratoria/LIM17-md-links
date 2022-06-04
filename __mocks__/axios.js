

const get = jest.fn(() => Promise.resolve(
    [{
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
        text: 'Generalidades del protocolo HTTP - MDN',
        file: 'C:\\Users\\USER\\Desktop\\laboratoria\\LIM017-md-links\\files\\folder\\folder3\\archivo2.md',
        status: 200,
        ok: 'ok'

    }]
))

module.exports = { get };  