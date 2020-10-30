const formData = [
    {
        labelFor: 'name',
        labelContent: 'Name',
        sectionType: 'input',
        id: 'name',
        type: 'text',
        placeholder: 'Your name...'
    },
    {
        labelFor: 'email',
        labelContent: 'Email address',
        sectionType: 'input',
        id: 'email',
        type: 'email',
        placeholder: 'Your email...'
    },
    {
        labelFor: 'subject',
        labelContent: 'Subject',
        sectionType: 'input',
        id: 'subject',
        type: 'text',
        placeholder: 'Your subject...'
    },
    {
        labelFor: 'message',
        labelContent: 'Message',
        sectionType: 'textarea',
        name:'message',
        id:'message',
        placeholder: 'Your message...'
    },
    {
        sectionType: 'button',
        type:'submit',
        value: 'Send Message'
    }
];

export { formData };