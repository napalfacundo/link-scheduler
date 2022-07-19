class MyTag extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
 
    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
        this.initComponent();
    }

    mapComponentAttributes() {
        const attributesMapping = [
            'text',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
        });
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        return `
            <div class="tag">
                ${this.attributes.text.value}
            </div>
        `;
    }
 
    templateCss() {
        return `
            <style>
             [...]
             [...]
            </style>
        `;
    }
 
    initComponent() {
        this.$tag = this.shadowDOM.querySelector('.tag');
    }
 
    // disconnectedCallback() {
    //     this.remove();
    // }
   
}
export default MyTag;