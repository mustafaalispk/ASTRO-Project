const HTMLElementBase =
    typeof HTMLElement === 'undefined' ? function () { } : HTMLElement;

/**
 * BlockLink
 * @class
 * @constructor
 * @public
 */
class BlockLink extends HTMLElementBase {
    constructor() {
        super();

        this.triggerLinkClick = this.triggerLinkClick.bind(this);
    }

    /**
     * Getters
     * @type HTMLLinkElement | HTMLAnchorElement
     */
    get link() {
        console.log("test")
        return (
            this.querySelector('a[data-block-link-target]') || this.querySelector('a')
        );
    }

    /**
     * connectedCallback
     * Render html/css & attatch event listeners
     */
    connectedCallback() {
        if (this.link) {
            this.addEventListener('click', this.triggerLinkClick);
        }
    }

    /**
     * disconnectedCallback
     * Remove listeners.
     */
    disconnectedCallback() {
        this.removeEventListener('click', this.triggerLinkClick);
    }

    /**
     * Triggers a click on the link element
     * @param {Event & { target: HTMLElement }} event - click event.
     */
    triggerLinkClick(event) {
        if (event.target.tagName !== 'A') {
            this.link.click();
        }
    }
}

if (typeof window !== 'undefined') {
    if (customElements.get('block-link') === undefined) {
        window.customElements.define('block-link', BlockLink);
    }
}
