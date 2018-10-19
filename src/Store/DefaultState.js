const defaultState = {
    header_data: {
        header_menu: {
            menu: ''
        },
        header_nav_items: ["","",""],
        learn: "",
        menu: {
            menu__adaptive:["","",""],
            menu__items: [
                {
                    text: '',
                    icon: ''
                },
                {
                    text: '',
                    icon: ''
                },
                {
                    text: '',
                    icon: ''
                },
                {
                    text: '',
                    icon: ''
                },
            ]
        }
    },
    languages: {
        currentLanguage: '',
        languageVarious: ['', '']
    },
    about: "",
    learn: "",
    decorItems: [
        {
            id: null,
            item_title: "",
            item_text: "",
            item_img: "",
            item_right: false
        },
        {
            id: null,
            item_title: "",
            item_text: "",
            item_img: "",
            item_right: false
        },
    ],
    qualityContent: {
        title: "",
        text: "",
        vids: [
            {
                image: "",
                desc: "",
                video: ""
            },
            {
                image: "",
                desc: "",
                video: ""
            },
            {
                image: "",
                desc: "",
                video: ""
            }
        ]
    },
    aboutItem: [
        {
            id: null,
            item_title: "",
            item_text: "",
            item_img: "",
            item_right: false
        }
    ]
};

export default defaultState;