async function lang(lang = 'ru') {
    let target = `dist/javascripts/Languages/${lang}.json`;
    let content = await axios.get(target);
    return content;
};

export default lang;